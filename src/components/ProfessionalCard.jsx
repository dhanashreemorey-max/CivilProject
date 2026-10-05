import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ProfessionalCard({p}){
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <img src={p.logo} alt="logo" style={{width:56,height:56,objectFit:'cover',borderRadius:8}} />
          <div className="ms-3 flex-grow-1">
            <h6 className="mb-0">{p.name} <span className="float-end">{p.rating} ⭐</span></h6>
            <div className="small text-muted">{p.category} • {p.location}</div>
            {p.phone && (
              <div className="small mt-1">📞 <a href={`tel:${p.phone}`}>{p.phone}</a></div>
            )}
          </div>
        </div>
        <p className="small text-truncate">{p.services.join(' • ')}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Button size="sm" variant="outline-success" href={`tel:${p.phone}`}>📞 Call</Button>{' '}
            <Button size="sm" variant="outline-success" href={`https://wa.me/${(p.phone||'').replace(/\D/g,'')}`} target="_blank" rel="noreferrer">🟢 WhatsApp</Button>{' '}
            <Button size="sm" variant="outline-secondary">💬 Chat</Button>
          </div>
          <Link to={`/professional/${p.id}`} className="btn btn-primary btn-sm">View Profile</Link>
        </div>
      </Card.Body>
    </Card>
  )
}
