import React from 'react';
import '../assets/css/rank.css'
import '../assets/font/iconfont.css'

class Rank extends React.Component{
  constructor(){
      super()
      this.state={
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
            },
            {
                songsId:11,
                title:'致我们终将逝去的青春 (2020重唱版)',
                singer:'张靓颖',
                album:'致我们终将逝去的青春'
            },
            {
                songsId:12,
                title:'晚来天欲雪',
                singer:'恋恋故人难',
                album:' 云の泣'
            },
            {
                songsId:13,
                title:'先知',
                singer:'田馥甄',
                album:'先知'
            },
            {
                songsId:14,
                title:'我行我素我爱你',
                singer:'郁可唯',
                album:'我行我素我爱你'
            },
            {
                songsId:15,
                title:'星星之火',
                singer:'罗云熙',
                album:'星星之火'
            },
            {
                songsId:16,
                title:'睹物思人',
                singer:'武艺',
                album:'睹物思人'
            },
            {
                songsId:17,
                title:'如果我是海',
                singer:'李荣浩',
                album:'麻雀'
            },
            {
                songsId:18,
                title:'祝我快乐',
                singer:'汪苏泷',
                album:'祝我快乐'
            },
            {
                songsId:19,
                title:'尘埃',
                singer:'董家鸿',
                album:'尘埃'
            },
            {
                songsId:20,
                title:'PARADISE',
                singer:'河成云',
                album:'PARADISE'
            }
        ]
      }
  }
  render(){
    const {newList}=this.state
    return(<div className="rank">
        
        <div className="newList">
            <div className="head">
              <div className="hot"></div>
               <p className="date">更新日期：07月30日</p> 
            </div>
            <ul>
                {
                    newList.map((item,i)=>{
                        return <li className="clearfix" key={item.songsId}>
                                    <p className="left">
                                        {i<9?("0"+(i+1)):(i+1)}</p>
                                    <div className="center">
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
        
    </div>)
  }
}

export default Rank;