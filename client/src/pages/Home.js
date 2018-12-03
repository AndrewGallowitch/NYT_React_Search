import React, { Component } from 'react';
import Panel from '../../src/components/Panel';
import API from '../../src/utils/API';
import {SaveBtn} from "../../src/components/Buttons/SaveBtn.js";
import "../components/header.css";

class Home extends Component {
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    var name = event.target.name
    var value = event.target.value
    this.setState({
      [name]: value
    });
  }
  handleSearch = () => {
    API.getArticles({
      q: this.state.q,
      begin_date: this.formatDate(this.state.start_year),
      end_date: this.formatDate(this.state.end_year)
    }).then((res) => {
      this.setState({
        articles: res.data
      });
    })
    
  }

  formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  saveArticle = article => {
    API.saveArticle({
      title: article.headline.main,
      url: article.web_url, 
      _id: article._id,
      date: article.pub_date
    })
    .then(alert('Article saved!'))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
      <div className="bg-light container rounded">
        <Panel title="Search Articles">
        <hr className="mb-3 mx-4" /> 
          <div className="form-group">
            <h4 className="text-dark">Topic</h4>
            <input 
            type="text"
              className="form-control shadow-sm p-3 mb-2 bg-white rounded" 
              value={this.state.q}
              name="q"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <h4 className="text-dark">Start Date</h4>
            <input 
              className="form-control shadow-sm p-3 mb-2 bg-white rounded" 
              value={this.state.start_year}
              name="start_year"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <h4 className="text-dark">End Date</h4>
            <input 
              className="form-control shadow-sm p-3 mb-2 bg-white rounded" 
              value={this.state.end_year}
              name="end_year"
              onChange={this.handleChange}
            />
          </div>
          <div className="searchBtn text-center">
            <button 
            className="btn btn-dark mb-3"
            onClick={this.handleSearch}
            >Search</button>
          </div>
        </Panel>
        </div>
        <hr className="mb-3 mx-4" />
        <div className="bg-light container rounded">
        <Panel title={"Results"}>
          <div className="ArticleResults">
          <hr className="mb-3 mx-4" />
            {this.state.articles.map(article => (
              <div 
              className="shadow-sm p-1 mb-1 bg-white rounded"
              key={article._id}>
                <a href={article.web_url} target="_blank">{article.headline.main}</a>
                <SaveBtn onClick={() => this.saveArticle(article)} />
              </div>
            ))}
          </div>
        </Panel>
        </div>
      </div>
    );
  }
}

export default Home;