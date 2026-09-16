import { Link } from "react-router-dom";

function Button({
  children,
  to = "/contact",
  outline = false
}) {
  return (
    <Link
      to={to}
      className={`btn ${outline ? "btn-outline" : "btn-gold"}`}
    >
      {children}

      <i className="bi bi-arrow-up-right"></i>
    </Link>
  );
}

export default Button;