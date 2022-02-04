import GridCols from "./design/GridCols"
import Link from "./design/Link"
import { width, paddingBottom, marginBottom} from './design/Spacing'

const Nav = () => {
    return (
        <>
            <div className=" nav">
                <GridCols size={'full'} marTop="1"><Link>home</Link></GridCols>
                <div className="bottom">
                    <GridCols size={'full'} marBottom="1"><Link>projects</Link></GridCols>
                    <GridCols size={'full'} marBottom="1" ><Link>blog</Link></GridCols>
                    
                    <GridCols size={'full'} marBottom="1" ><Link>playlists</Link></GridCols>
                </div>
            </div>
            
            <style jsx>
            {
                `
                    .nav {
                        height: 100vh;
                        width: 10vw;
                        position: absolute;
                    }

                    .bottom {
                        position: absolute;
                        bottom: 0;
                    }

                    .debug {
                        border: 1px solid red !important;
                    }
                `
            }
            </style>
        </>
    )
}

export default Nav