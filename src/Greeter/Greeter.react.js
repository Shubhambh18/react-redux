import React from 'react';
import ShowGreeting from '../ShowGreeting/ShowGreeting.react';
import store,{birth,valen} from '../store'
import {connect} from 'react-redux'
class Greeter extends React.Component {
   
    birthDay=()=>{
        // this.setState({message:"Happy Birthday"});
        console.log('birthday called')
        store.dispatch(birth);
        
    }
    valentineDay=()=>{
        // this.setState({message:"Happy Valentines Day"});
        store.dispatch(valen);
    }

    render() {
        return (
            <div >
                    <p>{this.props.message}</p>
                  <ShowGreeting action={this.props.bday} label="Birthday"></ShowGreeting>
                  <ShowGreeting action={this.props.vday} label="Valentineday"></ShowGreeting>
            </div>
        );
    }
}
    const mapDispatchToProps = (dispatch) => {
        return {
            bday : () =>{
                dispatch(birth);
            },
            vday : ()=>{
                dispatch(valen);
            }
        }
    }


const mapStateToProps =(state)=> {

    return {
    
  message: state.message
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Greeter);
