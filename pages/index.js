import styles from '../styles/Home.module.css'
import { Nav }from './components/Nav'
import { Stack } from 'react-bootstrap'
import { useState } from 'react'

export default function Home() {
  const [first, setfirst] = useState(false)
  
  return (
   <>
    <Nav></Nav>
    <div className='col-xs-1 text-center red'>
      <a className={`${first ? 'display-1': ''} `} onClick={()=>{ setfirst(!first)}}>david</a>
    </div>
    <style jsx>
      {`
        div {
          font-family: BDRmono2021;
          // font-weight: bold;
          height: 100vh !important;
        }

        a:active {

        }
      `}
    </style>
   </>
  )
}
