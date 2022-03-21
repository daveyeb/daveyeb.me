import styles from '../styles/Home.module.css'
import { Space } from 'antd'
import 'antd/dist/antd.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Space align='baseline' direction='vertical' size='large'>
           Ghana
          <span>
            Fish tacos
          </span>
          <span className={styles.banana}>
            Banana pudding
          </span>
        </Space>
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
    </div>
  )
}
