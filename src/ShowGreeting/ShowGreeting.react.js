import React from 'react';


const ShowGreeting = (props) => {

    return (
        <div >
            
            <button onClick={props.action}>{props.label}</button>
        </div>
    );

}

export default ShowGreeting;