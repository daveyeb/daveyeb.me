import Head from '../components/Head';
import {ThreeBarsIcon, XIcon} from '@primer/styled-octicons';
import {Clock} from 'grommet';
import { useEffect, useRef, useState } from "react"

const headProps = {
  title: 'David Yeboah, SWE',
  description:
    'This is the personal webspace of David Yeböah, a sofware engineer at Northrop Grumman, previously computer science student at SUNY Oswego.',
  img: 'Portrait',
};

const OpenMenu = () => {
   
  return (<>
          <XIcon size={18} className="nav-icon-p" />
          <ThreeBarsIcon  size={18} className="nav-icon-n" />
          
      </>)
}

const CloseMenu = () => {
   
  return (<> 
          <ThreeBarsIcon  size={18} className="nav-icon-p" />
          <XIcon size={18} className="nav-icon-n" /> 
      </>)
}

export default function Home() {
  const [open, setOpen] = useState();
  const [previous, setPrevious] = useState();
  const [changing, setChanging] = useState(true);

  useEffect(() => {
    if (changing) {
      
      const timer = setTimeout(() => {
        if (open) {
          setPrevious(<OpenMenu />)
        }else {
          setPrevious(<CloseMenu />)
        }
        setChanging(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [changing, open]);

  useEffect(()=>{
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-176178393-1', 'auto');
      ga('send', 'pageview');
  },[])

  return (
    <div>
      <Head {...headProps} />
      <div class="row short">
        <div class="column col-xs-12 p1">
          <div
            class="row nav-bar between-xs"
            style={open ? {height: '100px'} : {height: '32px'}}
          >
            <a
              class="nav-menu top-xs"
              onClick={() => {
                // console.log(open);
                
                
                setOpen(!open);
                setChanging(true);
                
              }}
            >
              {changing ? (
                <div class="nav-icon test">
                  {previous}
                </div>
              ) : (
                <div class="nav-icon">
                  {open ? <XIcon size={18} className=""/>: 
                   <ThreeBarsIcon  size={18}  className=""/> 
                  }
                </div>
              )}
            </a>

            <div class="pos-middle">
              <Clock type="digital" />
            </div>

            <div class="pagination">1/3</div>
            <div class="col-xs-12 pb1"></div>
          </div>
          <div class="Divider "></div>
        </div>
      </div>

      <div class="row tall">
        <div class=" col-xs-12 col-sm-4  Display2">
          <div class="redc">Live</div>
          <h1 class="Display1">Hola I'm David</h1>
          <ul class="Display2 gray listed">
            <li>Software engineer currently based in Melbourne, FL</li>
            <li>
              Building and maintaining software systems that inhabit E-8C JSTARS
            </li>
            <li>Computer Science graduate from Oswego State</li>
            <li>Engineer at Northrop Grumman</li>
          </ul>
        </div>

        <div class=" col-xs-12 col-sm-8">
          <div>
            <img src="/IMG_0146.JPG" />
          </div>
          <div class="gray-2 float">
            <span>Photo by Beth Cassidy</span>
          </div>
        </div>
      </div>

      <div class="row short">
        <div class="column col-xs-12 col-sm-12 ">
          <div class="Divider"></div>
          <div class="pb4"></div>

          <div class="row end-xs">
            <div class="col-sm-4 col-xs-12 start-xs last-xs p0-important first-sm">
              © 2021 David Yeböah. All rights reserved.
              <div class="ShowMobile pb2"></div>
              <div class="col-xs-12   col-sm-7 p0-important c-mt99 first-xs last-sm">
                <span class="c-pt7">about this website</span>
                <span class="pb1"></span>
                <div class="Divider mr15 op30"></div>
                <div class="ShowMobile  pb0"></div>
                <span class="abt">
                  Written, designed, and built by myself with Next.js and other
                  react components
                </span>
                <span class="ShowMobile pb2"></span>
              </div>
            </div>
            <div class="col-xs-6  col-sm-2">
              <ul>
                <li>information</li>
                <li>
                  <a href="https://drive.google.com/file/d/1QwjEtEQsKdYiw6f5VeGAEuyi4npQjch-/view" >resume</a>
                </li>
                <li>
                  <a className="not-allowed">journal</a>
                </li>
                <li>
                  {/* <a>feed</a> */}
                </li>
                <li>
                  <a className="not-allowed">playlists</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-6  col-sm-2">
              <ul>
                <li>contact</li>
                <li>
                  <a href="mailto:daveyeb@gmail.com">email</a>
                </li>
                <li>
                  <a href="tel:646-420-1283">phone</a>
                </li>
                <li>
                  <a href="https://twitter.com/daveyeb" target="_blank">twitter</a>
                </li>
                <li>
                  {/* <a>newsletter</a> */}
                </li>
              </ul>
            </div>
            <div class="col-xs-4 col-sm-2 ShowDesktop">
              <ul>
                <li>projects</li>
                <li>
                  <a href="https://github.com/daveyeb/node-enigma">enigma</a>
                </li>
                <li>
                  <a href="https://github.com/daveyeb/rtree">rtree</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-2 ShowDesktop"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
