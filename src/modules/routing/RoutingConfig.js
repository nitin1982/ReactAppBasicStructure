import { Switch, Route } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Login from "../user/Login";

const RoutingConfig = () => {
    return(
        <Switch>
            <Route path='/About' component={About}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/' component={Home}></Route>
        </Switch>
    );
    
}
export default RoutingConfig;