import React from 'react'
import Image from './Image'

const ImageList = (props) =>{
        return(
            <div className = "image-list">
                <h1 className = "ui header centered"> Image Display</h1>
                {props.images.map(image => 
                    <Image alt = {image.description} key = {image.id} url={image.urls.regular}></Image>
                )}
            </div>
        )
}

export default ImageList