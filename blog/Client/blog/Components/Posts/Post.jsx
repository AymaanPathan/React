import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((res) => res.json())
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <main>
      {posts.map((post) => (
        <div className="posts-div" key={post._id}>
          <div className="post-img-div">
            <Link to={`/post/${post._id}`}>
              <img
                className="post-img"
                src={"http://localhost:3000/" + post.cover}
                alt=""
              />
            </Link>
          </div>
          <div className="content">
            <span className="author">Author: {post.author.username}</span>
            <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>

            <h2 className="post-title">{post.title}</h2>
            <h4 className="post-summary">{post.summary}</h4>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Post;
