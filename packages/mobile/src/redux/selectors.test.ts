import { shouldForceBackupSelector } from 'src/redux/selectors'
import { getMockStoreData } from 'test/utils'

const mockCurrentTime = 1552353116086

jest.mock('src/utils/time', () => ({
  getRemoteTime: () => mockCurrentTime,
}))

const mockState = (backupRequiredTime: number, backupCompleted: boolean) =>
  getMockStoreData({
    account: { backupRequiredTime, backupCompleted },
  })

describe('redux/selectors', () => {
  describe('shouldForceBackupSelector', () => {
    it("should not force account key prompt if enough time hasn't passed", () => {
      expect(shouldForceBackupSelector(mockState(mockCurrentTime + 10, false))).toBe(false)
    })

    it('should force account key prompt if delay time is up', () => {
      expect(shouldForceBackupSelector(mockState(mockCurrentTime - 10, false))).toBe(true)
    })

    it('should not force account key prompt if backup was already completed', () => {
      expect(shouldForceBackupSelector(mockState(mockCurrentTime - 10, true))).toBe(false)
    })
  })
})
