import React, {useState, useEffect} from 'react'

let Image = (props) => {
    const [ref, setRef] = useState(React.createRef())
    const [spans, setSpans] = useState(0)
    useEffect(() => {

        console.log(props)
        const selectedImage = ref.current
        const options = {
            root: document.querySelector('root'),
            rootMargin:'0px 0px 400px 0px',
            threshold: 0
        }
        function imageRender(image) {
            image.src = props.url
        }
        const observer = new IntersectionObserver(function (entries, observer) {
            let entry = entries[0]
            if(!entry.isIntersecting){
                return
            } else {
                imageRender(entry.target)
                observer.unobserve(entry.target)
            }
            console.log(entry)
        }, options)
        observer.observe(selectedImage)
    }, [])

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img style= {{height: `500px`}} id = {props.key} ref ={ref} alt={props.alt} />
        </div>
    )
} 

export default Image