const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      };
      const handleClick = () =>{
        console.log('You Clicked It');
      }
      const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
      }
      const handleClick3 = (e) =>{
        console.log(e);
      }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            {/* We dont have the operators () after handle click as when we dont it is called immediately */}
            <button onClick={() => handleClick2('Dave')}>Click It</button>
             {/* We Need an anonymous function in handleClick2. Now handle click 2 can be called and we can pass in our name */}
            
            <button onClick={(e) => handleClick3(e)}>Click It</button>            
            {/* We get the buttons details bug we can make it even more specific using . */}
        </main>
    )
}

export default Content