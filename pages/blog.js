import Head from '../components/Head'

const headProps = {
    title:'weblög',
    description: 'This is the personal webspace of David Yeböah, a sofware engineer at Northrop Grumman, previously computer science student at SUNY Oswego.',
    img: 'Portrait'
  }
  

export default function Home() {
    return (
        <div>
          <Head {...headProps}/>
          <div class="column col-xs-12">
            <div class="row between-xs ">
              <div class="">
                ham
              </div>
  
              <div class="pos-middle">
                clock
              </div>
  
              <div class="">
                avatar
              </div>
            </div>
          </div>
  
          <div class=" row tall center-xs">
            <div class=" col-xs-12 col-sm-8 start-xs">
              <h1>Weblög</h1>
              <hr></hr>
              <p>
                Ex ex sit adipisicing minim nisi cupidatat aliqua est sunt. Et duis incididunt laboris sint cillum cillum consequat consequat enim cupidatat laborum laboris cupidatat. Id aliquip non velit minim. Voluptate adipisicing officia est tempor voluptate amet dolore deserunt labore proident esse ipsum cillum nostrud.

                Id et esse laborum incididunt dolor nisi. Esse dolore sint elit dolor. Commodo in Lorem in do incididunt pariatur nisi adipisicing sint consequat labore consequat occaecat. Deserunt eu incididunt minim cillum nisi minim est mollit. Quis aute velit ex consectetur magna eiusmod eu. Officia anim mollit eiusmod reprehenderit id dolor fugiat eu ipsum nisi.
              </p>
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
  