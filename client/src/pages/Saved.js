import React, { Component } from 'react';
import Panel from '../../src/components/Panel';
import {DeleteBtn} from "../../src/components/Buttons/DeleteBtn";
import API from "../../src/utils/API";

class Saved extends Component {
  state = {
    saved: []
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    API.getSavedArticles()
      .then(res => this.setState({ saved: res.data }))
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => {
        this.setState({
          saved: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="bg-light container rounded">
        <Panel title="Saved Articles">
        <hr className="mb-3 mx-4" />
          <div>
          {this.state.saved.map(article => (
            <div 
            className="shadow-sm p-1 mb-1 bg-white rounded"
            key={article._id}>
              <a href={article.url}>{article.title}</a>
              <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
            </div>
          ))}
          </div>
        </Panel>
      </div>
    );
  }
}

export default Saved;