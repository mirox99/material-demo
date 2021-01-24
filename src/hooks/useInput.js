import {useState} from "react";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');

    return {
        value,
        setValue,
        setError,
        reset: () => setValue(""),
        bind: {
            value,
            helperText: error,
            error: error.length > 0,
            onChange: event => {
                setValue(event.target.value);
                setError('');
            }
        }
    };
};
