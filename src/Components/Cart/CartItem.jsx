function CartItem(props) {
  return (
    <tr className="modal-cart-item">
      <td>
        <img className="modal-cart-item-image" src={props.goods.image} />
      </td>
      <td className="modal-cart-item-title">{props.goods.title}</td>
      <td className="modal-cart-item-price">{props.goods.price} USD</td>
      <td className="modal-cart-btns" data-item-id={props.goods.id}>
        <span className="numbers minus">-</span>
        <p className="modal-cart-item-count">
          {props.goods.count}
        </p>
        <span className="numbers plus">+</span>
      </td>
      <td>
        Summary:<p> {(props.goods.price * props.goods.count).toFixed(2)}</p>USD
      </td>
      <td data-item-id={props.goods.id}>
        <button className="delete">X</button>
      </td>
    </tr>
  );
}
export { CartItem };
