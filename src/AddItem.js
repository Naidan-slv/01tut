import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id="addItem"
            ref={inputRef}
            type="text"
            placeholder="Add Item"
            required
            value = {newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add Item"
            onClick={(e) => inputRef.current.focus()}
            // when the button is clicked it will set the button back to focus on the input
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem