import React from 'react';
import { connect } from 'react-redux';
import { myActionCreator } from '../donorReducer';
import thunk from 'redux-thunk';
import { getListByThunk } from '../donorReducer'

const ShowDonors = (props) => {
    if(!props.isLoaded){
       
    return (
        <div >
           <h2>Loading</h2>
            {props.isLoaded}
            <button onClick={props.get}>Show Donors</button>

        </div>
    );
    }else{
        return(
        this.props.list.map(eachValue=>{
   
            return(
                <div key={eachValue.id}>
                <p>{eachValue.donorName}</p>
                <p>{eachValue.bloodGroup}</p>
                <p>{eachValue.phoneNumber}</p>
                <p>{eachValue.lastDonated}</p>
                </div>
            )

        })
            )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.payload,
        isLoaded: state.isLoaded
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get: () => {
            dispatch(getListByThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDonors);