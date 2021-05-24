import MainLayout from './layout/MainLayout'
import Home from './page/home'
import Team from './page/team'
// import FAQ from './page/FAQ'
import Contact from './page/contact'
import ChiTietKhoaHoc from './page/ChiTietKhoaHoc'
// import Page404 from './page/Page404'
// import Project from './page/project'
import Profile from './page/profile'
// import PopupLogin from './component/PopupLogin'
import CourseList from './page/home/component/CourseList'
// import Register from './page/register';
// import PrivateRoute from './component/PrivateRoute';
// import Auth from './service/auth'

import Info from "./page/profile/component/Info"
import Project from './page/profile/component/Project'
import Payment from './page/profile/component/Payment'
import Coin from './page/profile/component/Coin'
import MyCourse from './page/profile/component/MyCourse'
import Register from './page/register'
let routers = [


    {
        component: MainLayout,
        path: '/',
        routers: [
            {
                component: Home,
                path: '/',
                exact: true
            },
            {
                component: CourseList,
                path: '/khoa-hoc',
                exact: true
            },
            {
                component: Register,
                path: '/dang-ki',
                exact: true
            },
            {
                component: ChiTietKhoaHoc,
                path: `/chi-tiet-khoa-hoc`,

            },
            {
                component: Contact,
                path: '/lien-he',
                exact: true
            },

            {
                component: Team,
                path: '/team',
                exact: true

            },
            {
                component: Profile,
                path: '/ca-nhan',
                auth: true,
                routers: [
                    {
                        component: Info,

                        exact: true
                    },
                    {
                        component: Payment,
                        path: 'payment'
                    },
                    {
                        component: MyCourse,
                        path: '/khoa-hoc-cua-ban'
                    },
                    {
                        component: Coin,
                        path: 'coin'
                    },
                    {
                        component: Project,
                        path: 'du-an'
                    }
                ]
            }

        ]
    }
]
export default routers