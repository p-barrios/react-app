const CartWidget = (props) => {
    return (
        <>
            <span className="CartWidget">
                <i className="material-icons">local_grocery_store</i>
                <p className="cant">{props.elements}</p>
            </span>
        </>
    )
}
export default CartWidget;
