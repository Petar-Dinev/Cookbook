import { useState } from "react";
import { getData } from "../utils/workWithLocalStorage";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const data = getData(key);
        return data ? data : initialValue;
    })

    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}