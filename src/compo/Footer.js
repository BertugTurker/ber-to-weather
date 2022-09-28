import React from 'react'

function Footer() {
  return (
    <div className='top'>
    <p>Thanks For Visiting</p>
    <div className='flex gap foot'>
      <a href="https://github.com/BertugTurker" target="_blank" rel="noopener noreferrer" title="Link to author's GitHub profile">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="www.linkedin.com/in/bertug-turker" target="_blank" rel="noopener noreferrer" title="Link to author's LinkdIn profile">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/BertugTurker" target="_blank" rel="noopener noreferrer" title="Link to author's Twitter profile">
        <i className="fa-brands fa-twitter fa-bounce"></i>
      </a>
    </div>
    <p>©2022</p>
</div>
  )
}

export default Footer