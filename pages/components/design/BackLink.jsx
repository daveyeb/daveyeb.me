import styles from '../../../public/govuk/main.module.css'

const BackLink = ({ children }) => {
    return (
        <a href="#" className={styles['govuk-back-link']}>{children}</a>
    )
}

export default BackLink