import React, { Component } from 'react';

// Import Layout
import Layout from './layout';

// Import Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faPlus, faClock, faFont, faPause, 
  faPlay, faMehBlank, faGrinWink, faSpinner, faColumns, faFilm, 
  faTruckLoading, 
  faFrown,
  faExclamation,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { faGitlab, faPaypal, faDiscord, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faQuestion, faPlus, faClock, faFont, faPause, 
  faPlay, faMehBlank, faGrinWink, faSpinner, faColumns,
  faGitlab, faPaypal, faDiscord, faFilm, faTruckLoading, 
  faTumblrSquare, faFrown, faExclamation, faTrash);

class App extends Component {
  render() {
    return (
      <div className="App bp3-dark">
        <Layout/>
      </div>
    );
  }
}

export default App;
