import styles from '../../../public/govuk/main.module.css'

const Container = ({children}) => {
    return (
        <>
            <div className={styles['govuk-width-container']}>
                {children}
            </div>
        </>
    )
}

export default Container