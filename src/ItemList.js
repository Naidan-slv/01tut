import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
            <LineItem
            key={item.id}
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
        ))}
    </ul>
  )
}

export default ItemList;
// we are drilling from a parent down to a child and then from that parent down to the next child so two levels atleast
// each child should have a unique key prop so we need to supply the key prop to the LineItem component