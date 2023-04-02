import { createContext, useState } from "react";
// 1 Crear el context
// 2 Usar el context
// 3 Proveer el context

const cartContext = createContext({
  cart: [],
});

// 4 Crear un Custom Provider
function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(user, count) {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (isInCart(user.id)) {
      // encontrar el item y actualizar la cantidad de unidades
      // lenny: 2 ----> lenny: 7
      let index = cart.findIndex((itemInCart) => itemInCart.id === user.id);
      newCart[index].count = newCart[index].count + count;
    } else {
      newCart.push({ ...user, count });
    }
    setCart(newCart);
  }

  function removeItemFromCart(id) {
    const newCart = JSON.parse(JSON.stringify(cart));
    newCart.pop();
    setCart(newCart)
  }

  function clearCart() {
    setCart([]);
  }

  function getCountInCart() {
    let total = 0;
    cart.forEach((item) => total + item.count);
    return total;
  }

  function getPriceInCart() {
    let precioFinal = 0;
    cart.forEach((item) => precioFinal + item.count*item.costo);
    return precioFinal;
  }

  function isInCart(id) {
    return cart.some((user) => user.id === id);
  }

  return (
    // 5 pasar la prop value
    <cartContext.Provider value={{ cart, addItem, getCountInCart,removeItemFromCart,getPriceInCart }}>
        {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };

export default cartContext;
