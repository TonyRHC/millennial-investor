import React from 'react';

const Futures = (props) => {
    let futures = null;
    if (props.futures !== null) {
        futures = props.futures.map( e => <li key={e.symbol}>{e.symbol}</li> )
    }

    return (
    <ul>{futures}</ul>
    )
}

export default Futures;