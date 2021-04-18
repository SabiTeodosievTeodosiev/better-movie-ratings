// import { Redirect } from "react-router";
import "./Form.css";
import UserForm from './UserForm/UserForm';
import MovieSearchForm from "./MovieSearchForm/MovieSearchForm";

function Form(props) {
    if (props.type === "login")
        return <UserForm {...props} />;
    else if (props.type === "register")
        return <UserForm {...props} />;
    else if (props.type === "add")
        return <MovieSearchForm />;
    // else
    //     return <Redirect to="/" />
}

export default Form;