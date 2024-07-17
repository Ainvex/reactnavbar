import React, {Component} from 'react'
class Example extends React.Component{
 constructor(props){
 super(props);
 this.state = {count:0};
}
render(){
 return(
 
 <div>
 <p> you clicked {this.state.count} times</p>
 <button onClick={()=>this.setState({count:this.state.count+1})} className="StateButton"> click me</button>
 </div>

 )
 }
 }
 
export default Example

