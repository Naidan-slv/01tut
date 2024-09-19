import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className = "item" key = {item.id}>
        <input 
            type = "checkbox"
            onChange={() => handleCheck(item.id)}
            
            
            checked = {item.checked}          
        />          
        <label 
            style={item.checked ? {textDecoration: "line-through"} : null}
            onClick={() => handleCheck(item.id)}
        >{item.item}</label> 
        <FaTrashAlt
            onClick = {() => handleDelete(item.id)}
            role = "button"
            tabIndex = "0"
            arial-label = {`delete ${item.item}`}
            // allows us to refer to each specific item which provides accesibiltiy for our trashcan items
            />
    </li>
  )
}

export default LineItem