import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const[items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => { 
        const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);
        
        // console.log(`key: ${id}`);        
        // this is responding to us clicking on it but its not changing the state    
        // create a new array and then applies the function to each of them.
        // three dots are used to copy the item object and then we change the checked property to the opposite of what it was
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    
        // we store our list in local Storage 
    }
    const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    // the new array will only contain items that do not have the id that we clicked on
    // this will delete the item that we clicked on
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
    
    }
    
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className = "item" key = {item.id}>
                            {/* the key helps react see what items have been added or removed */}
                            <input 
                                type = "checkbox"
                                onChange={() => handleCheck(item.id)}
                                // onChange is a built-in event listener that listens for changes in the input field
                                // we cant just calll handleCheck because we need to pass the id (a paramater to it) What we need here is an anonymous funciton which lets us call another function inside it
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
                                />
                                {/* By setting tabIndex to 0, the icon can be focused when users navigate through the page using the keyboard */}
                        </li>
                    ))}
                </ul>
                ):(
                    <p style={{ marginTop: '2rem'}}> Your list is empty</p>
                )
            }
        </main>
    )
}

export default Content;