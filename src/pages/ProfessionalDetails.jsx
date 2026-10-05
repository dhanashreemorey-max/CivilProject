import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import professionals from '../data/professionals'

export default function ProfessionalDetails(){
  const { id } = useParams()
  const p = professionals.find(x=>x.id===id) || professionals[0]
  return (
    <Container className="py-4">
      <Row>
        <Col md={8}>
          <h3>{p.name} <Badge bg="success">Verified</Badge></h3>
          <p className="text-muted">{p.category} • {p.location}</p>
          <p>{p.services.join(', ')}</p>
        </Col>
        <Col md={4} className="text-md-end">
          <div className="mb-2">⭐ {p.rating} • {p.reviewCount} Reviews</div>
          <div className="mb-2">📞 <a href={`tel:${p.phone}`}>{p.phone}</a></div>
          <div className="mb-2">🟢 <a href={`https://wa.me/${(p.phone||'').replace(/\D/g,'')}`} target="_blank" rel="noreferrer">Message on WhatsApp</a></div>
          <Button variant="primary" className="me-2">💬 Chat</Button>
          <Button variant="outline-primary">⭐ Write Review</Button>
        </Col>
      </Row>
    </Container>
  )
}
