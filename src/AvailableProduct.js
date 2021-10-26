import Temp from "./Temp";
import Card from "./Card";
import { useState } from "react";
const file_Product = [
    {
        id: 'm1',
        name: 'IPhone 12',
        description: '6.1 inch(15.5 cm diagonal)Super retina XDR display,A14 Bionic Chip',
        price: 80000
    },
    {
        id: 'm2',
        name: 'LG OLED TV',
        description: '4K Ultra Smart OLED TV',
        price: '60000',
    },
    {
        id: 'm3',
        name: 'SONY HT-RT3 Real 5.1ch Dolby Digital ',
        description: 'Soundbar home theater system',
        price: 35000
    },
    {
        id: 'm4',
        name: 'Lenovo ThinkPad E470',
        description: 'Lenovo ThinkPad E470',
        price: 88000
    },
    {
        id: 'm5',
        name: 'Logitech Headphone 390',
        description: 'Headphones',
        price: 4500
    },
    {
        id: 'm6',
        name: 'Amazon Echo Show 10',
        description: 'HD smart display with motion premium sound and Alexa(Black)',
        price: 7000
    },
    {
        id: 'm7',
        name: 'Samsung Galaxy Watcg Active 2',
        description: 'With Super AMOLED Display',
        price: 15000
    },
];

const AvailableProduct = () => {
    const [productData, setProductData] = useState(file_Product);
    //const productList = 
   // setProductData(productList);

    return (


        <ul>{productData.map((item) => {
            <Temp
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
            />
        })}</ul>

    );
};


export default AvailableProduct;