import React from 'react'
import reactDom from 'react-dom'
import { Link } from 'react-router-dom'
import useDelayLink from '../hook/useDelayLink'
export const Nav = () => {

    let delayLink = useDelayLink()
    function overlayClick() {
        document.body.classList.remove('menu-is-show')
    }
    return reactDom.createPortal(
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li className="active">
                        <Link onClick={delayLink} to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/team">CFD Team</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/khoa-hoc">Khóa Học</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/du-an">Dự Án</Link>
                    </li>
                    <li>
                        <Link onClick={delayLink} to="/lien-he">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div class="overlay_nav" onClick={overlayClick}></div>
        </>,
        document.body
    )
}