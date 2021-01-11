import Head from '../components/Head'
import {ThreeBarsIcon} from '@primer/octicons-react'
import { Clock } from 'grommet';


const headProps = {
  title:'höme',
  description: 'This is the personal webspace of David Yeböah, a sofware engineer at Northrop Grumman, previously computer science student at SUNY Oswego.',
  img: 'Portrait'
}



export default function Home() {
  return (
      <div>
        <Head {...headProps}/>
        <div class="column col-xs-12">
          <div class="row between-xs ">
            <a class="">
              <ThreeBarsIcon size={16} />
            </a>

            <div class="pos-middle">
              <Clock type="digital" />
            </div>

            <div class="">
              1/3
            </div>
          </div>
        </div>

        <div class=" row tall">
          <div class=" col-xs-12 col-sm-4">
            <h1>David Yeböah</h1>
            <p>
              Software engineer currently based in Melbourne, FL ─ building and maintaining software systems that inhabit E-8C JSTARS. Computer Science graduate from Oswego State, engineer at Northrop Grumman.
            </p>
            <hr/>
              Take a look around.
          </div>
          <div class=" col-xs-12 col-sm-7">
          {/* <img src="/public/IMG_0146.jpeg"/> */}
          </div>
        </div>

        <div class="row column center-xs">
          <div class=" col-xs-12 col-sm-8 Divider "></div>
          <div class="pt3"></div>
          <div class="row col-xs-12 col-sm-8 ">
            <span class=" float">© 2020 David Yeböah. All rights reserved.</span>
            <a class=" end-xs">@daveyeb</a>
            <hr/>
            <p class="">
            Written, designed, and built by David Yeböah, a SWE who you can find on <a>Twitter</a>, <a>GitHub</a>, or good old-fashioned <a>Email</a>.
            </p>
          </div>
        </div>
        
      </div>
  )
}
