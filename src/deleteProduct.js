const deleteProduct = ()=>{

    const onDeleteHandler = (event)=>{
        event.preventDefault();
        const responese = fetch.delete('https://react-1a54c-default-rtdb.firebaseio.com/file.json')
    };
    return(
        <div>
            <button onClick={onDeleteHandler}>Delete</button>
        </div>
    );
};

export default deleteProduct;