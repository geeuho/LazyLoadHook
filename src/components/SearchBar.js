import React from 'react'

class SearchBar extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.input)
    }
    render(){
        return (
            <div class = "ui segment">
                <form onSubmit = {this.onSubmit} class = "ui form"> 
                    <div class = "field">
                        <label>Search for Images </label>
                        <input type = "text" onClick = {() => console.log(this.state.input)} value = {this.state.input} onChange = {(e) => this.setState({input: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar