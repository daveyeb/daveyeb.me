import Layout from './components/Layout'
import pages from './meta'
import styles from '../public/govuk/main.module.css'
import BackLink from './components/design/BackLink'
import WidthContainer from './components/design/Container'
import GRow from './components/design/GridRow'
import GridCols from './components/design/GridCols'
import Heading from './components/design/Heading'
import Main from './components/Main'
// import Image from './components/Image'
import me from '../public/IMG_0146.JPG'
import Image from 'next/dist/client/image'
import GridRow from './components/design/GridRow'
import Intro from './components/Intro'


export default function Home() {
    return (
        <Layout title={pages.home.name}>
            {/* <button className={styles['govuk-button']}>
                Save and continue
            </button> */}

            
            <GridCols size={'twothird'} marTop={'9'} ml={400} >
                <Image src={me}></Image>
            </GridCols>

            <GridCols size={'onethird'} bg={'white'} mt={200} ml={200} height={400} absolute={true} className={'border'}>
                    <div className='bd'>
                        <Heading size='m'>
                        Hola its David 
                        </Heading>
                    </div>
            </GridCols>
        
            
            <style jsx>
                {`
                    .red {
                        border: 1px solid red !important
                    }

                    .intro {
                        position: absolute
                    }

                 
                
                `}
            </style>
        </Layout>
    )
}

