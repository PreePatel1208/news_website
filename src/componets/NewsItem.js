import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
      description: props.description,
      imageUrl: props.imageUrl,
      imageUrlGoTo: props.imageUrlGoTo
    }
  }
  render() {
    let { title, description, imageUrl, imageUrlGoTo } = this.state;
    // console.log(title);
    return (
      <div className="card" style={{
        width: '18rem',
        display: 'flex'
               }}>
        <img src={ imageUrl } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a rel="noreferrer" href={imageUrlGoTo} target="_blank" className="btn btn-sm btn-dark">Read More</a>

        </div>
      </div>
    )
  }
}
