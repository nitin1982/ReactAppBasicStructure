export const LOAD_LOGGED_IN_USER_INFO = 'LOAD_LOGGED_IN_USER_INFO'

export const loadLoggedinUserInfo = (user) => ({
    type: LOAD_LOGGED_IN_USER_INFO,
    payload: user
})

