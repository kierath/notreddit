import React from 'react';
import "./Article.css";
import Time from "../Time/Time";
import Comment from "../Comment/Comment";
import { useDispatch, useSelector } from 'react-redux';

function Article(props){

  let url = 'https://reddit.com';
  let imgPreview = props.article.url;
  let timePosted = Time(props.article.created_utc);


  //CHECKS IF POST HAS MEDIA EXTENSION 
  function isImage(url) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  //IF NO MEDIA THEN REMOVE SO NO THUMBNAIL APPEARS
  if(!isImage(imgPreview))
  {
    imgPreview = null;
  }

  const openComments = () => {
    console.log("pressed");
};

  return ( 
    <div className = "article-container">
      <article> 
        <a href={url + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
         <img 
         className = "postImg"
         src = {imgPreview}/> 
        </a>
        <h4> Posted by {props.article.author} {timePosted}</h4>
        <div className = "postInfo">
        <img className = "commentsLogo"
        src = "Resources/commentsimage.png"
        onClick = {openComments} ></img>
          {props.article.num_comments} 
         <img className = "scoreLogo"
         src = "Resources/scoreLogo.png">
          </img> 
          {props.article.score}
        </div>
      </article>
    </div>
  )
}
export default Article;

