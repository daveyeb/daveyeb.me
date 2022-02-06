import styles from '../../../public/govuk/main.module.css'
import Container from './Container'

const Row = ({children, debug}) => {
    debug = debug ? styles.debug : ''
    return (

        <>
            <Container>
                <div className={`${styles['govuk-grid-row']} ${debug}`}>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default Row