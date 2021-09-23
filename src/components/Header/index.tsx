import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import styles from './index.module.css'

export interface INavigationProps {
    height?: string;
    image?: string;
    title: string;
    headline: string;
}

const Header: React.FC<INavigationProps> = props => {
    const { children, height, image, headline, title, } = props;
    let headerStyle = {
        //background: 'linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(' + image + ') no-repeat center center',
        background: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(' + image + ') no-repeat center center',
        backgroundColor: 'black',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: height
    };

    return (
        <header style={headerStyle}>
            <Container>
                <Row className="align-items-center text-center">
                    <Col>
                        <h1 className={styles.glow}>{title}</h1>
                        <h3 className={styles.headline}>{headline}</h3>
                        {children}
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

Header.defaultProps = {
    height: '100%',
    image: 'https://images.unsplash.com/photo-1626162987518-4fee900a9323?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
}

export default Header;
