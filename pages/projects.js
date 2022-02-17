import Head from '../components/Head'
import Main from '../components/Main'
import { GetServerSideProps } from 'next'
import fetch from "node-fetch";
import { Pane, Badge, LinkIcon, CodeIcon } from "evergreen-ui";
import Link from 'next/link';

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
          <h1 className='pb2 '>Projects</h1>
          <span className='pb1 p desc p0'>Some outcomes of utilizing my free time to experiment with various languages and technology stacks
          <div className='Divider descBorder mt1'></div></span>

          <div className='meta'>
            <span className='meta mr1'>{props.data.length} projects</span>
            {/* <span className='meta '>All shipped</span> */}
          </div>
          <div className='sep'></div>

          { props.data.map((project, i ) => {
           

           return (< >
            <div className=' pt3  row  p0 ' key={i}>
            <div className=' col-xs-10   p0'>
                <h2 className='pt3 '>{project.name}</h2>
                <p className=' pt2  mt1'>
                  {project.description}
                </p>
                <Pane paddingBottom={16}>
                  {project.topics.map((topic, i)=> {
                    <Badge Badge color="red" marginRight={8} key={i}>{topic}</Badge>
                  })}
                </Pane>
            </div>
            
            <div className='col-xs-2 center-xs middle-xs'>
              <Link href={project.homepage}>
                <LinkIcon paddingBottom={30}></LinkIcon>
                </Link>
              <Link href={project.svn_url}>
                <CodeIcon></CodeIcon>
                </Link>
            </div>
          </div>
          <div className='Divider pBorder'></div>
           </>)

            
          })}

          


          {/* {project.description}
        {project.name}

        {new Date(project.updated_at).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })} */}

          

        </div>
        <style jsx>
          {`
              .center {
                margin: 0 auto !important;
                
              }

              .column .center {
                text-align: center;
              }

              .pl3 {
                padding-left: 45px !important;
                border-bottom: 1px solid #292929 !important;
                border-right: 1px solid #292929 !important;
                font-size: 10px;
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

              .project {
                // border-left: 1px solid !important;
              }

              .lupdate {
                font-family: 'srrqzbab' !important;
                font-size: 10px;
              }

              .desc {
                width: 45%;
              }

              .descBorder {
                border-radius: 50% / 50%;
                border-bottom: 8px solid rgb(23,143,131);
              }

              .pBorder {
                border-bottom: 1px solid #e2e2e2;
                margin: 1em auto;
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

              .p {
                font-size: 1.05rem !important;
              }

              h1 {
                font-size: 2.25rem !important;
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