import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import TeamCard from "../components/TeamCard";

import { team } from "../data/team";

function About() {
  return (
    <>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="page-hero">

        <div>
          <h1>
            About Our Practice
          </h1>

          <p>
            Home / About
          </p>
        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="section section-dark">

        <div className="container">

          <div className="about-grid">

            {/* IMAGES */}

            <div className="about-images">

              <img
                src="/images/about/courtroom.jpg"
                alt="Professional courtroom"
                className="about-main-image"
              />

              <img
                src="/images/about/advocate.jpg"
                alt="Professional advocate"
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


            {/* CONTENT */}

            <div className="about-content">

              <SectionTitle
                label="Who We Are"
                title="A Professional Legal Practice"
              />

              <p>
                Our practice is committed to providing
                professional legal services to individuals,
                families and businesses.
              </p>

              <p>
                We believe that clients should understand
                their legal position and the available
                pathways before making important decisions.
              </p>

              <p>
                Our work therefore combines legal knowledge,
                careful preparation and direct communication
                with clients.
              </p>


              {/* CHECK LIST */}

              <ul className="check-list">

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Professional legal advice
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Thorough preparation
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Clear client communication
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Confidential professional relationship
                </li>

              </ul>


              <Button to="/contact">
                Speak With Our Office
              </Button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="section services-section">

        <div className="container">

          <SectionTitle
            center
            label="Our Approach"
            title="How We Work"
            description="A straightforward approach designed to help clients understand their legal position."
          />


          <div className="services-grid">


            {/* =================================================
                UNDERSTAND
            ================================================= */}

            <div className="service-card">

              <div className="service-card-image">

                <img
                  src="/images/about/understand.jpg"
                  alt="Advocate discussing a legal matter with a client"
                />

              </div>


              <div className="service-content">

                <div className="service-icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>

                <h3>
                  Understand
                </h3>

                <p>
                  We begin by understanding the facts,
                  circumstances and objectives of the matter.
                </p>

              </div>

            </div>


            {/* =================================================
                ANALYSE
            ================================================= */}

            <div className="service-card">

              <div className="service-card-image">

                <img
                  src="/images/about/analyse.jpg"
                  alt="Lawyer reviewing legal documents"
                />

              </div>


              <div className="service-content">

                <div className="service-icon">
                  <i className="bi bi-search"></i>
                </div>

                <h3>
                  Analyse
                </h3>

                <p>
                  Relevant legal issues and available
                  options are carefully considered.
                </p>

              </div>

            </div>


            {/* =================================================
                ADVISE
            ================================================= */}

            <div className="service-card">

              <div className="service-card-image">

                <img
                  src="/images/about/advise.jpg"
                  alt="Advocate providing legal advice to a client"
                />

              </div>


              <div className="service-content">

                <div className="service-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <h3>
                  Advise
                </h3>

                <p>
                  We explain the relevant considerations
                  and possible legal pathways.
                </p>

              </div>

            </div>


            {/* =================================================
                REPRESENT
            ================================================= */}

            <div className="service-card">

              <div className="service-card-image">

                <img
                  src="/images/about/represent.jpg"
                  alt="Advocate representing a client in court"
                />

              </div>


              <div className="service-content">

                <div className="service-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <h3>
                  Represent
                </h3>

                <p>
                  Where engaged, we provide professional
                  legal representation appropriate to the matter.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM
      ===================================================== */}

      <section className="section section-dark">

        <div className="container">

          <SectionTitle
            center
            label="Our Team"
            title="Legal Professionals"
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

    </>
  );
}

export default About;