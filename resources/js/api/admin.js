import axios from 'axios'

export default {
  verifyExcelSheetAPI(payload) {
    return axios.post('verifyExcelSheet', payload)
  }
}