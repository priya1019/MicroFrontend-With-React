import { createSignal, createEffect, Show } from "solid-js";
import { jwt, addToCart } from "cart/cart";
import "./index.css";
export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);
  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });
  return (
    <Show when={loggedIn()}>
      <button className="add-button" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </Show>
  );
};
