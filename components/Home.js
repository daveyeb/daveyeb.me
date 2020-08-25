// eslint-disable-next-line node/no-unpublished-import
import cxs from  'cxs/component'

import { content, padding, colSize} from './design/Styles'


export const Container = cxs("div")({
    display:'flex',
    flexWrap: 'wrap',
    minHeight: '90vh',
    color: '#333',
    ...content.around,
    fontFamily: 'GT-Pressura-Pro-Mono-Regular',
})

export const Content = cxs("div")({
    ...colSize(6),
    ...content.start,
    ...padding.p(3),
    margin: 'auto 0',
})

export const LineDrawing = cxs("div")({
    ...colSize(5),
})

export const Directive = cxs("span")({})

export const Image = cxs("img")({}) // will be converted to svg