import { Link } from "react-router-dom";

const Product = () => {
    return (
        <section>
            <h1>My product page!</h1>
            <ul>
                <li>
                    <Link to='/Product/p1'> Book. </Link>
                </li>
                <li>
                    <Link to='/Product/p2'> Carpet.</Link>
                </li>
                <li>
                    <Link to='/Product/p3'> Online Courses. </Link>
                </li>
            </ul>
        </section>
    );
};


export default Product;