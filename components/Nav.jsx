import { Clock } from "grommet";
import Link from 'next/link'

const Nav = ( {pages} ) => {
    console.log(pages)
    
    return (

    <>
    <div className="column nav col-xs-12 p1 ">
        <div className="row between-xs">

            {/* menu */}
            <Link href={pages[0].link}>
                <a className="menu">
                    {pages[0].name}
                </a>
            </Link>


            {/* clock */}
            <div className="">
                <Clock type="digital" />
            </div>

            {/* pagination */}
            <div className="pagination ">
                <sup>{pages[0].num}</sup>/
                <sub>{pages.length}</sub>
            </div>

            {/* divider */}
            <div className="col-xs-12 p0 sub-links end-xs">

                {
                    pages.slice(1).map((page, i) => {
                        return (
                            <span className="">
                                <Link href={page.link} key={i}>
                                    <a className="menu">{page.name}</a>
                                </Link>
                            </span>
                        )
                    }

                    )
                }
                
            </div>
        </div>
        <style jsx>
            {`
                .menu {
                    text-decoration:none;
                    font-size: 15px;
                }

                .pagination {
                    font-size: 18px;
                }

                .bb {
                    border-bottom: 2px solid #292929;
                }

                div {
                    font-family: 'srrqzbab'
                }

                .nav {
                    position: absolute;
                    z-index: 100;
                    width: 100%;
                }

                .p0 {
                    padding: 0 !important;
                }

                .sub-links {
                    text-align: start !important;
                    height: 95vh;
                }

                abs {
                    flex-basis: 10% !important;
                }

            `}
        </style>

    </div>

</>
)}

export default Nav