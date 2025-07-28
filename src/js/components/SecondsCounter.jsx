import React from "react";

//create your first component
const SecondsCounter = ({number}) => {
    return (
        <div className="text-center">
            

            <div className="text-center mt-5 counter">{number}</div>
            
        </div>
    );
};

export default SecondsCounter;