import React, { Component } from 'react';
import img1 from '../src/ssss.png';

class Profile extends Component {
    constructor(){
        super();
         this.state = {
     Show: false,
        FullName:"Amani Lahouel",
        Bio:"I'm a full stack programmer, ",
        Profession:'Studente at Go My Code',
        time: new Date().toLocaleString()
        }
     }
     Toggle()
         {
          this.setState({
              Show:true
          }) 
}
 componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
    render() {
        return(
            <div className="body" style={{fontFamily:'serif'}}> 
            <h1 style={{fontFamily:'arial', color : "grey"}}>*WELCOME TO MY PROFILE*</h1>
               {this.state.Show?
               <>
                   <h1 style={{color: "red"}}>Full Name: {this.state.FullName} </h1>
               <h1 style={{color: "red"}}> BIO: {this.state.Bio}</h1>
              <img src={img1} height="400"/>
              <h1 style={{color: "grey"}}>Profession : {this.state.Profession}</h1>
               </>
               :null
            }
            <button onClick={()=>this.Toggle()}>CLICK</button>  
            <p> The time is {this.state.time}</p>
            </div>
        )
}
}
export default Profile;