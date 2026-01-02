import React from 'react'
import "./Footer.css"


export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} SR Craft • Handcrafted with Love
    </footer>
  );
}
