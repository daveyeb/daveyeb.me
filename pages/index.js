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
        <div class="row short">
          <div class="column col-xs-12 p2">
          <div class="row between-xs">
            <a class="">
              <ThreeBarsIcon size={18} />
            </a>

            <div class="pos-middle">
              <Clock type="digital" />
            </div>

            <div class="pagination">
              1/3
            </div>
          </div>
          </div>
        </div>

        <div class="row tall">
          <div class=" col-xs-12 col-sm-4  Display2">
            <div class="redc">Live</div>
            <h1 class="Display1">Hola I'm David</h1>
            <ul class="Display2 gray listed">
              <li>Software engineer currently based in Melbourne, FL
              </li>
              <li>Building and maintaining software systems that inhabit E-8C JSTARS
              </li>
              <li>
              Computer Science graduate from Oswego State
              </li>
              <li>
              Engineer at Northrop Grumman
              </li>
            </ul>
          </div>


          <div class=" col-xs-12 col-sm-8">
            <div>   
              <img src="/IMG_0146.jpeg"/>
            </div>
            <div class="gray-2 float">
              <span>Photo by Beth Cassidy</span>
            </div>
          
          </div>

          
        </div>

        <div class="row tall">
        
          <div class="column col-xs-12 col-sm-12 p0-important pos-middle-2 Divider">
          <div class="pb4"></div>
          
          <div class="row p0 end-xs">
            <div class="col-xs-4 start-xs">© 2020 David Yeböah. All rights reserved.
            
            
            <div class="col-xs-7 p0-important">
             <span class="pt7">about this website</span>
            <div class="pb2"></div>
              <span class="abt">
                Written, designed, and built by myself with Next.js and other react components
              </span>
            </div>
            </div>
            <div class="col-xs-2 ">
              <ul>
                <li>information</li>
                <li><a>resume</a></li>
                <li><a>journal</a></li>
                <li><a>feed</a></li>
                <li><a>playlists</a></li>
              </ul>
            </div>
            <div class="col-xs-2">
            
            <ul>
              <li>contact</li>
              <li><a>email</a></li>
              <li><a>phone</a></li>
              <li><a>twitter</a></li>
              <li><a>newsletter</a></li>
            </ul>
              
            </div>
            <div class="col-xs-2">
            

            <ul>
              <li>projects</li>
              <li><a>node-enigma</a></li>
              <li><a>gt6</a></li>
            </ul>

            </div>
            <div class="col-xs-2">
          
            </div>
          </div>
        </div>
        
        </div>
        
        
      </div>
  )
}
