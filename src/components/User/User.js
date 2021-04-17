import { auth } from '../../utils/firebase';
import UserForm from '../Form/UserForm/UserForm';
import { Redirect } from 'react-router-dom';
import "./User.css";

function User(props) {
    let user = auth.currentUser;

    if (!user) {        
        return (
            <div className="user">
                < UserForm {...props} type="login" />
                < UserForm {...props} type = "register" />
            </div>
        );
    }
    else {
        auth.signOut();

        return (
            <Redirect to="/" />
        );
    }
}

export default User;