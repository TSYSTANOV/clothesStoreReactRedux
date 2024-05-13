function GoodsItem(props) {
  const inCart = props.inCart;
  const inCompareList = props.inCompareList;
  return (
    <div className="item" data-item-goods-id={props.goods.id}>
      <img className="product-image" src={props.goods.image} />
      <h2 className="product-title">{props.goods.title}</h2>
      <p className="product-price">{props.goods.price} USD</p>`;
      <button
        className="Add-toCart"
        onClick={() => {
          props.addToCart(props.goods);
        }}
        disabled={inCart}
      >
        {inCart ? "In Cart" : "Add to Cart"}
      </button>
      <button
        className="compare-button"
        onClick={() => {
          props.addToCompare(props.goods);
        }}
        disabled={inCompareList}
      >
        {inCompareList ? "In Compare List" : "Add to Compare"}
      </button>
    </div>
  );
}
export { GoodsItem };
