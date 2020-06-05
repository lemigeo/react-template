import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";

function RouterView(props){
    if(!(props.routes instanceof Array)) {
        console.log('routes props not found');
        return null;
    }
    return (
        <Switch>
            {props.routes.map((route, i) => (
            <Route key={i} path={route.path} render={(props) => {
                var redirect = null
                if(route.redirect && props.match.url === props.location.pathname) {
                    redirect = <Redirect to={route.redirect} />
                }
                return (
                    <div>
                        <route.component {...props} routes={route.routes || []} />
                        {redirect}
                    </div>
                )
            }}/>
            ))}
        </Switch>
    )
}

export default RouterView;