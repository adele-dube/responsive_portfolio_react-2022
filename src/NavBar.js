import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Content.css";

export default function NavBar() {
  return (
    <nav class="navbar nav navbar-expand-sm bg-light sticky-top shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand nav-header ms-5" href="index1.html">
          AD
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end me-5"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a
              class="nav-link nav-links"
              aria-current="page"
              href="index1.html"
            >
              Home
            </a>
            <a class="nav-link nav-links" href="about.html">
              About
            </a>
            <a class="nav-link nav-links" href="projects.html">
              Projects
            </a>
            <a class="nav-link nav-links" href="contact.html">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
