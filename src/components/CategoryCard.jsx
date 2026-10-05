import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function CategoryCard({category}){
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <span className="category-badge" style={{background: category.color}}></span>
          <h6 className="mb-0 ms-2">{category.name}</h6>
        </div>
        <Card.Text className="text-muted small">{category.description}</Card.Text>
        <div className="mt-3">
          <Button size="sm" variant="outline-primary">Explore</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
