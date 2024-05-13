import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/GoodsSlice";
import { GoodsItem } from "./GoodsItem";
import { Spinner } from "../Spinner/Spinner";
import { addToCart } from "../../redux/CartSlice";
import { addToCompare } from "../../redux/CompareSlice";

function GoodsOnPage() {
  const dispacth = useDispatch();
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  const { goodsList, loading } = useSelector((state) => state.goods);
  const cartList = useSelector((state) => state.cart.cart).map(
    (item) => item.id
  );
  const compareList = useSelector((state) => state.compare.compareList).map(
    (item) => item.id
  );

  useEffect(() => {
    if (activeCategory) {
      dispacth(fetchGoods(activeCategory));
    }
  }, [activeCategory]);
  function handleAddToCart(goods) {
    dispacth(addToCart({ ...goods, count: 1 }));
  }
  function handleAddToCompareList(goods) {
    dispacth(addToCompare(goods));
  }
  return (
    <div className="products">
      {loading === "success" ? (
        goodsList.map((item) => {
          return (
            <GoodsItem
              key={item.id}
              goods={item}
              addToCart={handleAddToCart}
              addToCompare={handleAddToCompareList}
              inCart={cartList.includes(item.id)}
              inCompareList={compareList.includes(item.id)}
            />
          );
        })
      ) : loading !== "failed" ? (
        <Spinner />
      ) : (
        <h2>Error data, please try again in couple of minutes</h2>
      )}
    </div>
  );
}
export { GoodsOnPage };
