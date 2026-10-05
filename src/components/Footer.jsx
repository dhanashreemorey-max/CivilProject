import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-light py-4 mt-4">
      <div className="container text-center text-muted">© {new Date().getFullYear()} Civillink — Find. Connect. Build.</div>
    </footer>
  )
}
