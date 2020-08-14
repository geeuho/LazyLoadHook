import React from 'react'

class SearchBar extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.input)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Type something then press Enter! </label>
                        <input type="text" onClick={() => console.log(this.state.input)} value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar