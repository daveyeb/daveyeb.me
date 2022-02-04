import styles from '../../public/govuk/main.module.css'

const wrapper = {
    main: styles['govuk-main-wrapper']
}


const Main = ({children, type}) => {
    return (
        <>
            <main className={wrapper[type]}>
                {children}
            </main>
        </>
    )
}

export default Main