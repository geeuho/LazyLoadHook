import React from 'react'

class Image extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.url} alt ={this.props.alt} />
            </div>
        )
    }
}

export default Image