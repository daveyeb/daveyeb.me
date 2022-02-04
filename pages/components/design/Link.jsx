import styles from '../../../public/govuk/main.module.css'
import { marginBottom, paddingBottom } from './Spacing'

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
                        // text-transform: uppercase;
                        font-size: 14px;
                        // font-weight: 500;
                        // line-height: 22px;
                        // white-space: pre;
                        // word-break: normal;
                        color: #292929 !important;
                    }
                `}
            </style>
        </>
    )
}

export default Link