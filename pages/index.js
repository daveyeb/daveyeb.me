import Head from '../components/Head'


const headProps = {
  title:'höme',
  description: 'This is the personal webspace of David Yeboah, a sofware engineer at Northrop Grumman, previously computer science student at SUNY Oswego.',
  img: 'Portrait'
}



export default function Home() {
  return (
      <div>
        <Head {...headProps}/>
        <h1>David Yeböah</h1>
        <p>
          Software engineer currently based in Melbourne, FL ─ building and maintaining software systems that inhabit E-8C JSTARS. Computer Science graduate from Oswego State, engineer at Northrop Grumman.
          <br/>
          Take a look around.
        </p>
      </div>
  )
}
