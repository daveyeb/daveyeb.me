import styles from '../styles/Home.module.css'
import { Space } from 'antd'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Stack } from 'react-bootstrap'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Stack direction='horizontal' className='p-5 align-items-start' gap={5}>
           Ghana
          <span className='display-1'>
            Fish tacos
          </span>
          <span className={styles.banana}>
            Banana pudding
          </span>
        </Stack>
      </div>
      <div className={styles.block}>
        <Space align='end'>
          <div>
            Modelo
          </div>
          <div>
            Fish tacos
          </div>
          <div>
            Banana pudding
          </div>
        </Space>
      </div>
      <style jsx>
      {`
       * {
         font-family:'BDRmono2021Rounded';
       }
      `
      }
    </style>
    </div>
   
  )
}
