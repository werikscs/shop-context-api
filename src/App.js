import Header from "./components/Header";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import GlobalStyle from "./styles/global";
import * as S from "./styles/styles";

const App = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Products />
        <Cart />
      </S.Main>
      <GlobalStyle />
    </>
  );
};

export default App;
