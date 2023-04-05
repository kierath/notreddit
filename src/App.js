import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './features/Header/header';
import Article from "./features/Article/Article";


const App = () => {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('gaming');

  const [comments, setComments] = useState([]);
  const [fullArticle, setFullArticle] = useState({})

  useEffect(() =>
  {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then(
      res => {
        if(res.status !== 200)
        {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if(data != null)
          {
            setArticles(data.data.children);
          }
        })
      }
    )
  }, [subreddit]);
  

  return (
    <div className="App">
      <Header/>
      <div className="articles">
        {(articles != null) ? articles.map((article, index) => 
        <Article 
        key={index} 
        article={article.data} 
        /> 
        ) : ''}   
       </div>
    </div>
  );
}

export default App;



