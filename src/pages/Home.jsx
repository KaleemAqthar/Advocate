import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import CaseCard from "../components/CaseCard";
import TeamCard from "../components/TeamCard";

import { services } from "../data/services";
import { cases } from "../data/cases";
import { team } from "../data/team";


function Home() {
  return (
    <>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-label">
              Advocates & Legal Consultants
            </div>


            <h1>
              Experienced & Trusted
              <br />
              <span>Legal Representation</span>
            </h1>


            <p className="hero-description">
              Dedicated to protecting your rights and interests
              through thoughtful legal advice, professional
              representation and clear communication.
            </p>


            <div className="hero-actions">

              <Button>
                Schedule a Consultation
              </Button>

              <Button
                to="/services"
                outline
              >
                Explore Services
              </Button>

            </div>

          </div>

        </div>


        {/* HERO QUICK LINKS */}

        <div className="hero-bottom">

          <div className="hero-bottom-grid">


            <Link
              to="/services"
              className="hero-feature"
            >

              <div className="hero-feature-icon">
                <i className="bi bi-hammer"></i>
              </div>

              <h3>
                Our Services
              </h3>

              <p>
                Expert legal solutions for your
                individual and business needs.
              </p>

            </Link>


            <Link
              to="/about"
              className="hero-feature"
            >

              <div className="hero-feature-icon">
                <i className="bi bi-bank"></i>
              </div>

              <h3>
                About Us
              </h3>

              <p>
                Learn more about our practice,
                values and professional approach.
              </p>

            </Link>


            <Link
              to="/case-results"
              className="hero-feature"
            >

              <div className="hero-feature-icon">
                <i className="bi bi-briefcase"></i>
              </div>

              <h3>
                Case Results
              </h3>

              <p>
                Selected matters and legal
                experience, presented responsibly.
              </p>

            </Link>


            <Link
              to="/contact"
              className="hero-feature"
            >

              <div className="hero-feature-icon">
                <i className="bi bi-envelope"></i>
              </div>

              <h3>
                Contact Us
              </h3>

              <p>
                Get in touch with our legal team
                to request a consultation.
              </p>

            </Link>


          </div>

        </div>

      </section>


      {/* ==================================================
          ABOUT
      ================================================== */}

      <section className="section section-dark">

        <div className="container">

          <div className="about-grid">


            <div className="about-images">

              <img
                src="/images/about/office.jpg"
                alt="Law office"
                className="about-main-image"
              />


              <img
                src="/images/about/advocate.jpg"
                alt="Advocate"
                className="about-secondary-image"
              />


              <div className="about-number">

                <strong>
                  15+
                </strong>

                <span>
                  Years Practice
                </span>

              </div>

            </div>


            <div className="about-content">

              <SectionTitle
                label="About Our Practice"
                title="Professional Legal Counsel Built on Trust"
                description="We provide considered legal advice and representation with an emphasis on integrity, confidentiality and clear communication."
              />


              <p>
                Every legal matter is different. Our approach
                begins by understanding the circumstances,
                identifying the relevant legal issues and
                explaining the available options clearly.
              </p>


              <ul className="check-list">

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Client-focused legal consultation
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Careful legal analysis
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Professional representation
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Confidentiality and ethical practice
                </li>

              </ul>


              <Button to="/about">
                Discover Our Practice
              </Button>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SERVICES
      ================================================== */}

      <section className="section services-section">

        <div className="container">

          <SectionTitle
            center
            label="What We Do"
            title="Our Legal Services"
            description="Our practice provides legal consultation and representation across selected areas of law."
          />


          <div className="services-grid">

            {services.slice(0, 4).map((service) => (

              <ServiceCard
                key={service.id}
                service={service}
              />

            ))}

          </div>


          <div
            style={{
              textAlign: "center",
              marginTop: "40px"
            }}
          >

            <Button to="/services">
              View All Services
            </Button>

          </div>

        </div>

      </section>


      {/* ==================================================
          CONSULTATION
      ================================================== */}

      <section className="consultation-strip">

        <div className="container">

          <div className="consultation-inner">

            <div>

              <span className="section-label">
                Legal Assistance
              </span>

              <h2>
                Have a Legal Matter?
              </h2>

              <p>
                Speak with our office to request a consultation.
              </p>

            </div>


            <Button>
              Schedule Consultation
            </Button>

          </div>

        </div>

      </section>


      {/* ==================================================
          CASE RESULTS
      ================================================== */}

      <section className="section section-dark">

        <div className="container">

          <SectionTitle
            center
            label="Selected Matters"
            title="Legal Experience"
            description="A selection of representative matters can be presented here. Client confidentiality and applicable professional obligations should always be respected."
          />


          <div className="cases-grid">

            {cases.map((caseItem) => (

              <CaseCard
                key={caseItem.id}
                caseItem={caseItem}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          TEAM
      ================================================== */}

      <section className="section section-dark">

        <div className="container">

          <SectionTitle
            center
            label="Our Professionals"
            title="Meet Our Legal Team"
            description="Introduce the advocates and legal professionals who form part of the practice."
          />


          <div className="team-grid">

            {team.map((member) => (

              <TeamCard
                key={member.id}
                member={member}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section
        className="section"
        style={{
          background: "#0d0e10",
          textAlign: "center"
        }}
      >

        <div className="container">

          <span className="section-label">
            Contact Our Office
          </span>

          <h2
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "50px"
            }}
          >
            Protect Your Rights.
            <br />
            Understand Your Options.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "18px auto 30px",
              color: "#888",
              fontSize: "13px"
            }}
          >
            Request a consultation to discuss your legal
            matter and understand the appropriate next steps.
          </p>

          <Button>
            Contact Our Office
          </Button>

        </div>

      </section>

    </>
  );
}

export default Home;