function Card({ src, name }) {
  return (
    <div className="card">
      <img src={src} alt={name} />
    </div>
  );
}

export { Card }
