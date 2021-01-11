import { Container, Paper, Typography,  } from "@material-ui/core";
import React from "react";


function Footer() {
  return (
   <Container>

 
    <Paper
      style={{
        padding: "12px",
        backgroundColor: "#ebfbff",
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        marginLeft:'8px',
        marginRight:'15px',
        marginTop:'15px',
        width: "97%",  
              textAlign: "center",
      }}>
        <Typography variant="body2">
        visit <a href='https://github.com/apokalipsa44'>https://github.com/apokalipsa44</a>
      </Typography>
   
      
     </Paper>  </Container>
  );
}

export default Footer;
