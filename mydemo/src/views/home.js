import React from 'react';
import '../assets/css/home.css'
import '../assets/font/iconfont.css'
//引入axios库
import axios from 'axios'
//引入swipercss
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
//调用swiper插件
import Swiper from 'swiper'
//引入接口
import { personalized, getBanner, getNewSongs } from '../util/axios'

class Home extends React.Component{
  constructor(){
      super()
      this.state={
        url:require('../assets/images/bottomlogo.png'),
        recomList:[],
        newList:[],
        bannerList:[],
        countList:[]
      }
  }
  componentDidMount(){
    axios.all([personalized({limit:6}),getBanner(),getNewSongs()])
    .then(axios.spread((recomList,bannerList,newList)=> {
        if(bannerList.code===200){
            let banners=bannerList.banners.filter((item,i)=>i<4)  
            this.setState({
                bannerList:banners
             },()=>{
                 let swiper=new Swiper('.swiper-container',{
                     autoplay:{
                         delay:2000,
                         disableOnInteraction: false,
                     },
                     loop:true,
                     pagination:{
                        el: '.swiper-pagination' 
                     }
                 })
             })     
        }
        if(recomList.code===200){
            this.setState({
               recomList:recomList.result 
            })
        }
        if(newList.code===200){
            this.setState({
                newList:newList.result 
            })
        }
    })
  )
}
changeNum(num){
    let numStr = num.toString()
    // 十万以内直接返回
    if (numStr.length < 6) {
    return numStr;
    }
    //大于8位数是亿
    else if (numStr.length > 8) {
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + 1);
    return parseFloat(parseInt(num / 100000000) + '.'+ decimal) + '亿';
    }
    //大于6位数是十万 (以10W分割 10W以下全部显示)
    else if (numStr.length > 5) {
    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + 1)
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
    }
}
  render(){
    const {recomList,newList,url,bannerList}=this.state
    return(<div className="home">
         <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    bannerList.map(item => {
                        return <div key={item.imageUrl} className="swiper-slide">
                            <img className='imgUrl' src={item.imageUrl} alt="" />
                        </div>
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
        <div className="recomList">
            <div className="head">
               <i></i><h2>推荐歌单</h2> 
            </div>
            
            <ul>
                {
                    recomList.map(item=>{
                        return <li  key={item.id}>
                                    <img src={item.picUrl} alt=""/>
                                    <p>{item.name}</p>
                                    <p className='count'>
                                        <i className='iconfont icon-V'></i>
                                        <span>
                                        {this.changeNum(item.playCount)}
                                        </span>
                                        </p>
                                </li>
                    })
                }
                
            </ul>
        </div>
        <div className="newList">
            <div className="head">
               <i></i><h2>最新音乐</h2> 
            </div>
            <ul>
                {
                    newList.map(item=>{
                        return <li className="clearfix" key={item.id}>
                                    <div className="left">
                                       <p className="title">{item.song.name}
                                       {
                                            item.song.alias ?
                                            item.song.alias.map(item => {
                                            return <span key={item}>({item})</span>
                                            }):""
                                       }
                                       
                                       </p>
                                        <p className='des'><i></i>
                                        {
                                          item.song.artists ?
                                          item.song.artists.map(item => {
                                          return <span key={item.id}>{item.name}&nbsp;</span>
                                          })
                                          : ''  
                                        }
                                        - {item.song.album.name}</p> 
                                    </div>
                                    <div className="right">
                                        <span></span>
                                    </div>
                                    
                               </li>
                    })
                }
                
            </ul>
        </div>
        <footer>
            <div className="bottomLogo"><img src={url} alt=""/></div>
            <div className="go"><p>打开APP，发现更多好音乐 ></p></div>
            <p className='bottom'>网易公司版权所有©1997-2020 杭州乐读科技有限公司运营</p>
        </footer>
    </div>)
  }
}

export default Home;