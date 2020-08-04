import http from './axios'

//推荐歌单的接口
export function personalized(params){
    return http.get('/personalized',{
        params
    })
}

//轮播图接口
export function getBanner(){
    return http.get('/banner')
}

//最新音乐的接口
export function getNewSongs(){
    return http.get('/personalized/newsong')
}

//热歌榜接口
export function getHotList(){
    return http.get('/playlist/detail?id=3778678')
}

//热搜列表
export function searchHot(){
    return http.get('/search/hot')
}

//搜索接口
export function searchInfo(params){
    return http.get('/search',{
        params
    })
}