import styles from '../../../public/govuk/main.module.css'
import Container from './Container'

const rows = {
    default: styles['govuk-grid-row']
}

const GridRow = ({children, debug}) => {
    debug = debug ? styles.debug : ''
    return (

        <>
            <Container>
                <div className={`${rows['default']} ${debug}`}>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default GridRow