import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/blog-chain-logo.png';
import styles from './index.module.css';
import { Navbar, NavbarBrand, Nav, NavbarText, Container, Button } from 'reactstrap';
import UserContext from '../../contexts/user';

export interface INavigationProps { }

const Navigation: React.FunctionComponent<INavigationProps> = props => {
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;

    const logout = () => {
        userContext.userDispatch({ type: 'logout', payload: userContext.userState });
    }

    return (
        <Navbar light expand="md">
            <Container>
                <NavbarBrand tag={Link} to='/'><img src={'blog-chain-logo.png'} height='40px' alt='logo'/></NavbarBrand>
                <Nav className="mr-auto" navbar> </Nav>
                {user._id !== '' ?
                    <div>
                        <Button outline className={styles.button} tag={Link} to="/edit">
                            <i className="far fa-sticky-note mr-2"> </i>
                            Post a Blog
                        </Button>
                        <NavbarText className="ml-2 mr-2">|</NavbarText>
                        <Button outline size="sm"  className={styles.button} onClick={() => logout()}>
                            Logout
                        </Button>
                    </div>

                    :
                    <div>
                        <NavbarText  tag={Link} to="/login">Login</NavbarText>
                        <NavbarText className="ml-4 mr-4">|</NavbarText>
                        <NavbarText  tag={Link} to="/register">Signup</NavbarText>
                    </div>
                }
            </Container>
        </Navbar>
    );
}

export default Navigation;
