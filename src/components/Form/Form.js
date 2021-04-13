import { useState } from 'react';
import "./Form.css";

function Form(props) {
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

    return (
        <form className='form' method='post' onSubmit={submitHandler}>
            <fieldset>
                <legend>{props.type + " Form"}</legend>

                <label htmlFor='username'>Username</label>
                <input type="text" name="username" placeholder="Give_Leo_Oscar" onBlur={usernameChecker} />

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="jon_doe@gmail.com" onBlur={emailChecker} />

                <label htmlFor="passoword">Password</label>
                <input type="password" name="password" placeholder="123456" onBlur={passwordChecker} />

                <label htmlFor="confirmPassoword">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="123456" onChange={confirmPasswordChecker} />

                <button type="submit">{props.type}</button>
            </fieldset>
        </form>
    );
}

export default Form;