// canlis 

export const row = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    boxSizing: 'border-box',
    marginRight: '-.5rem',
    marginLeft: '-.5rem',
}


export const cols = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0, 
    paddingRight: '.5rem', 
    paddingLeft: '.5rem',
}

export const reverse = {
    row:{
        flexDirection: 'row-reverse',
        flexWrap: 'row-reverse',
    },
    col: {
        flexDirection: 'row-reverse',
        flexWrap: 'row-reverse',
    },
}

export const colSize = (num) => {
    if(!num) return {
        flexGrow: !num, 
        flexBasis: num, 
        maxWidth: "100%"
    }

    return {
        flexBasis: `${100/(12/num)}%`, 
        maxWidth: `${100/(12/num)}%`
    }
}

export const colOffset = (num) => ({marginLeft: `${100/(12/num)}%`})

export const content = {
    start:{
        justifyContent: 'flex-start',
        textAlign: 'start',
    },
    center: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    end: {
        justifyContent:'flex-end',
        textAlign: 'end',
    },
    around: {
        justifyContent: 'space-around',
    },
    between: {
        justifyContent: 'space-between',
    }
}

export const line = {
    top: {
        alignItems: 'flex-start',
    },
    middle: {
        alignItems: 'center',
    },
    bottom: {
        alignItems: 'flex-end',
    }
}

export const order = {
    first: {
        order: -1
    }, 
    last: {
        order: 1,
    }
}

export const opacity = (num) => ({ opacity : `.${num}`})


export const margin = {
    m: (num) => {
        return {margin: `${8*num}px`}
    },
    b: (num) => {
        return {marginBottom: `${8*num}px`}
    },
    l: (num) => {
        return {marginLeft: `${8*num}px`}
    },
    r: (num) => {
        return {marginRight: `${8*num}px`}
    },
    t: (num) => {
        return {marginTop: `${8*num}px`}
    }
}


export const padding = {
    p: (num) => {
        return { padding: `${8*num}px`}
    }, 
    b: (num) => {
        return { paddingBottom: `${8*num}px`,}
    },
    t: (num) => {
        return { paddingTop: `${8*num}px`,}
    },
    l: (num) => {
        return { paddingLeft: `${8*num}px`,}
    },
    r: (num) => {
        return { paddingRight: `${8*num}px`,}
    }
}

export const rowTall = {
    padding:'6vw 2vw',
}

export const rowTaller = {
    padding:'10vw 2vw',
}

export const rowSkinny = {
    padding:'2vw 12.5vw',
}

