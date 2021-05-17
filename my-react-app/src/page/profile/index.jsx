import React, { useState, useContext } from 'react'
import Info from './component/Info'
import MyCourse from './component/MyCourse'
import Project from './component/Project'
import Payment from './component/Payment'
import Coin from './component/Coin'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import TopInfo from '../../component/TopInfo'
import useAuth from '../../hook/useAuth'

export default function Profile({ }) {
    // let [tabActive, setTabActive] = useState(0);

    let { path } = useRouteMatch()
    console.log(path)
    let { login } = useAuth()
    if (!login) return <Redirect path='/' />



    // function setTab(e, index) {

    //     e.preventDefault();
    //     setTabActive(index)

    // }

    // let login = true
    // if (!login) return <Redirect path="/" />

    return (
        <main className="profile" id="main">
            <section>
                <TopInfo />
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={`${path}`} >Thông tin tài khoản </NavLink>
                            <NavLink to={`${path}/khoa-hoc-cua-ban`} >Khóa học của bạn </NavLink>
                            <NavLink to={`${path}/du-an`}>Dự án đã làm  </NavLink>
                            <NavLink to={`${path}/payment`}>Lịch sử thanh toán  </NavLink>
                            <NavLink to={`${path}/coin`}>Quản lý COIN của tôi </NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>

                                <Route path={`${path}/khoa-hoc-cua-ban`} component={MyCourse} />
                                <Route path={`${path}/du-an`} component={Project} />
                                <Route path={`${path}/payment`} component={Payment} />
                                <Route path={`${path}/coin`} component={Coin} />
                                <Route component={Info} />

                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}