import React from 'react';
import '../assets/css/home.css'
import '../assets/font/iconfont.css'

class Home extends React.Component{
  constructor(){
      super()
      this.state={
        url:require('../assets/images/bottomlogo.png'),
        recomList:[
            {
                id:1,
                title:'2020上半年最受欢迎日语新歌',
                imgUrl:require('../assets/images/1.jpg'),
                count:99.5,
            },
            {
                id:2,
                title:'盛夏白瓷梅子汤，碎冰碰壁铛啷响',
                imgUrl:require('../assets/images/2.jpg'),
                count:99.5,
            },
            {
                id:3,
                title:'伤感片段:夜和你都在熬我',
                imgUrl:require('../assets/images/3.jpg'),
                count:99.5,
            },
            {
                id:4,
                title:'打野BGM［游戏专用］',
                imgUrl:require('../assets/images/4.jpg'),
                count:99.5,
            },
            {
                id:5,
                title:'宝藏857蹦迪DJ',
                imgUrl:require('../assets/images/5.jpg'),
                count:99.5,
            },
            {
                id:6,
                title:'中文DJ（电摇版）（车载DJ）开车驾车必听',
                imgUrl:require('../assets/images/6.jpg'),
                count:99.5,
            },
        ],
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
                singer:'恋恋故人难',
                album:' 云の泣'
            },
            {
                songsId:3,
                title:'先知',
                singer:'田馥甄',
                album:'先知'
            },
            {
                songsId:4,
                title:'我行我素我爱你',
                singer:'郁可唯',
                album:'我行我素我爱你'
            },
            {
                songsId:5,
                title:'星星之火',
                singer:'罗云熙',
                album:'星星之火'
            },
            {
                songsId:6,
                title:'睹物思人',
                singer:'武艺',
                album:'睹物思人'
            },
            {
                songsId:7,
                title:'如果我是海',
                singer:'李荣浩',
                album:'麻雀'
            },
            {
                songsId:8,
                title:'祝我快乐',
                singer:'汪苏泷',
                album:'祝我快乐'
            },
            {
                songsId:9,
                title:'尘埃',
                singer:'董家鸿',
                album:'尘埃'
            },
            {
                songsId:10,
                title:'PARADISE',
                singer:'河成云',
                album:'PARADISE'
            }
        ]
      }
  }
  render(){
    const {recomList,newList,url}=this.state
    return(<div className="home">
        <div className="recomList">
            <div className="head">
               <i></i><h2>推荐歌单</h2> 
            </div>
            
            <ul>
                {
                    recomList.map(item=>{
                        return <li  key={item.id}>
                                    <img src={item.imgUrl} alt=""/>
                                    <p>{item.title}</p>
                                    <p className='count'><i className='iconfont icon-V'></i>{item.count}万</p>
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
                        return <li className="clearfix" key={item.songsId}>
                                    <div className="left">
                                       <p className="title">{item.title}</p>
                                        <p className='des'><i></i>{item.singer} - {item.album}</p> 
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