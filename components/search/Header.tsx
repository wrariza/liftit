type HeaderProps = {
    title?: string
}

const headerStyle = {
    display:'flex',
    flex: 1,
    backgroundColor: '#009688',
    padding: '10px'
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => (
    <header style={headerStyle}>
        <h1>{title}</h1>
    </header>
)