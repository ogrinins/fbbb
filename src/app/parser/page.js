// /src/app/parser/page.js
import React from 'react';
import '../../styles/globals.css'; // Імпорт глобальних стилів

const generateRandomPost = (id) => ({
  id,
  avatar: `https://picsum.photos/seed/${id}/40`, // Рандомні аватари
  groupName: `Group Name ${id}`,
  content: `This is a random post content for post number ${id}.<br>
            Add any content you like here.<br>
            <a href="tel:+1234567890">Contact Us</a>`,
});

const posts = Array.from({ length: 10 }, (_, index) => generateRandomPost(index + 1));

const Parser = () => {
  return (
    <div className="parser-container">

      <div className="post-container">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="post-header">
              <img src={post.avatar} alt="Group Avatar" />
              <div className="group-name">{post.groupName}</div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Parser;
