import { useDispatch, useSelector } from "react-redux"
import { comparePriceList, compareRateList } from "../../redux/CompareSlice"

function Form(){
    const checkedRate = useSelector((state)=>state.compare.compareBy.rate)
    const checkedPrice = useSelector((state)=>state.compare.compareBy.price)
    const dispatch = useDispatch()
    
    function CompareByRate(){
        dispatch(compareRateList())
    }
    function CompareByPrice(){
        dispatch(comparePriceList())
    }


    return <form>
    <label>
    <input type="checkbox" name='rate' checked={checkedRate} onChange={CompareByRate}/>
    Compare by rate
    </label>
    <label>
    <input type="checkbox"name='price' checked={checkedPrice} onChange={CompareByPrice}/>
    Compare by price
    </label>
</form>
}
export {Form}