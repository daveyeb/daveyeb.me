import Head from '../components/Head'
import Main from '../components/Main'


const headProp = {
  title: 'David Yeböah, Engineer',
  desc: 'Over two years of software development (Front + Back) experience with an intense eagerness to improve'
}


export default function Home() {
  return (
    <div>
      <Head {...headProp}>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>

      </Main>


    </div>
  )
}
