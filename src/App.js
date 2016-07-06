import React from 'react';
import NewsFeed from './NewsFeed'

const feedUrl = "http://thenextweb.com/feed/";

class App extends React.Component {
    render() {
        return (
          <NewsFeed url={feedUrl} />
        );
    }
}

export default App;
