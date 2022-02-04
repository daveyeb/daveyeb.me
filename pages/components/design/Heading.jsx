import styles from '../../../public/govuk/main.module.css'

const heading = {
    xl: styles['govuk-heading-xl'],
    m: styles['govuk-heading-m']
}

const Heading = ({children, size}) => {
    return (
        <>
            <div className={heading[size]}>
                {children}
            </div>
            <style jsx>

                {`
                    * {
                        font-family: 'National 2';
                    }
                `}
            </style>
        </>
    )
}

export default Heading