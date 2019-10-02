import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (colorMode) => {
    const [modeValue, setModeValue] = useLocalStorage(colorMode);

    useEffect(()=>{
        // e.preventDefault();
        if(modeValue == true){
            document.querySelector('body').classList.add('dark-mode');
            console.log('is this thing on?')
        } else {
            console.log('kinda working')
        }
    })

    return [modeValue, setModeValue]
};