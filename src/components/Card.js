import React from "react";

function Card(props) {
    console.log(props)
    const style = {
        backgroundImage: "url("+props.image+")",
        backgroundSize: "auto 80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }
    return (
        <div className="card" style={style} onClick={() => props.assignCharacter(props.id)}>
        </div>
    )
}

export default Card;