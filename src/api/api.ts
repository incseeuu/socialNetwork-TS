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
    unFollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
    }
}