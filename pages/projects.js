import Head from '../components/Head'
import Main from '../components/Main'
import { GetServerSideProps } from 'next'
import fetch from "node-fetch";

const headProp = {
  title: 'David Yeböah, Engineer',
  desc: 'Over two years of software development (Front + Back) experience with an intense eagerness to improve'
}

const navProps = {pages:
  [
  {
      name: 'Projects',
      link: '/projects',
      num: 2
  },
  {
      name: 'Blog',
      link: '/blog',
      num: 3
  },
  {
      name: 'Playlists',
      link: '/playlists',
      num: 4
  },
  {
    name: 'Home',
    link: '/',
    num: 1
  }  
]}

const Projects = (props) => {
  // console.log(navProps)

  if (!props.data) {
    return (<>
      <Head {...headProp}>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main {...navProps}>
        Unable to load projects. Please try again later!
      </Main>
    </>)
  }



  return (
    <div>
      <Head {...headProp}>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main {...navProps}>
        <div className='col-xs-6 center main pt10 '>
          <h1 className='pb2'>Projects</h1>
          <span className='desc pb1'>Some outcomes of utilizing my free time to experiment with various languages and technology stacks</span>
          <div className='Divider op50'></div>
          <div className='meta'>
            <span className='meta mr1'>{props.data.length} projects</span>
            {/* <span className='meta '>All shipped</span> */}
          </div>
          <div className='sep'></div>
          <div className='sep c-mt '></div>
          <div className='middle-xs center-xs pt5'>
            <div className='row p0 op60'>
              <div className='col-sm-3  start-xs'>Last Updated at</div>
              {/* <div className='col-sm-9  start-xs'>Project</div> */}
            </div>
            <div className=' Divider op30 mt2'>
            </div>
            {

              props.data.reverse().map((project, i) =>

                <div className=' row p0'>
                  <div className=' col-sm-3 start-xs pt4 op50'>
                    {

                      new Date(project.updated_at).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })
                    }
                  </div>
                  <div className=' col-sm-9'>
                    <div className=' col-xs-8 start-xs p0'><h2 className='pt3'>{project.name} <a>(source)</a></h2></div>
                    <p className='pt4'>{project.description}</p>
                  </div>
                 { (i != props.data.length - 1) ? <div className=' Divider op30 mt2'></div> : ""}
                </div>
                

              )
            }
          </div>
        </div>

        <style jsx>
          {`
              .center {
                margin: 0 auto !important;
                
              }

              .column .center {
                text-align: center;
              }

              .main {
                height: 100vh;
              }

              div {
                font-family: 'GTMaru' !important;
              }

              .meta {
                margin-top: 3px;
                margin-bottom: 3px;
                font-family: 'srrqzbab';
                font-size: 13px;
              }

              .desc {
                width: 45%;
                border-bottom: 8px solid rgb(23,143,131);
              }

              .c-mt {
                margin-top: 1px;
              }

              .sep {
                width: 100%;
                height: 2px;
                background: #000;
              }

              .p0 {
                padding: 0 !important;
              }

              .altfont {
                font-family: 'srrqzbab'
              }


            `}
        </style>
      </Main>


    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const result = await fetch('https://api.github.com/users/daveyeb/repos');
    const data = await result.json();

    return {
      props: { data }
    }
  } catch {
    res.statusCode = 404;
    return
    {
      props: { }
    }
  }
}


export default Projects;