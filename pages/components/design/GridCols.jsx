import styles from '../../../public/govuk/main.module.css'
import { marginBottom, marginTop } from './Spacing'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const columns = {
    full: styles['govuk-grid-column-full'],
    half: styles['govuk-grid-column-one-half'],
    onethird: styles['govuk-grid-column-one-third'],
    twothird: styles['govuk-grid-column-two-thirds'],
    onequarter: styles['govuk-grid-column-one-quarter'],
    threequarter: styles['govuk-grid-column-three-quarters']
}

const fromDesktop = {
    full: styles['govuk-grid-column-full-from-desktop'],
    half: styles['govuk-grid-column-one-half-from-desktop'],
    onethird: styles['govuk-grid-column-one-third-from-desktop'],
    twothird: styles['govuk-grid-column-two-thirds-from-desktop'],
    onequarter: styles['govuk-grid-column-one-quarter-from-desktop'],
    threequarter: styles['govuk-grid-column-three-quarters-from-desktopS']
}


var GridCols = ({size, children, desktop, debug = false, marBottom, marTop, className, absolute}) => {
    size = columns[size] === undefined ? '' : columns[size]
    desktop = fromDesktop[desktop] === undefined ? '' : fromDesktop[desktop]
    debug = debug ? styles.debug : ''
    absolute = absolute ? styles.abs : ''
     
    marBottom = marginBottom[marBottom] === undefined ? '' : marginBottom[marBottom]
    marTop = marginTop[marTop] === undefined ? '' : marginTop[marTop]
    

    return (
        <>
            <div className={`${size} ${desktop} ${className} ${marBottom} ${marTop} ${debug} ${absolute}`}>
                {children}
            </div>
            <style jsx>
                {`
                    .border {
                        // background: #fcfbfa;
                        // padding: 5vw 5vw 3vw 5vw;
                        // // margin-top: 27vw;
                        // // margin-left: 10vw;
                        // // position: relative;
                        // // z-index: 999;
                        
                        // border-image-slice: 1;
                        // box-shadow: 5px 5px 0px 0px #000;
                        // border-image: linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213));
                        
                        border: 0px;
                        border-bottom: 4px solid;
                        border-right: 4px solid;
                        border-image: linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213));
                        border-image-slice: 1;
                        border-image-width: 0px 10px 10px 0px;
                        color: white;
                        padding:0;
                        // margin: auto;
                        // text-decoration: none;
                        box-sizing: content-box
                    }

                    * {
                      font-family: 'National 2' !important;
                    }
                `}
            </style>
        </>
        
    )
}

GridCols = styled(GridCols)(
    space,
    layout,
    color
)

export default GridCols

// multi select 
