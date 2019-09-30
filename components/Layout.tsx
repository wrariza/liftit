import * as React from 'react'
import Head from 'next/head'
import { Header } from './shared/Header'

type LayoutProps = {
    title?: string
}
const layoutStyle = {
    display: 'block',
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    color: 'white'
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div style={layoutStyle}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       <Header
            title={title}
       ></Header>  
        {children}
    </div>
)
export default Layout