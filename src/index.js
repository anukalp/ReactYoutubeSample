import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDXAr7xKdt8H2vMi2gaZf4S41_fsyRbbVE';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('Michael vazquez');
  }

  videoSearch(queryText) {
    YoutubeSearch({key: API_KEY, term : queryText}, (videos) => {
        this.setState({ videos, selectedVideo : videos[0] });
    });
  }

  render(){
    const videoSearch = _.debounce((queryText) => {this.videoSearch(queryText)}, 300);
    return <div>
      <SearchBar
         onQueryTextChange = {videoSearch}
       />
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList
       onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
       videos = {this.state.videos}
       />
    </div>;
  }
};

ReactDOM.render(<App/>, document.querySelector('.container'));
