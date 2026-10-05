import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import categories from '../data/categories'
import CategoryCard from '../components/CategoryCard'
import professionals from '../data/professionals'

const slideImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80'
]

export default function Home(){
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('Pune')

  const featuredProfessionals = useMemo(() => {
    return professionals.filter((person) => {
      const matchesSearch = !search ||
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.category.toLowerCase().includes(search.toLowerCase()) ||
        person.services.some((service) => service.toLowerCase().includes(search.toLowerCase()))

      const matchesLocation = !location || person.location.toLowerCase().includes(location.toLowerCase())

      return matchesSearch && matchesLocation
    })
  }, [search, location])

  return (
    <div className="hero">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={7}>
            <div className="brand-line d-flex align-items-center mb-3">
              <div className="brand-logo">C</div>
              <span className="brand-text">Civillink</span>
            </div>
            <h1 className="main-title">Find. Connect. Build.</h1>
            <p className="lead">Connect with trusted civil engineering, construction and home-service professionals.</p>
            <Form className="d-flex flex-column flex-md-row gap-2">
              <Form.Control
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search contractors, architects, electricians..."
              />
              <Form.Control
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                style={{ maxWidth: 220 }}
              />
              <Button type="button" onClick={() => window.location.href = '/explore'}>Search</Button>
            </Form>
            <div className="mt-3 d-flex gap-2 flex-wrap">
              <Link to="/explore" className="btn btn-outline-primary">Explore Nearby</Link>
            </div>
          </Col>

          <Col md={5}>
            <div className="hero-slider">
              {slideImages.map((image, index) => (
                <img key={index} src={image} alt="Civil construction" className="slider-image" />
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Card className="p-3">
              <Card.Body>
                <h5>Top Categories</h5>
                <Row xs={2} md={2} lg={2} className="g-2 mt-2">
                  {categories.slice(0,8).map(cat=> (
                    <Col key={cat.id}><CategoryCard category={cat} /></Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
