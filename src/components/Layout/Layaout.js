import React, { useEffect, useState } from 'react'
import { Container, ContentImage, Dashboard, Label, Logout, Sidebar, Switch } from 'styled-components/layout/layout.style'
import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import { useSession } from 'hooks/useSession';
import Alert from 'components/Alert/Alert';
import { logout } from 'context/session/sessionActions';
import { useHistory } from 'react-router-dom';
import logo from 'media/logo.png'
import { Img } from 'styled-components/image/image.style';
import { RESET_STATE_BENEVITS } from 'types/benevits/index';
import { useBenevits } from 'hooks/useBenevits';

const Layaout = (props) => {
    const [state, dispatch] = useSession();
    const [stateB, dispatchB] = useBenevits();
    const history = useHistory()
    const [showSidebar, setShowSidebar] = useState(true);

    const onSidebar = () => {
        if (showSidebar) {
            setShowSidebar(false)
        } else {
            setShowSidebar(true)
        }
    }

    const showConfirmLogout = () => {
        Alert(
            'warning',
            'Are you sure?',
            'to close the session',
            true,
            '#EC5056',
            '#9F9F9F',
            'Ok',
            true,
            dispatch,
            logout,
            history
        )
    }

    useEffect(() => {
        if (!state.logout) return
        history.push('/')
        localStorage.clear()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.logout])

    const redirectBenevits = () => {
            dispatchB({
                type: RESET_STATE_BENEVITS
            })
            history.push('/benevits')
    }

    const redirectWallets = () => {
            dispatchB({
                type: RESET_STATE_BENEVITS
            })
            history.push('/dashboard')
    }

    return (
        <Container>
            <Switch onClick={onSidebar}>
                <FaBars size={30} />
                <ContentImage>
                    <Img src={logo} />
                </ContentImage>
            </Switch>



            {showSidebar &&
                <Sidebar>
                    <Label onClick={() => redirectWallets()}>Wallets</Label>
                    <Label onClick={() => redirectBenevits()}>Benevits</Label>
                    <Logout onClick={showConfirmLogout}><FaSignOutAlt size={20} />Logout</Logout>
                </Sidebar>

            }
            <Dashboard switch={!showSidebar ? '100%' : '75%'}>
                {props.children}
            </Dashboard>
        </Container>
    )
}

export default Layaout
