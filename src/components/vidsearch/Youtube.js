import React, {Component} from 'react';

const API = 'AIzaSyAjb3HIVcI57Cw_mIucJ5jcHmXIBX5fqac'
const result = 20;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAjb3HIVcI57Cw_mIucJ5jcHmXIBX5fqac&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Youtube;