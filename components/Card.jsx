function Card({ image, name, description }) {
  return (
    <div className="card" style={{ height: 400, width: 250 }}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
