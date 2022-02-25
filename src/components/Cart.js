import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './StyledComponents';

const Cart = () => {

    const cartList = useContext(CartContext)

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <button onClick={() => cartList.clear()}>Delete all products</button>
            {
                cartList.cartList.map(item => (
                    <ContentCart>
                        <Product>
                        <ProductDetail>
                            <ImageCart src={item.image} />
                            <Details>
                            <span>
                                <b>Product:</b> {item.name}
                                <button onClick={() => cartList.removeItem(item.id)}>Delete product</button>
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
        </WrapperCart>
    );
}

export default Cart;