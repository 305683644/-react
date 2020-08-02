import React from 'react';
import Home from '../views/home'
import Rank from '../views/rank'
import Search from '../views/search'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import '../assets/css/index.css'

class Index extends React.Component{
    constructor(){
        super()
        this.state={
            logo:require('../assets/images/logo.png')
        }
    }
  render(){
    const {logo}=this.state
    return(<div className='index'>
        <div className='head'>
            <h1><img src={logo} alt=""/></h1>
            <div className='right'><p>下载APP</p></div>
        </div>
        <div >
            <ul className="nav">
                <li><NavLink activeClassName="select" to='/index/home'>推荐音乐</NavLink></li>
                <li><NavLink activeClassName="select" to='/index/rank'>热歌榜</NavLink></li>
                <li> <NavLink activeClassName="select" to='/index/search'>搜索</NavLink></li>
            </ul>
           
        </div>
        
        <Switch>
            <Route path='/index/home' component={Home}></Route>
            <Route path='/index/rank' component={Rank}></Route>
            <Route path='/index/search' component={Search}></Route>
            <Redirect to='/index/home'></Redirect>
        </Switch>
    </div>)
  }
}

export default Index;