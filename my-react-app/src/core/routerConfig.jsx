// import { Children } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../component/PrivateRoute'
import Auth from '../service/auth'

export function routerConfig(routers, parentPath = '') {
    return <Switch>
        {
            routers.map(e => {
                let { exact, path, component: Component, routers: childRouters, auth } = e
                if (!path) path = ''
                path = parentPath + '/' + path
                path = path.replace(/\/+/g, '/')
                let child = null
                if (childRouters) {
                    child = routerConfig(childRouters, path)
                }
                if (auth) {
                    return (<PrivateRoute exact={exact} path={path} component={(prop) => <Component {...prop}>{child}</Component>} />)
                }
                return <Route exact={exact} path={path} component={(prop) => <Component {...prop}>{child}</Component>} />
            })
        }
    </Switch>
}