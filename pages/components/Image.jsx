import {Image as NextImage} from 'next/image'

const Image = (image) => {
    return (
        <NextImage src={image}>
        </NextImage>
    )
}

export default Image