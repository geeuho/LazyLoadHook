import React ,{useState, useEffect} from 'react'


class Image extends React.Component {
    constructor(props){
        super(props)
        this.imageRef = React.createRef()
    }
    componentDidMount(){
        const selectedImage = this.imageRef.current
        const options = {}
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                console.log(entry)
            })
        }, options)
        observer.observe(selectedImage)
    }
    
    render(){
        return (
            <div>
                <img ref ={this.imageRef} src={this.props.url} alt={this.props.alt} />
            </div>
        )

    }
} 

export default Image