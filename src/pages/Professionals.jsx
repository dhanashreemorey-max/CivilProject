import React, { useMemo, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import professionals from '../data/professionals'
import ProfessionalCard from '../components/ProfessionalCard'

export default function Professionals(){
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')

  const filteredProfessionals = useMemo(() => {
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
    <Container className="py-4">
      <h3>Explore Professionals</h3>
      <Form className="d-flex flex-column flex-md-row gap-2 mb-4">
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search professional, service or category"
        />
        <Form.Control
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          style={{ maxWidth: 220 }}
        />
        <Button type="button" variant="primary">Find</Button>
      </Form>

      <Row className="g-3 mt-3">
        {filteredProfessionals.map(p=> (
          <Col key={p.id} md={6} lg={4}><ProfessionalCard p={p} /></Col>
        ))}
      </Row>
    </Container>
  )
}
