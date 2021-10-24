import classes from './ItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const ItemForm = (props)=>{
    const[amountIsValid, setAmounntIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 3){
            setAmounntIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input = {{
                id:'amount',
                type:'number',
                min:'1',
                max:'3',
                step:'1',
                defaultValue:'1'
                }}/>
            <button>Add To Cart </button>
            {!amountIsValid && <p>Please select items between 1-3 only.</p>}
        </form>
    );
};


export default ItemForm;