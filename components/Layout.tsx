import * as React from 'react'
import Head from 'next/head'
type LayoutProps = {
    title?: string
}
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    backgroundColor: 'black',
    color: 'white'
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div style={layoutStyle}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
        </header>
        {children}
    </div>
)
export default Layout