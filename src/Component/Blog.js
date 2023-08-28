import React from 'react'
import Post from "../Component/Post";
import "../Style/Blog.css";
import Img from "../img/divorce.jpg"
import Img1 from "../img/gst.jpg"
import Img2 from "../img/carousel-2.jpg";

const Blog = () => {

  return (<>
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Our Blogs</h2>
          </div>
        
        </div>
      </div>
    </div>
    <div className="containers">

      <div className="card " margen-right="20px">
        <div className="card-header">
          <img src={Img} alt="" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Title</span>
          <h4>Sub Title</h4>
          <p>
            Divorce Mediation
          </p>
          <button style={{
           
            fontSize: "16px",
            border: "3px solid black",
            fontWeight: "400",
            borderRadius: "5px",
           
          }}>
            <a href='https://docs.google.com/document/d/1fTKyJLeLGS4AyZHvH-KUehKhIHd-wnef/edit?usp=drive_link&ouid=108722616633188847032&rtpof=true&sd=true' 
            style={{ color: "rgb(170, 145, 102)"}}>Read More</a>
          </button>

        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={Img1} alt="" />
        </div>
        <div className="card-body">
          <span className="tag tag-purple">Title</span>
          <h4>Sub Title</h4>
          <p>
            content
          </p>
           <button style={{
           
            fontSize: "16px",
            border: "3px solid black",
            fontWeight: "400",
            borderRadius: "5px",
           
          }}>
            <a href='https://docs.google.com/document/d/1fTKyJLeLGS4AyZHvH-KUehKhIHd-wnef/edit?usp=drive_link&ouid=108722616633188847032&rtpof=true&sd=true' 
            style={{ color: "rgb(170, 145, 102)"}}>Read More</a>
          </button>
         
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={Img2} alt="" />
        </div>
        <div className="card-body">
          <span className="tag tag-pink">Title</span>
          <h4>Sub Title</h4>
          <p>
            content
          </p>
           <button style={{
           
            fontSize: "16px",
            border: "3px solid black",
            fontWeight: "400",
            borderRadius: "5px",
           
          }}>
            <a href='https://docs.google.com/document/d/1fTKyJLeLGS4AyZHvH-KUehKhIHd-wnef/edit?usp=drive_link&ouid=108722616633188847032&rtpof=true&sd=true' 
            style={{ color: "rgb(170, 145, 102)"}}>Read More</a>
          </button>
        
        </div>
      </div>
    </div>
  </>




  )
}

export default Blog
