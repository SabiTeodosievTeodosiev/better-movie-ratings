import { useState } from 'react';
import "./UserForm.css";

function UserForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassoword, setConfirmPassword] = useState('');

    function usernameChecker() {

    }

    function emailChecker() {

    }

    function passwordChecker() {

    }

    function confirmPasswordChecker() {

    }

    function submitHandler() {

    }

    let confirmPasswordRow;
    if (props.type == "register") {
        confirmPasswordRow = <div className="fieldset-row">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="    123456" onChange={confirmPasswordChecker} />
        </div>;
    }

    return (
        <form className='form user-form' method='post' onSubmit={submitHandler}>
            <fieldset>
                <legend>{props.type + " Form"}</legend>

                <div className="fieldset-row">
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" placeholder="    Give_Leo_Oscar" onBlur={usernameChecker} />
                </div>

                <div className="fieldset-row">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="   jon_doe@gmail.com" onBlur={emailChecker} />
                </div>

                <div className="fieldset-row">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="    123456" onBlur={passwordChecker} />
                </div>

                {confirmPasswordRow}

                <div className="fieldset-row">
                    <input type="submit" value={props.type} />
                </div>
            </fieldset>
        </form>
    );
}

export default UserForm;