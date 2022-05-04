import { createContext, useState, useEffect } from "react";

import api from "../../services/api";
import formatValue from "../../utils/formatValue";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await api.get("/products/");

    const data = res.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
