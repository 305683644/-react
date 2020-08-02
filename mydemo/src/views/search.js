import React from 'react';
import '../assets/css/search.css'
import '../assets/font/iconfont.css'

class Search extends React.Component{
  constructor(){
      super()
      this.state={
        url1:require('../assets/images/url1.jpg'),
        url2:require('../assets/images/url2.jpg'),
        newList:[
            {
                songsId:1,
                title:'致我们终将逝去的青春 (2020重唱版)',
                singer:'张靓颖',
                album:'致我们终将逝去的青春'
            },
            {
                songsId:2,
                title:'晚来天欲雪',
                singer:'张靓颖',
                album:' 云の泣'
            },
            {
                songsId:3,
                title:'先知',
                singer:'张靓颖',
                album:'先知'
            },
            {
                songsId:4,
                title:'我行我素我爱你',
                singer:'张靓颖',
                album:'我行我素我爱你'
            },
            {
                songsId:5,
                title:'星星之火',
                singer:'张靓颖',
                album:'星星之火'
            },
            {
                songsId:6,
                title:'睹物思人',
                singer:'张靓颖',
                album:'睹物思人'
            },
            {
                songsId:7,
                title:'如果我是海',
                singer:'张靓颖',
                album:'麻雀'
            },
            {
                songsId:8,
                title:'祝我快乐',
                singer:'张靓颖',
                album:'祝我快乐'
            },
            {
                songsId:9,
                title:'尘埃',
                singer:'张靓颖',
                album:'尘埃'
            },
            {
                songsId:10,
                title:'PARADISE',
                singer:'张靓颖',
                album:'PARADISE'
            }
        ]
      }
  }
  render(){
    const {newList,url1,url2}=this.state
    return(<div className="search">
        
        <div className="newList">
            <div className="head">
              <i className="iconfont icon-sousuo"></i> 
              <i className="iconfont icon-quxiao"></i> 
               <input type="text" name="search" placeholder="搜索歌曲、歌手、专辑" />
            </div>
            <div className="content">
              <div className="best">
                  <p className="title">最佳匹配</p>
                  <div className="singer">
                    <img src={url1} alt="" />
                    <p>歌手：<span>张靓颖</span></p>
                    <i className="iconfont icon-weibiaoti34"></i>
                  </div>
                  <div className="album">
                    <img src={url2} alt="" />
                    <div className="center">
                      <p>专辑：尘埃</p>
                    <span>张靓颖</span>
                    </div>
                    <i className="iconfont icon-weibiaoti34"></i>
                  </div>
                  
              </div>
               <ul>
                  {
                      newList.map(item=>{
                          return <li className="clearfix" key={item.songsId}>
                                      <div className="left">
                                        <p className="title">{item.title}</p>
                                          <p className='des'><i></i><span>{item.singer}</span> - {item.album}</p> 
                                      </div>
                                      <div className="right">
                                          <span></span>
                                      </div>
                                      
                                </li>
                      })
                  }
                  
              </ul>
            </div>
            
        </div>
        
    </div>)
  }
}

export default Search;