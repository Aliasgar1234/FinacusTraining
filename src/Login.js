import { useEffect, useRef, useState } from "react";

const isEmpty = value => value.trim() === '';
const isSix = value => value.trim().length === 6;
const Login = (props) => {
    //   const [enterEmail, setEnterEmail] = useState('');
    //   const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    // const [formIsValid, setFormIsValid] = useState(false);

    const [formValidity, setFormValidity] = useState({
        email: true,
        password: true
    })

    const nameInputRef = useRef();
    const passwordInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enterName = nameInputRef.current.value;
        const enterPassword = passwordInputRef.current.value;

        const enterNameisValid = !isEmpty(enterName);
        const enterPasswordIsValid = isSix(enterPassword);

        setFormValidity({
            name: enterNameisValid,
            password: enterPasswordIsValid
        })

        const formIsValid = enterNameisValid && enterPasswordIsValid;

        if (!formIsValid) {
            return;
        }
        props.onSubmit({
            name: enterName,
            password: enterPassword
        })
    };

    // const emailChangeHandler = (event) => {
    //     setEnterEmail(event.target.value);

    //     setFormIsValid(
    //         event.target.value.includes('@') && enteredPassword.trim().length > 6
    //     );
    // };

    // const passwordChangeHandler = (event) => {
    //     setEnteredPassword(event.target.value);

    //     setFormIsValid(
    //         event.target.value.includes('@') && enteredPassword.trim().length > 6
    //     );
    // };

    // const validateEmailHandler = () => {
    //     setEmailIsValid(enterEmail.includes('@'));
    // };

    // const validatePasswordHandler = () => {
    //     setPasswordIsValid(enteredPassword.trim().length > 6);
    // };

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     props.onLogin(enterEmail, enteredPassword);
    // };

    return (

        <div>
            <h2>Login</h2>
            <br /><br />
            <div>
                <form onSubmit={confirmHandler}>
                    <label htmlFor='username' >Username
                        <input type='text' id='username' placeholder='enter username' ref={nameInputRef} ></input>
                    </label><br /><br />
                    <label htmlFor='password'>Password
                        <input type='password' id='password' placeholder='enter password' ref={passwordInputRef} ></input>
                    </label>
                </form>
            </div>
            <div>
                <button type='submit' >Login</button>
            </div>
        </div>


    );
};


export default Login;