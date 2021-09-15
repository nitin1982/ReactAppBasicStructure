import { Switch, Route } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import PetsList from "../inventory/PetsList";
import ViewPet from "../inventory/ViewPet";

import Login from "../user/Login";

const RoutingConfig = () => {
    return(
        <Switch>
            <Route path='/Pets/:id' component={ViewPet}></Route>
            <Route path='/Pets' component={PetsList}></Route>            
            <Route path='/About' component={About}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/' component={Home}></Route>
        </Switch>
    );
    
}
export default RoutingConfig;