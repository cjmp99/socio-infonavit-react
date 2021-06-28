import { useState } from 'react';

export const useOnChangeValue = () => {
    const [errorE, setErrorE] = useState(null)
    const [errorP, setErrorP] = useState(null)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const onChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

        if (!errorE && !errorP) return;
        setErrorE(null)
        setErrorP(null)
    }


    return [data, errorE, setErrorE, errorP, setErrorP, onChange]
};