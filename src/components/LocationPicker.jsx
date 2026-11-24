import React, { useState } from 'react'
import { Button, Modal, Form, Alert } from 'react-bootstrap'

export default function LocationPicker({ location, setLocation }) {
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('')

  const mapLocation = location || 'Pune, Maharashtra'
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&z=12&output=embed`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`

  const useCurrentLocation = () => {
    setStatus('')

    if (!navigator.geolocation) {
      setStatus('Location services are not supported by this browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const coordinates = `${coords.latitude.toFixed(6)}, ${coords.longitude.toFixed(6)}`
        setLocation(coordinates)
        setStatus('Your current location was selected.')
      },
      () => setStatus('We could not access your location. Please allow location permission and try again.')
    )
  }

  return (
    <>
      <Button
        type="button"
        variant="outline-primary"
        className="location-picker-button"
        onClick={() => setShow(true)}
        title="Choose location on Google Maps"
        aria-label="Choose location on Google Maps"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
          />
        </svg>
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-2 mb-3">
            <Form.Control
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Search a city, area or address"
            />
            <Button type="button" variant="outline-primary" onClick={useCurrentLocation}>
              Current location
            </Button>
          </div>

          {status && <Alert variant="light" className="py-2">{status}</Alert>}

          <div className="google-map-frame">
            <iframe
              title="Google Maps location picker"
              src={mapUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            variant="outline-primary"
            onClick={() => window.open(googleMapsUrl, '_blank', 'noopener,noreferrer')}
          >
            Open in Google Maps
          </Button>
          <Button type="button" variant="primary" onClick={() => setShow(false)}>
            Use this location
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
