import React , {Component}from 'react';
import './App.css';
import Countdownlist from './component/Countdownlist';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      deadline : 'December 31,2021',
      newDeadline : ''
    }
  }

  changeDeadline (){
    console.log('state', this.state);
    this.setState({deadline : this.state.newDeadline})
    }
 
  render(){

   return(
   <div className='back'>
   <div className='container back'>
   <div className='appTitle'> CountDown to {this.state.deadline}</div>
    <div>
      {/* <div className='dis1'>14 days</div>
       <div className='dis1'>30 hours</div>
       <div className='dis1'>15 minutes</div>
      //  <div className='dis1'>20 seconds</div>*/}
      <Countdownlist
       deadline = {this.state.deadline}
      />
    </div>
     <div className='input'>
       <input className='mar'placeholder='enter new date(Year date,month)' 
       //  onChange={event => console.log('event',event.target.value)}
      onChange ={event => this.setState({newDeadline : event.target.value})}
    />
       <button className="btn"
       onClick={()=> this.changeDeadline()}>Submit</button>
     </div>
    </div>
     </div>
   )
  
  }
}


export default App;
