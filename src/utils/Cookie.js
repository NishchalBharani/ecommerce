export function createCookie(name, value, days) {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

export function getCookie(cookieName) {
    let match = document.cookie.match(new RegExp(cookieName + `=([^;]+)`))
    if (match) return match[1]
}