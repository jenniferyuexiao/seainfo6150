import React from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';

const ArticleTable = ({ articles }) => (

<table border="1" cellSpacing="0" cellPadding="0">
 <caption><h1>CheckList for Articles</h1></caption>
  <thead>
    <tr>
      <th>CheckBox</th>
      <th>Status</th>
      <th>Author</th>
      <th>Date</th>
      <th>ShortText</th>
    </tr>
  </thead>
  <tbody>
  {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
      return <ArticleTableRow
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        author={article.author}
        shortText={article.shortText}
      />
    })
  }
  </tbody>
  </table>

);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleTable;
