export const api = {
    login(email, password) {
        return fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
    },

    checkToken() {
        return fetch('/api/auth/token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    register(user) {
        return fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    },

    getUsers() {
        return fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    getUserByEmail(email) {
        return fetch(`/api/users?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    getUserByUsername(username) {
        return fetch(`/api/users?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    geMe() {
        return fetch(`/api/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTU5MTg5NjQzMSwiZXhwIjoxNTkxODk2NTUxfQ.m4oLW_n4eyCv1FqJl7b3aa0VfDN0FlXRPeaHhjzcuxQ'
            }
        });
    }
}