import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <div className="service-card">

      <div className="service-card-image">

        <img
          src={service.image}
          alt={service.title}
        />

      </div>


      <div className="service-content">

        <div className="service-icon">
          <i className={service.icon}></i>
        </div>

        <h3>
          {service.title}
        </h3>

        <p>
          {service.description}
        </p>

        <Link
          to="/services"
          className="service-link"
        >
          Explore Service →
        </Link>

      </div>

    </div>
  );
}

export default ServiceCard;