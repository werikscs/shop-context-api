import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
