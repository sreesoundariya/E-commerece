function Products() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: "₹69,999",
      img: "https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg",
    },
    {
      id: 2,
      name: "Samsung S23",
      price: "₹74,999",
      img: "https://m.media-amazon.com/images/I/61VfL-aiToL.jpg",
    },
    {
      id: 3,
      name: "Realme 12 Pro",
      price: "₹25,999",
      img: "https://m.media-amazon.com/images/I/61RZAKB2G-L.jpg",
    },
  ];

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <div className="card h-100">
              <img src={p.img} className="card-img-top" alt={p.name} />
              <div className="card-body text-center">
                <h6>{p.name}</h6>
                <p className="fw-bold text-primary">{p.price}</p>
                <button className="btn btn-sm btn-success">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
