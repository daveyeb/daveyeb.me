import { useState } from "react"

const Nav = () => {
    var [clicked, setClicked] = useState()

    console.log(clicked)

    return (
        <>
            <div className="col-sm-1 nav p-3">
                <span>home</span>
                <div className="d-flex flex-column justify-content-end nav-items pb-3">
                    <div className="rel pos1">
                        {
                            !clicked ? 
                            <a href="" className={clicked ? 'next' : ''} onClick={ () => setClicked(!clicked)} >blog</a>
                            : <a href="" className={clicked ? 'prev' : ''} >projects</a>
                        }
                    </div>
                    {/* <div className="rel pos2"><a href="" className={clicked ? 'next' : ''} >projects</a></div> */}
                    <div className="rel pos3"><a href="">playlists</a></div>
                </div>
            </div>
        </>
    )
}

export default Nav