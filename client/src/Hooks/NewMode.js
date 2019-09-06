import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useNewMode = () => {
    const [value, setValue] = useLocalStorage('new-mode', false);

    useEffect(() => {
        if (value === true) {
            document.body.classList.add('new-mode')
        } else {
            document.body.classList.remove('new-mode')
        }
    }, [value])

    const handleClick = e => {
        e.preventDefault();
        setValue(!value);
    }

    return [value, handleClick]
}

export default useNewMode; 