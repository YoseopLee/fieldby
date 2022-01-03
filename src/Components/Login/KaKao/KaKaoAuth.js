const CLIENT_ID = "8eed4ed937993ee1ffbd2dc732955593";
const REDIRECT_URI = "http://localhost:3000/Api/Member/Oauth2ClientCallback/kakao/";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

