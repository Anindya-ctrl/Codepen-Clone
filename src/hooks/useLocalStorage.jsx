import { useState, useEffect } from'react';
const PREFIX = 'codepen-clone-';

function useLocalStorage(key, initialValue) {
    const prefixedKey = `${ PREFIX }${ key }`;

    const [ value, setValue ] = useState(() => {
        const jsonData = localStorage.getItem(prefixedKey);
        if(jsonData) return JSON.parse(jsonData);

        if(typeof initialValue !== 'function') {
            return initialValue;
        } else {
            return initialValue();
        }
    });

    useEffect(() => {
        return localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [ value, prefixedKey ]);

    return [ value, setValue ];
}

export default useLocalStorage;
