import { useDispatch, useSelector } from "react-redux";
import { deleteFromCompareList, toggleCompare } from "../../redux/CompareSlice";
import { Form } from "./Form";
import { CompareItem } from "./CompareItem";
function Compare() {
  const dispatch = useDispatch();
  const { isOpen, compareList, compareBy } = useSelector(
    (state) => state.compare
  );

  const comparedItems = [...compareList].sort((a, b) => {
    if (compareBy.rate) {
      return a.rating.rate < b.rating.rate ? 1 : -1;
    }
    if (compareBy.price) {
      return a.price > b.price ? 1 : -1;
    }
    return 1;
  });

  function handleTableClicker(e) {
    if (e.target.tagName !== "BUTTON") return;
    dispatch(deleteFromCompareList(+e.target.dataset.id));
  }

  if (isOpen) {
    return (
      <div className="nonVisibleDiv">
        <div className="modal-cart">
          <span
            className="modal-cart-close"
            onClick={() => {
              dispatch(toggleCompare());
            }}
          >
            X
          </span>
          {comparedItems.length > 0 && <Form />}
          <table className="tableCompare">
            <tbody>
              <tr onClick={handleTableClicker}>
                {comparedItems.length > 0 ? (
                  comparedItems.map((item) => {
                    return (
                      <CompareItem
                        key={item.id}
                        item={item}
                        compare={compareBy}
                      />
                    );
                  })
                ) : (
                  <td>Compare list is empty</td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export { Compare };
