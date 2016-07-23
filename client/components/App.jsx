class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: window.songs,
      selectedSong: window.songs[0],
      score: 100,
      userInput: false
    };
  }

  onChooseSongClick(event) {
    var title = event.target.textContent;
    var that = this;  
    this.state.songs.forEach(function(song, index) {
      if (song.title === title) {
        that.setState({
          selectedSong: that.state.songs[index]
        });
      }

      if (title === 'Your Voice') {
        that.setState({
          userInput: true
        });
      } else {
        that.setState({
          userInput: false
        });
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s4">
          <PlayList songs={this.state.songs} onChooseSongClick={this.onChooseSongClick.bind(this)} selectedSong={this.state.selectedSong}/>
        </div>
        <div className="col s8 offset-s4">
          <Main selectedSong={this.state.selectedSong} score={this.state.score} userInput={this.state.userInput}/>
        </div>
      </div>
    );
  }
}

window.App = App;