import React from "react"
import Paper from '@material-ui/core/Paper'
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylepage.css'
import NavBar from "../components/NavBar"
import Footer from "../components/footer"


const stylepaper= {
    paddingTop: '50px',
    paddingRight: '30px',
    paddingBottom: '70px',
    paddingLeft: '80px',
}


const Welcome = () => {
    return( 
        <Paper elevation={12}>

    <div> 
      <Header />  
      <NavBar />
     
    <div style={stylepaper}elevation ={24}>
    Welcome! The Department of Computer Science offers exciting and high quality graduate degree programs
    and certificates. In addition, computer Science department offer graduate certificates: Artificial Intelligence, Cybersecurity,
    Data Science, Internet and Web, and Mobile Apps and Computing. Certificates can be earned as part of a degree, or
   separately.

   </div>
   <br></br>      <br></br>

   <div  class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-primary btn-lg " type="button">Begin Degree Planning</button>
    </div>
     </div>
     <Footer />
     </Paper>
    

    )    

}

export default Welcome

