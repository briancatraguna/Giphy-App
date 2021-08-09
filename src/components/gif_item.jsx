import React from 'react';

const GifItem = (props) => {
    return(
        <div>
            <h4>{props.title}</h4>
            <img src={props.url} alt={props.title}/>
        </div>
    )
}

export default GifItem;