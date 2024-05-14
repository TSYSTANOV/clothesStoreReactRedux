import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, deleteItem, increaseCount, toggleCart } from "../../redux/CartSlice";
import { CartItem } from "./CartItem";
function Cart() {
  const dispatch = useDispatch();
  const isOpenCart = useSelector((state) => state.cart.isOpen);
  const cartList = useSelector((state) => state.cart.cart);
  function handleCloseCart() {
    dispatch(toggleCart());
  }
  function handleCountCart(e){
    if(!e.target.parentNode.dataset.itemId)return
    if(e.target.classList.contains('minus')){
      dispatch(decreaseCount(+e.target.parentNode.dataset.itemId))
    }else if(e.target.classList.contains('plus')){
      dispatch(increaseCount(+e.target.parentNode.dataset.itemId))
    }else{
      dispatch(deleteItem(+e.target.parentNode.dataset.itemId))
    }
  }  
  function totalSumInCart(){
    return cartList.reduce((acc,el)=>{
      acc += el.count * el.price
      return acc
    },0).toFixed(2)
  }
  if (isOpenCart) {
    return (
      <div className="nonVisibleDiv">
        <div className="modal-cart">
          <span className="modal-cart-close" onClick={handleCloseCart}>
            X
          </span>
          <table className="table">
            <tbody onClick={handleCountCart}>
              {cartList.length > 0 ?cartList.map((item) => {
                return <CartItem key={item.id} goods={item} />;
              }) : <tr><td>Cart is Empty</td></tr>}
            </tbody>
          </table>
          <p className="total-price">Total sum: {totalSumInCart()} USD</p>
        </div>
      </div>
    );
  }
}
export { Cart };
