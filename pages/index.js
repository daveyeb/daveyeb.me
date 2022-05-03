import styles from '../styles/Home.module.css'
import { Nav }from './components/Nav'
import { Stack } from 'react-bootstrap'

export default function Home() {
  return (
   <>
    <Nav></Nav>
    {/* <span className='display-1'>
      david
    </span> */}
    <style jsx>
      {`
        span {
          font-family: BDRmono2021;
          // font-weight: bold;
        }
      `}
    </style>
   </>
  )
}
