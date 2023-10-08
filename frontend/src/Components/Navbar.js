import { NavLink } from "react-router-dom";

export default function Navbar(){


    return (
        <div style={{ display: "flex", gap: "1rem", justifyContent: "space-around",marginTop:"20px",height:"50px",paddingTop:"25px",position:"sticky",top:"0",backgroundColor:"transparent",paddingBottom:"20px"}}>
            
          <NavLink
            to="/"
            end style={{backgroundColor:"#2e587c",width:"auto",textAlign:"center",padding:"10px",textDecoration:"none",color:"white",fontSize:"20px",borderRadius:"5px"}}
          >
            Converter
          </NavLink>
          <NavLink
            to="/debug"
            style={{backgroundColor:"#2e587c",width:"auto",textAlign:"center",padding:"10px",textDecoration:"none",color:"white",fontSize:"20px",borderRadius:"5px"}}
          >
            Debugger
          </NavLink>
          <NavLink
            to="/quality"
            style={{backgroundColor:"#2e587c",width:"auto",textAlign:"center",padding:"10px",textDecoration:"none",color:"white",fontSize:"20px",borderRadius:"5px"}}
          >
            Quality Check 
          </NavLink>


        </div>
      );
}