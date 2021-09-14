import { Switch, Route } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";

const RoutingConfig = () => {
    return(
        <Switch>
            <Route path='/About' component={About}></Route>
            <Route path='/' component={Home}></Route>
        </Switch>
    );
    
}
export default RoutingConfig;