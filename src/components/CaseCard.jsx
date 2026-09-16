function CaseCard({ caseItem }) {
  return (
    <article className="case-card">

      <div className="case-image">

        <img
          src={caseItem.image}
          alt={caseItem.title}
        />

      </div>


      <div className="case-content">

        <span className="case-category">
          {caseItem.category}
        </span>

        <h3>
          {caseItem.title}
        </h3>

        <p>
          {caseItem.description}
        </p>

        <span className="case-status">
          {caseItem.status}
        </span>

      </div>

    </article>
  );
}

export default CaseCard;