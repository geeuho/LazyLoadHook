import React, { useState, useEffect } from 'react'
import defaultImage from '../../public/default.jpg'

let Image = (props) => {
    const [ref] = useState(React.createRef())
    useEffect(() => {

        console.log(props)
        const selectedImage = ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }
        function imageRender(image) {
            image.src = props.url
            image.classList.add('appear')
        }
        const observer = new IntersectionObserver(function (entries, observer) {
            let entry = entries[0]
            if (!entry.isIntersecting) {
                return
            } else {
                imageRender(entry.target)
                observer.unobserve(entry.target)
            }
            console.log(entry.isIntersecting, props)
        }, options)
        observer.observe(selectedImage)
    }, [])

    return (
        <div>
            <div class='ui segment'>

                <img class='ui centered image transition' src={defaultImage} ref={ref} alt={defaultImage} />
                <h3> Article Title </h3>
                <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
            </div>
        </div>
    )
}

export default Image