const verifyUserDataAPI = jest.fn(() => Promise.resolve());
const verifyExcelSheetAPI = jest.fn(() => Promise.resolve());
const submitGoodParticipants = jest.fn(() => Promise.resolve());


export default {
  verifyUserDataAPI,
  verifyExcelSheetAPI,
  submitGoodParticipants
}
