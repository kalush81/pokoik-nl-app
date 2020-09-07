import React from 'react'
import Header from './header'
import Footer from './footer'

const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

export default function Layout(props) {
    return (
        <div style={{...layoutStyle}}>
            <Header/>
            {props.children}
            <Footer />
        </div>
    )
}
