import SmartTopAlert, { AlertTypes } from '@celo/react-components/components/SmartTopAlert'
import colors from '@celo/react-components/styles/colors'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Namespaces } from 'src/i18n'
import { navigate } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import { shouldForceBackupSelector } from 'src/redux/selectors'
import useTypedSelector from 'src/redux/useSelector'

const accountKeyScreens: string[] = [
  Screens.BackupIntroduction,
  Screens.AccountKeyEducation,
  Screens.BackupPhrase,
  Screens.BackupQuiz,
]

function BackupPrompt() {
  const { t } = useTranslation(Namespaces.backupKeyFlow6)

  const backupCompleted = useTypedSelector((state) => state.account.backupCompleted)
  const shouldForceBackup = useTypedSelector(shouldForceBackupSelector)
  const activeScreen = useTypedSelector((state) => state.app.activeScreen)

  const doingBackupFlow = accountKeyScreens.indexOf(activeScreen) >= 0

  const goToBackup = () => {
    navigate(Screens.BackupIntroduction)
  }

  const isVisible = shouldForceBackup && !doingBackupFlow && !backupCompleted

  if (!isVisible) {
    return null
  }
  return (
    <View style={styles.container}>
      <SmartTopAlert
        isVisible={isVisible}
        timestamp={Date.now()}
        text={isVisible ? t('backupPrompt') : null}
        onPress={goToBackup}
        type={AlertTypes.MESSAGE}
        buttonMessage={isVisible ? t('getBackupKey') : null}
      />
      <TouchableOpacity activeOpacity={1} style={styles.touchableContainer}>
        <View style={styles.touchableContent} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
  },
  touchableContainer: {
    flex: 1,
  },
  touchableContent: {
    flex: 1,
    backgroundColor: colors.dark,
    opacity: 0.5,
  },
})

export default BackupPrompt
