import React from 'react';
import '../assets/css/rank.css'
import '../assets/font/iconfont.css'
import { getHotList } from '../util/axios'

class Rank extends React.Component{
  constructor(){
      super()
      this.state={
        hotTime: 0,
        hotList:[]
      }
  }
  componentDidMount() {
    this.gethotlist()
  }
  gethotlist() {
    getHotList()
        .then(res => {
            if (res.code === 200) {
                //对返回列表进行过滤
                let hotList = res.playlist.tracks.filter((item, i) => i < 20)
                this.setState({
                    hotTime: res.playlist.updateTime,
                    hotList: hotList
                })
            }
        })
  }
  formatTime(timer) {
    let date = new Date(timer)
    //年份
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 + '').padStart(2, '0')
    //天数
    let day = (date.getDate() + '').padStart(2, '0')
    //小时
    let hours = (date.getHours() + '').padStart(2, '0')
    //分钟
    let minutes = (date.getMinutes() + '').padStart(2, '0')
    //秒数
    let seconds = (date.getSeconds() + '').padStart(2, '0')
    return `${month}月${day}日`
  }
  render(){
    const {hotList,hotTime}=this.state
    return(<div className="rank">
        
        <div className="newList">
            <div className="head">
              <div className="hot"></div>
               <p className="date">更新日期：{this.formatTime(hotTime)}</p> 
            </div>
            <ul>
                {
                    hotList.map((item,i)=>{
                        return <li className="clearfix" key={item.id}>
                                    <p className="left">
                                        {i<9?("0"+(i+1)):(i+1)}</p>
                                    <div className="center">
                                       <p className="title">{item.name}
                                       {
                                        item.alia ? item.alia.map(item => {
                                                return <span key={item}>({item})</span>}): ''
                                       }
                                       </p>
                                        <p className='des'><i></i>
                                        {
                                          item.ar ?  item.ar.map(item => {
                                                  return <span key={item.id}>{item.name}&nbsp;</span> }) : ''
                                        } - {item.al.name}</p> 
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
          查看完整榜单
        </footer>
        
    </div>)
  }
}

export default Rank;