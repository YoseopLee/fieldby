// 쿠키 생성
const setCookie = (name, value, exp = 1) => {
    let date = new Date();

    // cookie 유효시간 : 12시간
    date.setTime(date.getTime() + exp * 1000 * 60 * 60 * 12);

    // date를 그냥 가져오면 object로 찍힘. => toUTCString으로 문자열 반환
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 쿠키 삭제
const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
};

// 쿠키 가져오기
const getCookie = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if(parts.length === 2){
        return parts.pop().split(";").shift();
    } else if (parts === "; "){
        return undefined;
    } else {
        return parts.pop().split("=")[1];
    }
};

export { setCookie, deleteCookie, getCookie };