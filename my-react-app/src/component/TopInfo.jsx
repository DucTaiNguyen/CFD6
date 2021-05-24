import { useContext } from 'react'
import { useSelector } from 'react-redux'
import useAuth from '../hook/useAuth'
import auth from '../redux/reducer/authReducer'


export default function TopInfo({ }) {

    // let { login } = useAuth()
    let { login } = useSelector(store => store.auth)
    console.log(login.name)
    return (<div className="top-info">
        <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src={login.avatar} alt="" />
            <div className="camera" />
        </div>
        <div className="name">{login.name}</div>
        <p className="des">Thành viên của team CFD1-OFFLINE</p>
    </div>)
}