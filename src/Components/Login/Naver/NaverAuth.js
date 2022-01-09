const CLIENT_ID = "XLDjWY7qUruwfQxP911X"
const REDIRECT_URI = "http://localhost:3000/Api/Member/Oauth2ClientCallback/naver/"

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=&redirect_uri=${REDIRECT_URI}`;