import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import img1 from '../img/i6.webp';
import img2 from '../img/i7.jpeg';
import img3 from '../img/i8.webp';
import img4 from '../img/i9.jpeg';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Image 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: img1,
    },
    {
      id: 2,
      title: "Image 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: img2,
    },
    {
      id: 3,
      title: "Image 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: img3,
    },
    {
      id: 4,
      title: "Image 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: img4,
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <h3>{post.desc}</h3>
              <Link to={`/post/${post.id}`} className="home-button">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
