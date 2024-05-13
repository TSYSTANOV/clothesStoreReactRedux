import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/CartSlice";

function HeaderCartBtn() {
  const dispatch = useDispatch();
  const cartLength = useSelector((state) => state.cart.cart).length;
  return (
    <button
      className="category-btn Btncart"
      data-cat-name="cart"
      data-products-length={cartLength}
      onClick={() => {
        dispatch(toggleCart());
      }}
    >
      🛒 Cart
    </button>
  );
}
export { HeaderCartBtn };
