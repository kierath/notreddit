/*import React, {useState, useEffect} from 'react';

const Comment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [comment, setComment] = useState('default');
    const [subreddit, setSubreddit] = useState('gaming');

  useEffect(() =>
  {
    fetch("https://www.reddit.com/r/" + subreddit + "/comments.json")
    .then((res) => res.json())
    .then(comment => {
            const{data} = comment;
            console.log(comment)
            setComment(data.children[0].data.body);
            console.log(data.children[0].data.body);
        }
    )
    
  }, []);
  
  return (
    <div className = "comments">
        </div>
  )
}
  
  export default Comment;
*/