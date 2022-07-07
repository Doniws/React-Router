const nav_list = () => {
    return (
        <ul>
            <CustomLink to="/index" >
                <i className="fa-regular fa-home"></i>
            </CustomLink>
            <CustomLink to="/friends" >
                <i className="fa-regular fa-user-group"></i>
            </CustomLink>
            <CustomLink to="/short" >
                <i className="fa-regular fa-tv"></i>
            </CustomLink>
            <CustomLink to="/news" >
                <i className="fa-regular fa-newspaper"></i>
            </CustomLink>
            <CustomLink to="/message" >
                <i className="fa-regular fa-message"></i>
            </CustomLink>
        </ul>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return (
        <li>
            <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
        </li>
    )
}
export default function NavBar () {
    return (
        <nav className="nav">
            <Link className="h1" to="/">DoniNav</Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Pricing">Pricing</CustomLink>
                <CustomLink to="/About">About</CustomLink>
            </ul>
        </nav>

    )
}

function CustomLink({to , children , ...props}) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true})
    return (
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}