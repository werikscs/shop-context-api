import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/Products";

import * as S from "./styles";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <S.Section>
      <ul>
        {products.map((product) => (
          <S.Li key={product.id}>
            <figure>
              <img src={product.image} alt="" />
            </figure>
            <h2>{product.title}</h2>
            <div>
              <span>{product.priceFormatted}</span>

              <button type="button" onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </button>
            </div>
          </S.Li>
        ))}
      </ul>
    </S.Section>
  );
};

export default Products;
