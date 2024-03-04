import logo from "../images/react.png";


const Header  = ()=>{
    return(
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    );
  }
  
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor:"lightgrey",
  };
  
  function  MainHeader(){
    return(
      <div  className="pt-3 pl-1  pl-2" style={{backgroundColor:"black"}}>
        <img src={logo} style={{height:"35px",verticalAlign:"top"}}></img>
         <span>React Course - TaskOPedia</span>
      </div>
     
    );
  }
  
  function  SubHeader(){
    return(
      <p style={subHeaderStyle} className="text-center">This will be an exciting Course</p>
    );
  }

  export  default Header;
 
  