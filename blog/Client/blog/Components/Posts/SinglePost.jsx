import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";

function SinglePost() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPostInfo(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]); // Specify the dependency array

  console.log(id);

  return (
    <div className="singlePost-div">
      {postInfo && (
        <div>
          <p className="created-date">
            Created At: {new Date(postInfo.createdAt).toLocaleString()}
          </p>
          <p className="author-text">By: @{postInfo.author.username}</p>
          {userInfo.id === postInfo.author._id && (
            <div className="edit-btn-div">
              <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  dataSlot="icon"
                  className="edit-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
              </Link>
            </div>
          )}
          <h2 className="singlepost-title">{postInfo.title}</h2>
          <div className="post-img-div">
            <img
              className="singlePost-img"
              src={`http://localhost:3000/${postInfo.cover}`}
              alt=""
            />
          </div>
          <h2 className="desc-info">About This Post:👇</h2>

          <div
            className="content-text"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          />
        </div>
      )}
    </div>
  );
}

export default SinglePost;