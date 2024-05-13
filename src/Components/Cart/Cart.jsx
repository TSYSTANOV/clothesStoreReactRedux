import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/CartSlice";
import { CartItem } from "./CartItem";
function Cart() {
  const dispatch = useDispatch();
  const isOpenCart = useSelector((state) => state.cart.isOpen);
  const cartList = useSelector((state) => state.cart.cart);
  function handleCloseCart() {
    dispatch(toggleCart());
  }
  if (isOpenCart) {
    return (
      <div className="nonVisibleDiv">
        <div className="modal-cart">
          <span className="modal-cart-close" onClick={handleCloseCart}>
            X
          </span>
          <table className="table">
            <tbody>
              {cartList.map((item) => {
                return <CartItem key={item.id} goods={item} />;
              })}
            </tbody>
          </table>
          <p className="total-price">total sum</p>
        </div>
      </div>
    );
  }
}
export { Cart };
