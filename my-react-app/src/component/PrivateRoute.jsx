import { Redirect, Route } from 'react-router-dom'
import useAuth from '../hook/useAuth'

export default function PrivateRoute(prop) {
    let { login } = useAuth()
    if (!login) {
        return <Route>
            <Redirect to='/' />
        </Route>
    }

    return <Route {...prop} />
}