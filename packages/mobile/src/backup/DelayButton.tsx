import colors from '@celo/react-components/styles/colors'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setBackupDelayed } from 'src/account/actions'
import { OnboardingEvents } from 'src/analytics/Events'
import ValoraAnalytics from 'src/analytics/ValoraAnalytics'
import { Namespaces } from 'src/i18n'
import { navigateBack } from 'src/navigator/NavigationService'
import { TopBarTextButton } from 'src/navigator/TopBarButton'
import { shouldForceBackupSelector } from 'src/redux/selectors'
import useTypedSelector from 'src/redux/useSelector'

export default function DelayButton() {
  const shouldForceBackup = useTypedSelector(shouldForceBackupSelector)
  const dispatch = useDispatch()

  const onPressDelay = React.useCallback(() => {
    dispatch(setBackupDelayed())
    ValoraAnalytics.track(OnboardingEvents.backup_delay)
    navigateBack()
  }, [dispatch])

  const { t } = useTranslation(Namespaces.backupKeyFlow6)

  if (shouldForceBackup) {
    return (
      <TopBarTextButton titleStyle={styles.root} onPress={onPressDelay} title={t('delayBackup')} />
    )
  } else {
    return <View />
  }
}

const styles = StyleSheet.create({
  root: {
    color: colors.gray4,
  },
})
