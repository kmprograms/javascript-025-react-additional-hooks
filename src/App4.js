import React, {useState} from "react";
import usePortal from "react-useportal";
import {useLocation, useKey} from 'react-use'

// npm install react-use
// https://github.com/streamich/react-use

const App4 = () => {
    const [count, set] = useState(0);
    const increment = () => set(count => ++count);
    const decrement = () => set(count => --count);
    useKey('ArrowUp', increment);
    useKey('ArrowDown', decrement);

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
}

export default App4;
