function InfoCard({ title, description, children }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-children">{children}</div>
    </article>
  );
}

export default InfoCard;
