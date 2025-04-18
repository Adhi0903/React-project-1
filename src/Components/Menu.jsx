import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Pages.css";  // Corrected path
import img1 from "../img/i6.webp";
import img2 from "../img/i7.jpeg";
import img3 from "../img/i8.webp";
import img4 from "../img/i9.jpeg";

const Menu = () => {
  const posts = [
    { id: 1, title: "Image 1", desc: "Lorem ipsum...", img: img1 },
    { id: 2, title: "Image 2", desc: "Lorem ipsum...", img: img2 },
    { id: 3, title: "Image 3", desc: "Lorem ipsum...", img: img3 },
    { id: 4, title: "Image 4", desc: "Lorem ipsum...", img: img4 },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
