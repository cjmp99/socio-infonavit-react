import React from 'react'
import { useOnChangeValue } from 'hooks/useOnChangeValue'
import { FormStyle } from 'styled-components/form/form.style'
import { useOnSubmit } from 'hooks/useOnSubmit'
import { Input } from 'styled-components/input/input.style'
import { Button } from 'styled-components/button-login/button.style'
import { Error } from 'styled-components/error-login/error-login.style'

const Form = () => {
    const [data, errorE, setErrorE, errorP, setErrorP, onChange] = useOnChangeValue()
    const [focusRef, focusTwoRef, onSubmit] = useOnSubmit(data, setErrorE, setErrorP)

    return (
        <FormStyle onSubmit={onSubmit}>
            <Input
                type='email'
                name='email'
                value={data.email}
                onChange={onChange}
                placeholder='email'
                ref={focusRef}
                autoCorrect="off"
                autoComplete="off"
            />
            {errorE && <Error>{errorE}</Error>}

            <Input
                type='password'
                name='password'
                value={data.password}
                onChange={onChange}
                placeholder='password'
                ref={focusTwoRef}
                autoCorrect="off"
                autoComplete="off"
            />

            {errorP && <Error>{errorP}</Error>}

            <Button
                type='submit'
                value='Sign In'
                disabled={data.email === '' && data.password === '' ? true : false}
                background={data.email === '' && data.password === '' ? '#9F9F9F' : '#EC5056'}
            />
        </FormStyle>
    )
}

export default Form
