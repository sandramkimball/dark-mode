import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue) => {
    const [modeValue, setModeValue] = useLocalStorage(key, initialValue);

    useEffect(()=>{
        if(localStorage.value == true){
            setModeValue= 'dark-mode'
        }
    })

    const handleChanges = e => {
        setModeValue(e.target.value);
    }
    return [modeValue, setModeValue, handleChanges]
};