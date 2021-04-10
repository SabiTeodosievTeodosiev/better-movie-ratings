import Form from "../Form";
import "./UserForm.css";

function UserForm(props) {
    return (
        <Form type={props.type} />
    );
}

export default UserForm;