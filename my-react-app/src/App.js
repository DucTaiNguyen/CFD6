
import React from 'react'
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





function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header></Header>
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/ca-nhan" component={Profile} />
          <Route path="/lien-he" component={Contact} />
          <Route path="/cau-hoi-thuong-gap" component={FAQ} />
          <Route path="/khoa-hoc/:slug" component={ChiTietKhoaHoc} />
          <Route path="/team" component={Team} />
          <Route path='/du-an' component={Project} />
          <Route path='/khoa-hoc' component={CourseList} />
          <Route component={Page404} />

        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
