import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

  const [newItem, setNewItem] = useState('');
  const[search,setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length? items[items.length - 1].id + 1 : 1;
    // checks if there are items in the list, if there are, it takes the last item and adds 1 to the id, if there are no items, it sets the id to 1
    const myNewItem = {id, checked: false, item};
    const listItems =[...items,myNewItem];
    setAndSaveItems(listItems);
     
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    setAndSaveItems(listItems);
    
}
  const handleCheck = (id) => { 
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
} 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem)return;
    //The line above makes sure that if the newItem is empty, we return out of the function and do nothing
    //addItem Function
    addItem(newItem);
    setNewItem(''); // we reset the new item to an empty string
    console.log('submitted')
  }

  return (
    <div className="App">
      <Header title = "Grocery list"/>
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <SearchItem
      search = {search}
      setSearch = {setSearch}
      />
      <Content 
      items ={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}/>
      <Footer length={items.length}/>
      
    </div>
  );
}

export default App;
