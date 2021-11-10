import { useState } from 'react'

const CommentSection = () => {
  const [userComments, setUserComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("")

  
  function handleCommentChange(e) {
    setComment(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSubmitComment(e) {
    e.preventDefault();
    userComments.push({user: {name, comment}})
    setName("");
    setComment("")
    displayComments()
  }

  function displayComments() {
    return userComments.map(comment => {
      return (
        <div className="comment">
          <h4 className="user-name">{comment.user.name} - </h4>
          <p className="user-comment">{comment.user.comment}</p>
        </div>
    )})
  }

  return ( 
    <div className="comment-section">
      <div className="comment-container">
        <h4 className="comment-header">Comments</h4>
          <form className="comment-form" onSubmit={handleSubmitComment}>
            <input 
              type="text" 
              className="comment-name" 
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
            />
            <textarea 
              className="text-area"
              rows="5"
              cols="60"
              name="comment"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Leave a comment!"
            >
            </textarea>
            <input 
              type="submit" 
              className="post-comment"
              value="Post"
            />
          </form>
          {displayComments()}
      </div>
    </div>
   );
}
 
export default CommentSection;