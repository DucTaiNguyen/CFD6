import React, { useContext, useState } from 'react'
import reactDom from 'react-dom'
import useAuth from '../hook/useAuth'
import useFormValidate from '../hook/useFormValidate'
import { useSelector, useDispatch } from 'react-redux'
import store from '../redux'
import Auth from '../service/auth'
import { loginAction } from '../redux/actions/authAction'

export default function PopupLogin() {

    // let [loginError, setLoginError] = useState(null)
    let { inputChange, check, error, form } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        }
    })



    let dispatch = useDispatch()
    // let { handleLogin } = useAuth()
    function close() {
        document.querySelector('.popup-login').style.display = 'none'
    }


    let { loginError } = useSelector(store => store.auth)

    async function loginHandle() {
        let error = check()
        if (Object.keys(error).length === 0) {
            // let res = await Auth.login({
            //     username: form.username,
            //     password: form.password

            // })




            dispatch(loginAction({
                username: form.username,
                password: form.password
            }, close))

            // if (res.data) {

            // dispatch({
            //     type: "LOGIN",
            //     payload: res.data
            // })
            //     dispatch(loginAction(res.data))
            //     close()
            // } else if (res.error) {
            //     setLoginError(res.error)
            // }
            // if (res.success) {
            //     close()
            // } else if (res.error) {
            //     setLoginError(res.error)
            // }

        }
    }

    let st = useSelector(store => store)
    console.log(st)
    return reactDom.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">????ng nh???p</h2>
                    {loginError && <p className='error-text'>{loginError}</p>}
                    <input value={form.username} name='username' onChange={inputChange} type="text" placeholder="Email / S??? ??i???n tho???i" />
                    {
                        error.username && <p className="error-text">{error.username}</p>
                    }

                    <input value={form.password} name='password' onChange={inputChange} type="password" placeholder="M???t kh???u" />
                    {
                        error.password && <p className="error-text">{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nh??? m???t kh???u</p>
                        </label>
                        <a href="#" className="forget">Qu??n m???t kh???u?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={loginHandle}>????ng nh???p</div>
                    <div className="text-register" style={{}}>
                        <strong>ho???c ????ng k?? b???ng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                Google
              </div>
                    </div>
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">?????t l???i m???t kh???u</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Ti???p theo</div>
                    <div className="back" />
                    <div className="close" onClick={close}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('root2')
    )
}