import styles from '../../../public/govuk/main.module.css'

const types = {
    novisitedstate: styles['govuk-link--no-visited-state'],
    nounderline: styles['govuk-link--no-underline']
}

const Link = ({children, style}) => {
    return (
        
        <>
            <a href="#" className={`${styles['govuk-link']} ${types.novisitedstate} ${types.nounderline}`}>{children}</a>
            <style jsx>
                {`
                    * {
                        font-family: 'BDR Mono' !important;
                        font-size: 14px;
                        color: #292929 !important;
                    }
                `}
            </style>
        </>
    )
}

export default Link