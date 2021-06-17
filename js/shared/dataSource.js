export function getUser() {
    return fetch('api/user.json').then(response => response.json());
}
