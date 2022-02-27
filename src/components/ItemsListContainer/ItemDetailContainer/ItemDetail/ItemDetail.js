export const ItemDetail = ({ item }) => (
  <>
    <img src={item.imgUrl} className="card-img-top" alt="imagen" />
    <div className="card-body">
      <h5 className="card-title" style={{ color: "black" }}>
        {item.title}
      </h5>
      <p className="card-text" style={{ color: "black" }}>
        {item.description}
      </p>
      <hr />
      <p>$ {item.price}</p>
      <a href="#" className="btn btn-dark">
        + Info
      </a>
    </div>
  </>
);
