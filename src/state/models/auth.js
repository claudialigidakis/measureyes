import request from '../../helpers/request';

class Auth {

  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token')
    return authToken.data.account_id
  }

  static accountLogin = async ({email,password}, history) => {
    const accountLogin = await request('/auth/token', 'post', {email, password})
    await localStorage.setItem('token', accountLogin.data.token);
    const token = await request('/auth/token')
    return token.data
  }

  static accountSignUp = async (newAccount, history) => {
    const addAccount = await request('/account', 'post', newAccount)
    return addAccount.data
  }

  static getAccount = async () => {
    const token = await request('/auth/token')
    return token.data
  }

}

export default Auth
