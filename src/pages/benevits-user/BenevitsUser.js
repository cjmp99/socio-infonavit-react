import Layaout from 'components/Layout/Layaout';
import { useBenevits } from 'hooks/useBenevits'
import React from 'react'
import { Container, Card, ContentSection } from 'styled-components/list-items/list-items.style';

const BenevitsUser = () => {
    const [state] = useBenevits()


    return (
        <Layaout>
            <Container>
                <h2>Benefits and discounts</h2>

                <ContentSection>
                    {state.benevitsUser.length === 0 && <span>Go to the benevist list and add promotions and benefits in the button "I want it"</span>}
                    {state.benevitsUser.map((benevit) => (
                        <Card key={benevit.id}>
                            <img src={benevit.ally.mini_logo_full_path} />
                            <h3>{benevit.title}</h3>
                            <span>{benevit.name}</span>
                        </Card>
                    ))}
                </ContentSection>
            </Container>
        </Layaout>
    )
}

export default BenevitsUser
