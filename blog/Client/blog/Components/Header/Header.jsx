import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";

function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          credentials: "include",
        });

        if (response.ok) {
          const userData = await response.json();
          setUserInfo(userData.info); // Access 'info' property in response
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [setUserInfo]); // Add setUserInfo to dependency array

  function logout() {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div className="nav-div">
      <Link to="/">
        <h2>Blogs</h2>
      </Link>
      <div className="navs">
        {username && (
          <>
            <div className="user-info">
              <span className="username">{username}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  dataSlot="icon"
                  className="headUser-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </div>
            <Link to="/create" className="auth-links">
              Create Post
            </Link>
            <Link onClick={logout} className="auth-links">
              Logout
            </Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="auth-links">
              Login
            </Link>
            <Link to="/register" className="auth-links">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
