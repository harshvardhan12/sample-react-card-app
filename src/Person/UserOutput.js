import React from "react";

const UserOutput = (props) => {
    return (
        <div>
            <p>Rahul loves to play cricket and {props.name} likes football</p>
    <p>Tina likes to cook and {props.girlName} likes to play vollyball</p>
        </div>
    );
}

export default UserOutput;