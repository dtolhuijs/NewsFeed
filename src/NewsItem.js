import React from 'react'

class NewsItem extends React.Component {
  render () {
    console.log(this.props);

    return (
      <div>
        <div>
          <img src={this.props.image} />
        </div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>
          <a href={this.props.link}>Read Article</a>
        </p>
      </div>
    );
  }
}

export default NewsItem;
