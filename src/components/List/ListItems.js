import React, { useEffect, useState } from 'react'
import { Container, Card, ContentSection, SkeletonCard, Image, Button } from 'styled-components/list-items/list-items.style'
import Skeleton from 'react-loading-skeleton';
import { changeBenevitToUnlocked, getBenevits, getBenevitsUser, getWallets } from 'context/benevits/benevitsActions';
import { useBenevits } from 'hooks/useBenevits';
import { useHistory } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa'

const ListItems = ({ parameter }) => {
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useBenevits()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        getBenevits(dispatch)
        getWallets(dispatch)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const benevitU = (benevit) => {
        changeBenevitToUnlocked(benevit, dispatch)
    }

    const filterBenevits = (wallet) => {
        getBenevitsUser(wallet?.id, dispatch)
    }

    useEffect(() => {
        if (state.benevitsUser.length === 0) return

        history.push('/benevits-unlocked')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.benevitsUser])


    return (
        <Container>
            <h2>{parameter ? 'Benevits' : 'Wallets Available'}</h2>

            {loading &&
                <ContentSection>
                    {!parameter ? state?.wallets?.map((item) => (
                        <SkeletonCard width={'200px'} height={'100px'} key={item.id}>
                            <Skeleton height={20} count={4} />  <Skeleton height={100} />
                        </SkeletonCard>
                    )) : state?.benevits?.map((item) => (
                        <SkeletonCard width={'300px'} height={'200px'} key={item.id}>
                            <Skeleton height={20} count={4} />  <Skeleton height={100} />
                        </SkeletonCard>
                    ))}
                </ContentSection>

            }

            <ContentSection>
                {!loading && !parameter ? state?.wallets.map((item) => (
                    <Card width={'200px'} height={'100px'} key={item.id} onClick={() => filterBenevits(item)}>
                        <FaWallet size={40}/>
                        <h2>{item.name}</h2>
                    </Card>
                )) :
                    state?.benevits?.map((item) => (
                        <Card width={'300px'} height={'200px'} key={item.id}>
                            <Image src={item.vector_full_path} />
                            <h3>{item.name}</h3>
                            <Button onClick={() => benevitU(item)}>I want it</Button>
                        </Card>
                    ))
                }
            </ContentSection>

        </Container>
    )
}

export default ListItems
