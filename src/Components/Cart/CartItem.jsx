function CartItem(props) {
  return (
    <tr className="modal-cart-item">
      <td>
        <img className="modal-cart-item-image" src={props.goods.image} />
      </td>
      <td className="modal-cart-item-title">{props.goods.title}</td>
      <td className="modal-cart-item-price">{props.goods.price} USD</td>
      <td className="modal-cart-btns">
        <span className="numbers">-</span>
        <p data-count-incart="${product.id}" className="modal-cart-item-count">
          {props.goods.count}
        </p>
        <span className="numbers">+</span>
      </td>
      <td data-summary-price-id="${product.id}">
        Summary:<p> {props.goods.price * props.goods.count}</p>USD
      </td>
    </tr>
  );
}
export { CartItem };
