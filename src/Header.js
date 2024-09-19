const Header = ({title}) => {
    

  return (
    <header>
        {/* <h1>{props.title}</h1> */}
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Default title'
}

export default Header;

// the props comes from the App.js file where the title is passed as a prop to the Header component. Props holds all the properties from the parent component. In this case, the title property is passed to the Header component. The title is then displayed in the h1 tag.