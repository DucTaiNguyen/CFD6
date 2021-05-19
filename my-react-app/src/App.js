
import React, { createContext, useEffect, useState } from 'react'
import './assets/style/custom.scss'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Header, Footer, Nav, CourseItem } from './component'
import Home from './page/home'
import Team from './page/team'
import FAQ from './page/FAQ'
import Contact from './page/contact'
import ChiTietKhoaHoc from './page/ChiTietKhoaHoc'
import Page404 from './page/Page404'
import Project from './page/project'
import Profile from './page/profile'
import PopupLogin from './component/PopupLogin'
import CourseList from './page/home/component/CourseList'
import Register from './page/register';
import PrivateRoute from './component/PrivateRoute';
import Auth from './service/auth'

import { routerConfig } from './core'
import routers from './routers'

import { Provider } from 'react-redux'
import store from './redux'

// Auth.update({
//   name: "DTV"
// }).then(res => {

// })


export let Context = React.createContext({})


function App() {


  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  // async function handleLogin(username, password) {

  //   try {
  //     let res = await Auth.login({ username, password })

  //     if (res.data) {
  //       setState({
  //         ...state,
  //         login: res.data
  //       })
  //       return {
  //         success: true
  //       }
  //     } else if (res.error) {
  //       return {
  //         error: res.error
  //       }
  //     }
  //   } catch (err) {

  //   }
  // }

  // .then((res) => {
  //   return res.json()
  // })
  //   .then((res) => {

  //     if (res.data) {
  //       setState({
  //         ...state,
  //         login: res.data
  //       })
  //       callback()
  //     } else if (res.error) {
  //       setState({
  //         ...state,
  //         loginError: res.error
  //       })
  //     }

  //   })
  //   .catch(err => {
  //     console.log('error', err)
  //   })






  // if (username === 'admin@gmail.com' && password === '123456') {
  //   setState({
  //     ...state,
  //     login: {
  //       name: "Dang Thuyen Vuong",
  //       avatar: '/img/avt.png'
  //     }
  //   })

  // } else {
  //   return 'Sai thong tin dang nhap'
  // }
  // }

  // function handleLogout() {
  //   setState({
  //     ...state,
  //     login: false
  //   })


  // }
  return (
    <Provider store={store}>
      {/* <Context.Provider value={{ ...state, handleLogin, handleLogout }}> */}
      <BrowserRouter>
        {/* <div className="App">

          <Header />
          <Nav />
          <PopupLogin />
          <Switch>
            <Route exact path='/' component={Home} />

            <PrivateRoute path="/ca-nhan" component={Profile} />
            <Route path="/lien-he" component={Contact} />
            <Route path="/cau-hoi-thuong-gap" component={FAQ} />
            <Route path="/khoa-hoc/:slug" component={ChiTietKhoaHoc} />
            <Route path="/team" component={Team} />
            <Route path='/du-an' component={Project} />
            <Route path='/khoa-hoc' component={CourseList} />
            <Route path='/dang-ki' component={Register} />
            <Route component={Page404} />

          </Switch>

         

          <Footer />
        </div> */}
        {routerConfig(routers)}
      </BrowserRouter>
      {/* </Context.Provider> */}
    </Provider>
  );
}

export default App;
