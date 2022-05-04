import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import * as S from "./styles";

const Header = () => {
  const { cart, cartVisibility, setCartVisibility } = useContext(CartContext);

  return (
    <S.Header>
      <div className="sub-header">
        <h1>Kenzie Shop</h1>
        <div>
          <span>{cart.length}</span>
          <button onClick={() => setCartVisibility(!cartVisibility)}>
            Carrinho
          </button>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
