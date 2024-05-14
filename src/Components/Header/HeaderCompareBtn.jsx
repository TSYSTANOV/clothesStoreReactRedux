import { useDispatch, useSelector } from "react-redux";
import { toggleCompare } from "../../redux/CompareSlice";

function HeaderCompareBtn() {
  const dispatch = useDispatch();
  const compareListLength = useSelector(
    (state) => state.compare.compareList
  ).length;
  return (
    <button
      className="category-btn btnToCompare"
      data-compare-length={compareListLength}
      data-cat-name="compare"
      onClick={() => {
        dispatch(toggleCompare());
      }}
    >
      Compare
    </button>
  );
}
export { HeaderCompareBtn };
