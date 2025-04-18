import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Pages.css"; // Assuming Pages.css is in the same folder
import Menu from '../Components/Menu'; // Make sure 'Menu' component is correctly named
import img1 from '../img/i6.webp';
import img2 from '../img/pc1.jpg';
import edit from '../img/pen.png';
import del from '../img/bin.png';

const Single = () => {
  const { id } = useParams(); // Get the post ID from the URL

  return (
    <div className="single">
      <div className="content">
        <img src={img1} alt="Post Image" />
        
        <div className="user">
          <img src={img2} alt="User Profile" />
          
          <div className="info">
            <span>Adithyan</span>
            <p>Posted 1 day ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={edit} alt="Edit Post" />
            </Link>
            <img src={del} alt="Delete Post" />
          </div>
        </div>

        <h1>The Rise of Minimalist Web Design in 2025</h1>

        <p>
          In 2025, minimalist web design has become more than just a trend—it's a strategic approach embraced by developers and designers to enhance user experience. With users demanding faster load times and cleaner interfaces, websites are now focusing on simplicity, intuitive navigation, and purposeful use of space. This design philosophy not only reduces cognitive load but also helps users find information quickly, boosting engagement and conversion rates.
        </p>

        <p>
          Minimalism also aligns perfectly with mobile-first development, as it emphasizes essential content and responsive layouts. Elements like muted color palettes, generous white space, and concise typography make interfaces feel calm and modern. As companies aim to create memorable digital experiences without overwhelming their users, minimalist web design continues to dominate as a go-to aesthetic and functional choice.
        </p>
      </div>

      <Menu /> {/* Display the related posts or other content */}
    </div>
  );
};

export default Single;
