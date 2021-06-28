import Alert from 'components/Alert/Alert';
import { login } from 'context/session/sessionActions';
import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSession } from './useSession';

export const useOnSubmit = (data, setErrorE, setErrorP) => {
    const history = useHistory();
    let focusRef = useRef(null);
    let focusTwoRef = useRef(null);
    const [focus, setFocus] = useState(true);
    const [count, setCount] = useState(0);
    const [state, dispatch] = useSession();

    useEffect(() => {
        if (!state.errorLogin) return;
        Alert(
            'error',
            'Error',
            state.errorLogin,
            false,
            '#EC5056',
            '',
            'Ok', 
            false,
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.errorLogin])

    useEffect(() => {
        if (!state.user) return;
        history.push('/dashboard')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.user])

    const onF = () => {
        if (focus) {
            focusRef.current.focus()
        }
        setFocus(false)
    }

    useEffect(() => {
        onF()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = e => {
        e.preventDefault();
        setCount(count + 1)
        if (data.email !== '' && data.password === '') {
            if (!focus) {
                focusRef = null
                focusTwoRef.current.focus()
            }
            if (count > 0) {
                setErrorP('You must enter a password!')
            }
        } else if (data.email === '' && data.password !== '') {
            setErrorE('You must put an email!')
        } else {
            login(data, dispatch)
            setCount(0)
        }
    }

    return [focusRef, focusTwoRef, onSubmit]
};