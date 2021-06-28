import React from 'react'
import { ContentSections } from 'styled-components/content-sections/content-section.style'
import { Section } from 'styled-components/section/section.style'
import Form from 'components/form/Form'
import family from 'media/familia.png'
import logo from 'media/logo.png'
import { Img } from 'styled-components/image/image.style'


const Login = () => {

    return (
        <ContentSections>
            <Section background={'#EC5056'} font={'50px'}>
                <Img src={family} />
                <Img src={logo} />
            </Section>
            <Section>
                <Form />
            </Section>
        </ContentSections>
    )
}

export default Login
