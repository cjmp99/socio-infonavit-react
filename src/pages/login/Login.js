import React from 'react'
import { ContentSections } from 'styled-components/content-sections/content-section.style'
import { Section } from 'styled-components/section/section.style'
import Form from 'components/form/Form'

const Login = () => {

    return (
        <ContentSections>
            <Section background={'#EC5056'} font={'50px'}>
                <span>SOCIO<b>INFONAVIT</b></span>
            </Section>
            <Section>
                <Form />
            </Section>
        </ContentSections>
    )
}

export default Login
