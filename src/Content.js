import { useState } from 'react';

const Content = () => {
    const[name, setName] = useState('Dave');
    const[count,setCount] = useState(0);
    

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        // we use const because we never want to try to reassign name directly . We always want to use setName

        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      };
      const handleClick = () =>{
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
      }
      const handleClick2 = () =>{
        console.log(count); 
      }


    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>

            {/* The button will change the name and not refresh the whole page which makes it faster */}
            <button onClick={handleNameChange}>Change name</button>
            
            <button onClick={handleClick}>Click It</button>
                
            <button onClick={handleClick2}>Click It</button>  
            {/* when clicking the third button it will log the state that is passed into the function. It doesnt change the value of the function even after we change the count*/}
        
        </main>
    )
}

export default Content