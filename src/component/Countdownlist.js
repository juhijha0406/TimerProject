import React ,{Component} from 'react';


class Countdownlist extends Component {
    constructor (props) {
    super(props);
    this.state = {
        days : 0 ,
         hours : 0,
         minutes : 0 ,
         seconds : 0
    }
 console.log('this.probs' , this.props);
//  this will also print  this probs  with value
}

componentWillMount()
{
    this.getTimeUntil(this.props.deadline);
    // console.log(this.probs.deadline);
}

componentDidMount(){
    setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
}

leading0(num){
    if(num <10){
        return '0' + num;
    }
    return num;
 
}

getTimeUntil (deadline){
    const time  = Date.parse (deadline)-Date.parse(new Date());
    console.log('time' ,time);
    const seconds = Math.floor((time/1000)%60);
    //  6%3 ==0
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));

     console.log(seconds,minutes,hours,days);
     this.setState({days : days , hours:hours ,minutes:minutes, seconds,seconds });
    // this will only take value which we have to do console
}


render () {
    // this.getTimeUntil(this.props.deadline);
    return(
    <div>
    <div  className='style'>
      <div className='dis1 style1'>{this.leading0(this.state.days)}days</div>
       <div className='dis1 style1'>{this.leading0(this.state.hours)}hours</div>
       <div className='dis1 style1'>{this.leading0(this.state.minutes)}minutes</div>
       <div className='dis1 style1'>{this.leading0(this.state.seconds)}seconds</div>
       {/* here we are passign state   */}
    </div>
     </div>
    )
}
}

export default Countdownlist;
