import React, { useEffect, useState } from "react";
import "./ProductList.css";

function ProductList() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 

  // Fetch Data
  const fetchData = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=8&page=${page}`
      );
      const data = await res.json();
      if (data.length === 0) {
        setHasMore(false); // If no more products, stop further fetching
      }
      setProduct((prevProduct) => [...prevProduct, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Infinite Scroll - detect when user scrolls near bottom
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="container">
      <div className="card-container">
        {product.map((ele) => (
          <div className="card" key={ele.id}>
            <img src={ele.image} alt={ele.title} width="200px" />
            <div className="card-body">{ele.title}</div>
          </div>
        ))}
      </div>

      {loading && <div className="loading">Loading...</div>}
      {!hasMore && <div className="end-message">No more products to load.</div>}
    </div>
  );
}

export default ProductList;
