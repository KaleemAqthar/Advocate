import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";


function Services() {
  return (
    <>

      <section className="page-hero">

        <div>

          <h1>
            Our Services
          </h1>

          <p>
            Home / Services
          </p>

        </div>

      </section>


      <section className="section services-section">

        <div className="container">

          <SectionTitle
            center
            label="Practice Areas"
            title="Legal Services"
            description="Our practice provides legal consultation and representation across a range of legal matters."
          />


          <div className="services-grid">

            {services.map((service) => (

              <ServiceCard
                key={service.id}
                service={service}
              />

            ))}

          </div>

        </div>

      </section>


      <section className="consultation-strip">

        <div className="container">

          <div className="consultation-inner">

            <div>

              <span className="section-label">
                Need Legal Assistance?
              </span>

              <h2>
                Discuss Your Matter
              </h2>

              <p>
                Contact our office to request a consultation.
              </p>

            </div>

            <a
              href="/contact"
              className="btn btn-gold"
            >
              Schedule Consultation
              <i className="bi bi-arrow-up-right"></i>
            </a>

          </div>

        </div>

      </section>

    </>
  );
}

export default Services;