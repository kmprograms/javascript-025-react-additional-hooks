import React from "react";
import useFetch from 'react-fetch-hook';

const App3 = () => {
    // react-fetch-hook pozwala wygodnie wykonywać i zarządzać requestami http
    // npm install react-fetch-hook
    // https://www.npmjs.com/package/react-fetch-hook
    const {isLoading, data} = useFetch('https://swapi.dev/api/people/1');
    return isLoading ? (<h2>Loading ...</h2>) : <h2>{data.name}</h2>
}

export default App3;
