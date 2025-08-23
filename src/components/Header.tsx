import { useState, useEffect, cache } from "react";
// import headerStyles from "./header.module.scss"; // Feeeeeels like this shouldn't be here.. 

// const {header, headerWrapper} = headerStyles

const Header = ({title}) => {
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setLikes(likes + 1)
    console.log("increment like!")
  }
  
  return(
    // <header className= {header} >
    //   <div className= {headerWrapper} >
    <header >
      <div >
        <h1>Welcome to my Pandan App</h1>
        <h3>{title}</h3>
        <p>Moana Yamanouchi</p>
        <small>abc it's easy as 123</small>
        <button onClick={handleClick}>Like! ({likes})</button>
      </div>
    </header>
  );
};
export default Header;