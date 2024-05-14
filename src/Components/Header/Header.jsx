import { useEffect } from "react";
import { CategoryList } from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setActiveCategory } from "../../redux/CategorySlice";
import { HeaderCartBtn } from "./HeaderCartBtn";
import { toggleCompare } from "../../redux/CompareSlice";
function Header() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(setActiveCategory("All"));
  }, []);
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
      <button
        className="category-btn btnToCompare"
        data-cat-name="compare"
        onClick={()=>{
          dispatch(toggleCompare())
        }}
      >
        Compare
      </button>
    </div>
  );
}
export { Header };
