import { bookmarks } from 'webextension-polyfill'

const bookmarksManagement = {
  async getTree() {
    const res = await bookmarks.getTree()
    return res
  },
}

export default bookmarksManagement
