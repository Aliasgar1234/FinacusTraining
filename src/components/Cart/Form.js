import classes from './Form.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isSix = value => value.trim().length === 6;

const Form = (props) => {

    const[formValidity, setFormValidity] = useState({
        name:true,
        address:true,
        city:true,
        postalCode:true
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enterName = nameInputRef.current.value;
        const enterAddress = addressInputRef.current.value;
        const enterCity = cityInputRef.current.value;
        const enterCode = postalCodeInputRef.current.value;

        const enterNameIsValid = !isEmpty(enterName);
        const enterAddressIsValid = !isEmpty(enterAddress);
        const enterCityIsValid = !isEmpty(enterCity);
        const enterPostalIsValid = isSix(enterCode);

        setFormValidity({
            name:enterNameIsValid,
            address:enterAddressIsValid,
            city:enterCityIsValid,
            postalCode:enterPostalIsValid
        });

        const formIsValid = enterNameIsValid && enterPostalIsValid && enterCityIsValid && enterAddressIsValid;

        if(!formIsValid){
            return;
        }
        //submit data
        props.onSubmit({
            name:enterName,
            city:enterCity,
            address:enterAddress,
            postalCode:enterCode,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}> 
                <label htmlFor='name'>Your Name </label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formValidity.name && <p>Enter a valid name.</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Your Address </label>
                <input type='text' id='address' ref={addressInputRef} />
                {!formValidity.address && <p>Enter a valid address.</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>Your City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formValidity.city && <p>Enter a valid city.</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!formValidity.postalCode && <p>Enter a Postal Code.</p>}
            </div>
            <div className={classes.actions}>
            <button type='button' onClick={props.onCancel} >Cancel Order</button>
            <button className={classes.submit}>Confirm Order</button>
            
            </div>
        </form>
    );
};


export default Form;