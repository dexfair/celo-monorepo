import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Provider } from 'react-redux'
import { Screens } from 'src/navigator/Screens'
import BackupPrompt from 'src/shared/BackupPrompt'
import { createMockStore } from 'test/utils'

const mockCurrentTime = 1552353116086

const createStore = (backupRequiredTime: number, backupCompleted: boolean, activeScreen: string) =>
  createMockStore({
    app: { activeScreen },
    account: { backupRequiredTime, backupCompleted },
  })

jest.mock('src/utils/time', () => ({
  getRemoteTime: () => mockCurrentTime,
}))

describe('BackupPrompt', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider store={createStore(mockCurrentTime - 10, false, Screens.WalletHome)}>
        <BackupPrompt />
      </Provider>
    )
    expect(toJSON()).toMatchSnapshot()
  })

  describe('when backupCompleted is true and not doing the backup flow', () => {
    it("doesn't render the prompt", () => {
      const { queryByText } = render(
        <Provider store={createStore(mockCurrentTime - 10, true, Screens.WalletHome)}>
          <BackupPrompt />
        </Provider>
      )
      expect(queryByText('backupPrompt')).toBeNull()
    })
  })

  describe('when backupCompleted is false and not doing the backup flow', () => {
    it('renders the prompt', () => {
      const { queryByText } = render(
        <Provider store={createStore(mockCurrentTime - 10, false, Screens.WalletHome)}>
          <BackupPrompt />
        </Provider>
      )
      expect(queryByText('backupPrompt')).not.toBeNull()
    })
  })

  describe('when going through the backup flow', () => {
    it('renders correctly', () => {
      const { queryByText } = render(
        <Provider store={createStore(mockCurrentTime - 10, false, Screens.BackupIntroduction)}>
          <BackupPrompt />
        </Provider>
      )
      expect(queryByText('backupPrompt')).toBeNull()
    })
  })

  describe('when time to backup is not up and not going through the backup flow', () => {
    it('renders correctly', () => {
      const { queryByText } = render(
        <Provider store={createStore(mockCurrentTime + 10, false, Screens.WalletHome)}>
          <BackupPrompt />
        </Provider>
      )
      expect(queryByText('backupPrompt')).toBeNull()
    })
  })
})
