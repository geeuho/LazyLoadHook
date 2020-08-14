import React from 'react';
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
import SearchBar from './SearchBar'
import '../App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  onSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    })
    this.setState({ images: response.data.results })
    console.log(this.state.images)
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />

        <ImageList images={this.state.images} />


      </div>
    );
  }
}

export default App;
