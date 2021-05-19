import { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import useAuth from '../hook/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../redux/actions/authAction'



export function Header() {
    function menuToggle() {
        document.body.classList.toggle('menu-is-show')
    }

    let dispatch = useDispatch()
    let { login } = useSelector(store => store.auth)

    // let { login, handleLogout } = useAuth()

    function popupLogin() {
        document.querySelector('.popup-login').style.display = 'flex'
    }

    function logout(e) {
        e.preventDefault()
        dispatch(logoutAction())
    }
    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={menuToggle}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to="/" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {
                        login ?
                            <div className="have-login">
                                <div className="account">
                                    <Link to="/ca-nhan" className="info">
                                        <div className="name">{login.name}</div>
                                        <div className="avatar">
                                            <img src={login.avatar} alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi</Link>
                                    <Link to="/ca-nhan">Thông tin tài khoản</Link>
                                    <Link to="#" onClick={logout}  >Đăng xuất</Link>
                                </div>
                            </div>
                            :
                            <div class="not-login bg-none">
                                <Link to="#" class="btn-register" onClick={popupLogin}>Đăng nhập</Link>
                                <Link to="/dang-ki" class="btn main btn-open-login">Đăng ký</Link>
                            </div>
                    }


                </div>
            </div>
        </header>
    )
}