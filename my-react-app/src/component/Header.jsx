import { Link, useHistory } from 'react-router-dom'
export function Header() {
    function menuToggle() {
        document.body.classList.toggle('menu-is-show')
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
                <Link to="/ca-nhan" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    <div className="have-login">
                        <div className="account">
                            <Link to="#" className="info">
                                <div className="name">Trần Lê Trọng Nghĩa</div>
                                <div className="avatar">
                                    <img src="img/avt.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="hamberger">
                        </div>
                        <div className="sub">
                            <Link to="/khoa-hoc">Khóa học của tôi</Link>
                            <Link to="#">Thông tin tài khoản</Link>
                            <Link to="#">Đăng xuất</Link>
                        </div>
                    </div>
                    <div class="not-login bg-none">
                        <Link to="#" class="btn-register">Đăng nhập</Link>
                        <Link to="/dang-ki" class="btn main btn-open-login">Đăng ký</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}