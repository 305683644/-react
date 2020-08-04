import axios from 'axios'

let http=axios.create({
    baseURL:'http://localhost:4000'

})

http.interceptors.response.use(res=>{
    return res.data
})

export default http;