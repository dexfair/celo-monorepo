import { createNamespaceIfNotExists } from 'src/lib/cluster'
import { execCmd, execCmdWithExitOnFailure } from 'src/lib/cmd-utils'
import { doCheckOrPromptIfStagingOrProduction } from 'src/lib/env-utils'
import { installAndEnableMetricsDeps, redeployTiller } from 'src/lib/helm_deploy'

/**
 * Basic info for an EKS cluster
 */
export interface AwsClusterConfig {
  clusterRegion: string
  clusterName: string 
  // subscriptionId: string
}

// switchToCluster configures kubectl to connect to the EKS cluster
export async function switchToAwsCluster(
  celoEnv: string,
  clusterConfig: AwsClusterConfig,
  checkOrPromptIfStagingOrProduction = true
) {
  if (checkOrPromptIfStagingOrProduction) {
    await doCheckOrPromptIfStagingOrProduction()
  }

  // TODO Look into switching subscription between testing and production

  let currentCluster = null
  try {
    ;[currentCluster] = await execCmd('kubectl config current-context')
  } catch (error) {
    console.info('No cluster currently set')
  }

  // We expect the context to be the cluster name. If the context isn't known,
  // we get the context from AWS.
  if (currentCluster === null || currentCluster.trim() !== clusterConfig.clusterName) {
    const [existingContextsStr] = await execCmdWithExitOnFailure('kubectl config get-contexts -o name')
    const existingContexts = existingContextsStr.trim().split('\n')
    if (existingContexts.includes(clusterConfig.clusterName)) {
      await execCmdWithExitOnFailure(`kubectl config use-context ${clusterConfig.clusterName}`)
    } else {
      await execCmdWithExitOnFailure(
        `aws eks --region ${clusterConfig.clusterRegion} update-kubeconfig --name ${clusterConfig.clusterName} --alias ${clusterConfig.clusterName}`
        ) 
    }
  }
  await setupCluster(celoEnv, clusterConfig)
}

// setupCluster is idempotent-- it will only make changes that have not been made
// before. Therefore, it's safe to be called for a cluster that's been fully set up before
async function setupCluster(celoEnv: string, clusterConfig: AwsClusterConfig) {
  await createNamespaceIfNotExists(celoEnv)

  console.info('Performing any cluster setup that needs to be done...')

  await redeployTiller()
  await installAndEnableMetricsDeps(true, clusterConfig.clusterName)
  // Should not execute AADPodIdentityif on AWS
  // await installAADPodIdentity()
}