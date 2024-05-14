function CompareItem({item, compare}){
    return <td className="table-td-compare">
    <img className='compare-table' src={item.image}/>
    <p className='border-table'>Title: {item.title}</p>
    <p className={compare.rate ? "border-table specialChar":"border-table" }>Rate: {item.rating.rate}</p>
    <p className={compare.price ? "border-table specialChar":"border-table" }>Price: {item.price} USD</p>
    <button data-id={item.id}>X</button>
</td>
}
export {CompareItem}