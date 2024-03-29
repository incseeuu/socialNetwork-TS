import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "c86fcc47-e583-4484-828e-83b5a5d8bf0d"
    }
})


export const userApi = {
    getUser(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    }
}

export const headerApi = {
    authMe() {
        return instance.get('auth/me')
    }
}

export const profileApi = {
    getUserFromUrl(getUserIdFromUrl: number) {
        return instance.get(`profile/${getUserIdFromUrl}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    changeStatus(value: string) {
        return instance.put('profile/status', {value})
    }
}

export const authApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    },
    getCaptcha(){
        return instance.get('/security/get-captcha-url')
    }
}