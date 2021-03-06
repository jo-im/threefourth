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

  onPlay(event) {
    var vocals = document.getElementById('vocals');
    var karaoke = document.getElementById('karaoke');

    if (vocals) {
      vocals.play(); karaoke.play();
    } else {
      karaoke.play();
    }
  }

  onPause(event) {
    var vocals = document.getElementById('vocals');
    var karaoke = document.getElementById('karaoke');

    if (vocals) {
      vocals.pause(); karaoke.pause();
    } else {
      karaoke.pause();
    }
  }

  onStop(event) {
    console.log('stopping!!!!');
    var vocals = document.getElementById('vocals');
    var karaoke = document.getElementById('karaoke');
    
    if (vocals) {
      vocals.pause(); karaoke.pause();
      vocals.currentTime = 0;
      karaoke.currentTime = 0;
    } else {
      karaoke.pause();
      karaoke.currentTime = 0;
    }
  }

  onKaraokeVolumeChange(event) {
    var karaoke = document.getElementById('karaoke');
    karaoke.volume = event.target.value;
  }

  onVocalsVolumeChange(event) {
    console.log('changing volume on vocals!!!');
    var vocals = document.getElementById('vocals');
    if (vocals) {
      vocals.volume = event.target.value;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col l2">
          <PlayList songs={this.state.songs} onChooseSongClick={this.onChooseSongClick.bind(this)} selectedSong={this.state.selectedSong}/>
        </div>
        <div className="col l10" style={{background: 'url(' + this.state.selectedSong.background + ') center / cover', height: '720px' }} >
          <Main selectedSong={this.state.selectedSong} score={this.state.score} userInput={this.state.userInput} onPlay={this.onPlay.bind(this)} onPause={this.onPause.bind(this)} onStop={this.onStop.bind(this)} onKaraokeVolumeChange={this.onKaraokeVolumeChange.bind(this)} onVocalsVolumeChange={this.onVocalsVolumeChange}/>
        </div>
      </div>
    );
  }
}

window.App = App;

// 'url(' + this.state.selectedSong.background + ') center / cover'