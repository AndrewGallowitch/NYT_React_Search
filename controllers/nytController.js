const db = require("../models");
var axios = require("axios");

module.exports = {
  getArticles: function(req, res) {
    console.log(req.query);
    const params = Object.assign(
      { api_key: "3ace526835954f818a6959f9afab27b2" },
      req.query
    );
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params
      })
      .then(response => {
        db.Article.find()
          .then(dbArticles =>
            response.data.response.docs.filter(article =>
              dbArticles.every(
                dbArticle => dbArticle._id.toString() !== article._id
              )
            )
          )
          .then(articles => res.json(articles))
          .catch(err => res.status(422).json(err));
      });
  }
};
