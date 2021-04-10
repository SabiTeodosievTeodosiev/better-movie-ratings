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
            <legend className="form-legend">{props.type + " Form"}</legend>
            <fieldset>
                <legend htmlFor='username' className="form-legend">Username</legend>
                <input type="text" name="username" placeholder="Give_Leo_Oscar" className="form-input" onBlur={usernameChecker} />

                <legend htmlFor="email" className="form-legend">Email</legend>
                <input type="email" placeholder="jon_doe@gmail.com" className="form-input" onBlur={emailChecker} />

                <legend htmlFor="passoword" className="form-legend">Password</legend>
                <input type="password" name="password" placeholder="123456" className="form-input" onBlur={passwordChecker} />

                <legend htmlFor="confirmPassoword" className="form-legend">Password</legend>
                <input type="password" name="confirmPassword" placeholder="123456" className="form-input" onChange={confirmPasswordChecker} />

                <button type="submit">{props.type}</button>
            </fieldset>
        </form>
    );
}

export default Form;