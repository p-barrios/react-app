import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './StyledComponents';
import db from '../utils/FirebaseConfig'
import { serverTimestamp, collection, doc, setDoc, increment, updateDoc } from 'firebase/firestore'

const Cart = () => {

    const cartList = useContext(CartContext)

    const createOrder = () => {
        let order = {
            buyer: {
                email: 'leo@messi.com',
                name: 'Leo Messi',
                phone: 123456789
            },
            date: serverTimestamp(),
            items: cartList.cartList.map( item => {
                return {
                    id: item.id,
                    price: item.price,
                    title: item.name,
                    qty: item.qty
                }
            }),
            total: cartList.priceTotal()
        }
        console.log(order)

        const createOrderInFirestore = async () =>  {
            const newOrderRef = doc(collection (db, 'orders'));
            await setDoc(newOrderRef, order)
            return newOrderRef
        }

        createOrderInFirestore ()
            .then( result => {
                alert('Se ha creado la orden'+ result.id)
                cartList.cartList.map(async (item) => {
                    const itemRef = doc(db, "productList", item.id)
                    await updateDoc (itemRef, {
                        units: increment(-item.qty)
                    })
                })

                cartList.clear()
            })
            .catch (error => console.log(error))
    }

    if(cartList.cartList.length > 0) {
        return (
            <WrapperCart>
                <TitleCart>YOUR CART</TitleCart>
                <button className="btn-principal danger" onClick={() => cartList.clear()}>Delete all products</button>
                {
                    cartList.cartList.map(item => (
                        <ContentCart>
                            <Product>
                            <ProductDetail>
                                <ImageCart src={item.image} />
                                <Details>
                                <span className="cart-description">
                                    <p><b>Product:</b> {item.name}</p>
                                    <button className="btn-principal" onClick={() => cartList.removeItem(item.id)}>Delete product</button>
                                </span>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{item.qty} items</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {item.price} each</ProductPrice>
                            </PriceDetail>
                            </Product>
                        </ContentCart>
                    ))
                }
                <hr className="cart-divisor" />
                <ContentCart>
                    <Product>
                        <ProductDetail>
                            <ProductDetail>
                                <TitleCart>Total:</TitleCart>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{cartList.itemsQty()} items</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {cartList.priceTotal()}</ProductPrice>
                                <button className="btn-principal" onClick={() => createOrder()}>checkout</button>
                            </PriceDetail>
                        </ProductDetail>
                    </Product>
                </ContentCart>
            </WrapperCart>
        );
    } else {
        return(
            <WrapperCart>
                <TitleCart>YOUR CART IS EMPTY</TitleCart>
                <Link to={'/'}><button className="btn-principal">Ir a comprar</button></Link>
            </WrapperCart>
        )
    }
}

export default Cart;