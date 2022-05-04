import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

import * as S from "./styles";

const Cart = () => {
  const { cart, removeFromCart, cartVisibility } = useContext(CartContext);

  const precoTotal = () => {
    return cart
      .reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
      .toFixed(2);
  };

  return cartVisibility ? (
    cart.length ? (
      <S.Section>
        <S.Ul>
          {cart.map((product) => (
            <S.Li key={product.id}>
              <figure>
                <img src={product.image} alt="" />
              </figure>
              <h2>{product.title}</h2>
              <span>{product.priceFormatted}</span>
              <button onClick={() => removeFromCart(product)}>x</button>
            </S.Li>
          ))}
        </S.Ul>
        <div>
          <h3>Total</h3>
          <span>R$ {precoTotal()}</span>
        </div>
      </S.Section>
    ) : (
      <S.Section>
        <S.Ul>
          <h4>Carrinho vazio</h4>
        </S.Ul>
      </S.Section>
    )
  ) : (
    ""
  );
};

export default Cart;
