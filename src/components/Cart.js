import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './StyledComponents';

const Cart = () => {

    const cartList = useContext(CartContext)

    if(cartList.cartList.length > 0) {
        return (
            <WrapperCart>
                <TitleCart>YOUR CART</TitleCart>
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
                                <button className="btn-principal danger" onClick={() => cartList.clear()}>Delete all products</button>
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