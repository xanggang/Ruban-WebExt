import { history } from 'webextension-polyfill'

const historyManagement = {
  async getHistory() {
    const res = await history.search({
      text: '',
    })
    return res
  },
}

export default historyManagement
