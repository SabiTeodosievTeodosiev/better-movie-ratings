import { Redirect } from "react-router";
import "./Form.css";
import UserForm from './UserForm/UserForm';
import MovieSearchForm from "./MovieSearchForm/MovieSearchForm";

function Form(props) {
    if (props.type == "login")
        return <UserForm type="login" />;
    else if (props.type == "register")
        return <UserForm type="register" />;
    else if (props.type == "search")
        return <MovieSearchForm />;
    // else
    //     return <Redirect to="/" />
}

export default Form;