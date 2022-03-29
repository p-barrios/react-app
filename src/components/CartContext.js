import { createContext,  useState } from "react";

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCartList([
                ...cartList, {
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    image: item.pictureUrl,
                    qty: quantity
                }
            ])
        } else {
            let val = cartList.filter(e => e.id === item.id)
            let old_qty = val[0].qty
            const copyCartList = cartList.filter(i => i.id !== item.id)
            setCartList([
                ...copyCartList, {
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    image: item.pictureUrl,
                    qty: (quantity+old_qty)
                }
            ])
        }
    }

    const removeItem = itemId => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const clear = () => {
        setCartList([])
    }

    const isInCart = id => {
        let val = cartList.filter(item => item.id === id)
        if ( val.length === 0 ) {
            return false
        } else {
            return true
        }
    }

    const itemsQty = () => {
        let cant = cartList.map(item => item.qty)
        return cant.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    const priceTotal = () => {
        let total = cartList.map(item => item.qty * item.price)
        return total.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    return (
        <>
            <CartContext.Provider value={{cartList, addItem, removeItem, clear, itemsQty, priceTotal}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider