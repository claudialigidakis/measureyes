import request from '../../helpers/request';

class Account {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.account_id
  }

  static getVideoResponses = async (video_id) => {
    const token = await request(`/videos/${video_id}`)
    return token.data
  }

}

export default Account
