import * as axios from "axios";




const instance = axios.create({
withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"5d16bb3c-e00e-4326-9938-6b442a102e86"
    }
});


export const usersAPI  = {
    getUsers (currentPage=1,pageSize=10)   {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`
        )
            .then(response=> { return response.data})
    },
    follow(userId){
        debugger;
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId){
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('obsolete message. please use api obj')
        return profileAPI.getProfile(userId);
    },
}
export const profileAPI  = {
    getProfile(userId){

        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status:status});
    },
    savePhoto(file){
        let formData = new FormData();
        formData.append("image", file)

        return instance.put(`profile/photo`, formData, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha= null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout( ){
        return instance.delete(`auth/login` )
    }
}


const getUsers2 = (currentPage=1,pageSize=10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`
)
        .then(response=> { return response.data})
}
export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    } 
}
