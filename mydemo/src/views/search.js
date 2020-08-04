import React from 'react';
import '../assets/css/search.css'
import '../assets/font/iconfont.css'
import { searchHot, searchInfo } from '../util/axios'

class Search extends React.Component{
  constructor(){
      super()
      this.state={
        // url1:require('../assets/images/url1.jpg'),
        // url2:require('../assets/images/url2.jpg'),
        searchHotList: [],
        searchList: [],
        keywordList:[],
        singer:'',
        album:''
      }
      this.inpVal = React.createRef()
  }
  componentDidMount() {
    //调取热门搜索
    this.getSearchHot()
  }
//获取热门搜索事件
 getSearchHot() {
    searchHot()
        .then(res => {
            if (res.code === 200) {
                this.setState({
                    searchHotList: res.result.hots
                })
            }
        })
 }

 goSearch(keywords) {
  //给input赋值
  this.inpVal.current.value = keywords

  const {keywordList}=this.state
  keywordList.unshift(keywords)
    let kList=keywordList.filter((item,i)=>i<7)
    this.setState({
      keywordList:kList
    })
  //调取搜索接口
  searchInfo({ keywords })
      .then(res => {
        console.log(res)
          if (res.code === 200) {
              this.setState({
                  searchList: res.result.songs
              })
          }
      })
      searchInfo({ keywords,type:100 })
      .then(res => {
        console.log(res)
          if (res.code === 200) {
              this.setState({
                singer: res.result.artists[0]
              })
          }
      })
      searchInfo({ keywords,type:10 })
      .then(res => {
        console.log(res)
          if (res.code === 200) {
              this.setState({
                  album: res.result.albums[0]
              })
          }
      })
      
}
del(i){
  const {keywordList}=this.state
  keywordList.splice(i,1)
  this.setState({
  })
}
enter(e){
  if(e.keyCode===13 && e.target.value !=='')
  this.goSearch(e.target.value) 
}
 getInput() {
    console.log(this.inpVal.current.value, 'input内容')
    this.setState({})
    
 }
 clearInfo() {
  //input为空
  this.inpVal.current.value = ''
  this.setState({
      searchList: []
  })
}
  render(){
    const {searchHotList,searchList,keywordList,singer,album}=this.state
    let valFlag = ''
    if (this.inpVal.current) {
      valFlag = this.inpVal.current.value
  }
    return(<div className="search">
        <div className="newList">
            <div className="head">
              <i className="iconfont icon-sousuo"></i> 
               <input type="text" name="search" placeholder="搜索歌曲、歌手、专辑"  ref={this.inpVal} onInput={this.getInput.bind(this)}  onKeyUp={this.enter.bind(this)}/>
               {
                 valFlag ? <i className="iconfont icon-quxiao" onClick={this.clearInfo.bind(this)}></i> :''
               }
            </div>
            
              {
                searchList.length>0?<div className="content">
                <div className="best">
                 <div className="title">最佳匹配</div>
                  {
                    singer?
                    <div className="singer">
                      <img src={singer.picUrl} alt="" />
                      <p>歌手：<span>{singer.name}</span></p>
                      <i className="iconfont icon-weibiaoti34"></i>
                    </div>:''
                  }  
                  
                  {
                    album?
                    <div className="album">
                      <img src={album.picUrl} alt="" />
                      <div className="center">
                        <p>专辑：{album.name}</p>
                      <span>{album.artist.name}</span>
                      </div>
                      <i className="iconfont icon-weibiaoti34"></i>
                    </div>:''
                  }
                    
                    
                    
                </div>
                <ul>
                  {
                      searchList.map(item=>{
                          return <li className="clearfix" key={item.id}>
                                      <div className="left">
                                        <p className="title">{item.name}
                                        {
                                          item.alia ? item.alia.map(item => {
                                                  return <span key={item}>({item})</span>}): ''
                                        }
                                        </p>
                                          <p className='des'><i></i>
                                          {
                                              item.artists ?
                                                  item.artists.map(item => {
                                                  return <span key={item.id}>{item.name}&nbsp;</span>
                                                  })
                                                  : ''
                                          } - {item.album.name}
                                          </p> 
                                      </div>
                                      <div className="right">
                                          <span></span>
                                      </div>
                                </li>
                      })
                  }
              </ul>
            </div>:''
              }
              
               
            {
              searchList.length === 0 ?<div  className="searchCon">
                <p className="title">热门搜索</p>
                <div className="hotword">
                  {
                    searchHotList.map((item,i)=>{
                      return <span  key={item.first}  onClick={this.goSearch.bind(this, item.first)}>{item.first}</span>
                    })
                  }
                    
                </div>
                {
                  keywordList.length>0?
                  <ul className="hotwordList">
                  
                    
                    {
                      keywordList.map((item,i)=>{
                        return <li key={i}  >
                        <i className="iconfont icon-shijian"></i><span onClick={this.goSearch.bind(this, item)}>{item}</span>
                        <i className="iconfont icon-quxiao1" onClick={this.del.bind(this,i)}></i>
                        </li>
                      })
                    }
                    
                    
                </ul>:''}
              </div>:''

            }

       </div>     
    </div>)
  }
}

export default Search;