import { useEffect } from "react";
import { CategoryList } from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setActiveCategory } from "../../redux/CategorySlice";
import { HeaderCartBtn } from "./HeaderCartBtn";
import { setCompareList, toggleCompare } from "../../redux/CompareSlice";
import { setCart } from "../../redux/CartSlice";
import { HeaderCompareBtn } from "./HeaderCompareBtn";
function Header() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );

  useEffect(() => {
    dispatch(fetchCategories());
    const mainCategory = localStorage.getItem("activeCategory");
    const cartFromLS = localStorage.getItem("cart");
    const compareFromLS = localStorage.getItem("compare");
    if (mainCategory) {
      dispatch(setActiveCategory(JSON.parse(mainCategory)));
    } else {
      dispatch(setActiveCategory("All"));
    }
    if (cartFromLS) {
      dispatch(setCart(JSON.parse(cartFromLS)));
    }
    if (compareFromLS) {
      dispatch(setCompareList(JSON.parse(compareFromLS)));
    }
  }, []);
  useEffect(() => {
    if (activeCategory) {
      localStorage.setItem("activeCategory", JSON.stringify(activeCategory));
    }
  }, [activeCategory]);

  function handleChangeActiveCategory(e) {
    if (!e.target.dataset.catName) return;
    if (
      e.target.dataset.catName === "cart" ||
      e.target.dataset.catName === "compare"
    )
      return;

    dispatch(setActiveCategory(e.target.dataset.catName));
  }
  return (
    <div
      className="categories"
      onClick={(e) => {
        handleChangeActiveCategory(e);
      }}
    >
      <button
        className={`category-btn ${
          activeCategory === "All" ? "activebBtn" : ""
        }`}
        data-cat-name="All"
      >
        All
      </button>
      {categoryList &&
        categoryList.map((item) => {
          return (
            <CategoryList
              key={item}
              category={item}
              activeCategory={activeCategory}
            />
          );
        })}
      <HeaderCartBtn />
      <HeaderCompareBtn />
    </div>
  );
}
export { Header };
