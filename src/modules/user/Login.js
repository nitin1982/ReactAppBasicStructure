import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { ApiEndPoints } from "../../constants/AppConstants";
import { loadLoggedinUserInfo } from '../../redux/actionCreators/UserActionCreators';

const Login = ({loggedInUser, loadLoggedInUser}) => {

    const[user, SetUser] = useState({
        userName: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        SetUser(prevValues => (
            {...prevValues, 
                [name]: value
            }));
    }

    const logOut = () => {
        loadLoggedInUser({...loggedInUser, sessionId: ''});
    }

    const login = () => {
        //console.log('Login function called.');
        //console.log(user);
        
        let url = `${ApiEndPoints.Login}?username=${user.userName}&password=${user.password}` 
        axios.get(url).then(resp => {            
            const { message }  = resp.data;
            if(message && message.split(':').length > 0 && message.split(':')[1])
            {
                let sessionId = message.split(':')[1];
                const loggedInUser = {...user, sessionId };
                loadLoggedInUser(loggedInUser);
            }
            
        }).catch(err => console.log(err));
    }

    return (
        <>
            <h1>Login Page</h1>                        
            {
                loggedInUser.sessionId &&
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8">
                    <button className="btn btn-light" onClick={logOut}>Logout</button>
                    </div>
                    <div className="col-sm-2">
                        
                    </div>
                </div>
            }

            {
                (!loggedInUser.sessionId) &&
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="usr">Name:</label>
                            <input type="text" name="userName" onChange={event => onChangeHandler(event)} className="form-control" id="usr"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" name="password" onChange={event => onChangeHandler(event)} className="form-control" id="pwd"></input>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-light" onClick={login}>Login</button>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    </div>               
                </div>
            }
        </>
    );
}

const mapToState = (state) => ({
    loggedInUser: state.User
})
const mapToDispatch = (dispatch) => ({
    loadLoggedInUser: (user) => dispatch(loadLoggedinUserInfo(user))
})
export default connect(mapToState, mapToDispatch)(Login);