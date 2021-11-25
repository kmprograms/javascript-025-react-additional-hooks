import React from "react";
import {useArray} from "react-hanger";

const App1 = () => {

    // npm install react-hanger
    // https://github.com/kitze/react-hanger


    /*
        const counter = useNumber(0);
        const limitedNumber = useNumber(3, { upperLimit: 5, lowerLimit: 3 });
        const rotatingNumber = useNumber(0, {
          upperLimit: 5,
          lowerLimit: 0,
          loop: true,
        });

        Dostajesz metody increase oraz decrease
    */

    /*
        const showCounter = useBoolean(true);
        Metody toggle, setTrue, setFalse
    */

    /*
        const { width, height } = useWindowSize();
        const [elementRef, focusElement] = useFocus();
        const { imageVisible, bindToImage } = useImage(src, onLoad, onError);
        const done = useDelay(1000);
     */

    // useArray pozwala wygodnie manipulować tablicą
    const numbers = useArray([]);

    return (
        <div className="container mt-5">
            <h2>Numbers</h2>
            <button className="btn btn-success mb-2" onClick={() => numbers.add(Math.floor(Math.random() * 1000))}>Add</button>
            <ul className="list-unstyled">
                {
                    numbers.value.map((number, index) => (
                        <li key={index} className="mb-2">
                            <span className="h6 me-2">{number}</span>
                            <button className="btn btn-danger" onClick={() => numbers.removeIndex(index)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <button className="btn btn-primary" onClick={numbers.clear}>Clear</button>
        </div>
    )
}

export default App1;
