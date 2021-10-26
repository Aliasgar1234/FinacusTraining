import { useRef } from "react";
import { useParams } from "react-router";

const EditProduct = (props) => {
    const params = useParams();
    const productNameRef = useRef();
    const productDescriptionRef = useRef();
    const productPriceRef = useRef();

    const onSave = (event) => {
        event.preventDefault();
        const productName = productNameRef.current.value;
        const productDescription = productDescriptionRef.current.value;
        const productPrice = productPriceRef.current.value;

        const product = {
            productName,
            productDescription,
            productPrice
        };
    };

    return (
        <form>
            <div>
                <h2>Edit product ID:{props.id}</h2><br />
                <label htmlFor='name'>Name
                    <input id='name' type='text' />
                </label>
                <label htmlFor='description'>Description
                    <input id='description' type='text' />
                </label>
                <label htmlFor='name'>Price
                    <input id='price' type='text' />
                </label>
            </div>
            <div>
                <button onClick={onSave} >Save</button>
                <button >Cancel</button>
            </div>
        </form>
    );
};

export default EditProduct;