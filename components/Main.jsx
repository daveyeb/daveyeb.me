import Nav from './Nav'

const Main = ({children, pages }) => {
    // console.log(pages)
   return (
        <>
            <Nav pages={pages}></Nav>
            {children}
        </>)
}

 
export default Main;