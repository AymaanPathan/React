/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout.jsx";
import LoginForm from "../Components/Login_components.jsx";
import RegisterForm from "../Components/Register_components.jsx";
import Post from "../Components/Posts/Post.jsx";
import { UserContextProvider } from "../UserContext.jsx";
import CreatePost from "../Components/Posts/CreatePost.jsx";
import SinglePost from "../Components/Posts/SinglePost.jsx";
import EditPost from "../Components/Posts/EditPost.jsx";

const Router = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<Post />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Router />);
