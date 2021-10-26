import { Link, useHistory } from "react-router-dom";
import deleteProduct from "./deleteProduct";
import EditProduct from './EditProduct';

const RenderProduct = (props)=>{
    const history = useHistory();
    const onEdit = ()=>{
        history.push('/EditProduct');
    };
    return(
        <div>
            <div>
            <strong >{props.productName}</strong>
            <br/> <br/>
            <p>Specification:{props.productDescription}</p>
            <i>{props.price}</i>
            <deleteProduct productKey={props.productKey} id={props.productId}/>
            <button onClick={onEdit}>Edit</button>
           
        </div>
        </div>
    );
};


export default RenderProduct;