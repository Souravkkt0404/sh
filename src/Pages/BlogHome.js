import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BlogHome = ({ posts }) => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Blogs</h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center">
          {posts.map((post) => (
            <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <div className="blog-card-image">
                    <img src={post.image} alt="Blog Thumbnail" />
                  </div>
                  <Card.Title>{post.title1}</Card.Title>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogHome;
