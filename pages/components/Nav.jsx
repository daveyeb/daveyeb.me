const Nav = () => {
    return (
        <>
            <div className="col-sm-1 nav p-3">
                <span>home</span>
                <div className="d-flex flex-column justify-content-end nav-items pb-3">
                    <div className="rel pos1"><a href="">blog</a></div>
                    <div className="rel pos2"><a href="">projects</a></div>
                    <div className="rel pos3"><a href="">playlists</a></div>
                </div>
            </div>
        </>
    )
}

export default Nav