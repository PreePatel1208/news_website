import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  article = [{
    "title": "China's CATL enacts 'closed loop management' at factory to fight COVID - Reuters",
    "description": "Chinese battery giant Contemporary Amperex Technology <a href=\"https://www.reuters.com/companies/300750.SZ\" target=\"_blank\">(300750.SZ)</a> has implemented a so-called \"closed-loop management\" system at its main factory to keep production going as the country…",
    "url": "https://www.reuters.com/world/china/chinas-catl-enacts-closed-loop-management-factory-fight-covid-2022-04-11/",
    "urlToImage": "https://www.reuters.com/resizer/GwMnl73mLCxlqzzgiDOpaux3vBg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QM2R5KYN7VLXZBXY5LU4AB4DYU.jpg",
  }
  ];
  constructor(props) {
    super();
    this.state = {
      article: this.article,
      page:1,
      loading:false
    }
  }
  async componentDidMount() {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2ca1ab43ed234cefb7447e3e479886c5&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);
    
    // let data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-03-11&sortBy=publishedAt&category=${this.props.category}&apiKey=2ca1ab43ed234cefb7447e3e479886c5&page=1&pageSize=${this.props.pageSize}");
    let parsedData = await data.json()

    this.setState({
      article: parsedData.articles,
      loading:false
    });
    console.log(this.state.article);

  }
  handlePrevClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2ca1ab43ed234cefb7447e3e479886c5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);
   
    let parsedData = await data.json()

    this.setState({
      article: parsedData.articles,
      page:this.state.page -1,
      loading:false
    });
    console.log(this.state.page);
  }
  handleNextClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2ca1ab43ed234cefb7447e3e479886c5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);

    let parsedData = await data.json()
   
    this.setState({
      article: parsedData.articles,
      page:this.state.page +1, 
      loading:false
    });
    console.log(this.state.page);
  }
  render() {
    return (
      <div className='container'>
        <div className="newsitems">
          {/* {
    this.article.map(function (ele) {
    console.log(ele)
    })
  } */}
  {this.state.loading && <Spinner />}
          { !this.state.loading && this.state.article.map((element) => {
            return <div className="news" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} imageUrlGoTo={element.url} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
            <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<1}>Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
          </div>
      </div>
    );
  }
}
