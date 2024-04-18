import React, { useEffect, useRef, useState } from "react";
import { getProductById } from "first_project/products";
import { useParams } from "react-router-dom";
import placeAddToCart from "add_to_cart/placeAddToCart";
const SingleContentPage = () => {
  const { id } = useParams();
  const addToCart = useRef(null);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);
  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} height={500} width={400} />
      </div>
      <div>
        <div className="flex">
          <p className="font-bold flex-grow">{product.name}</p>
          <p className="font-bold flex-grow">${product.price}</p>
        </div>
        <div ref={addToCart}></div>
        <p>{product.description}</p>
        <p className="text-sm">{product.longDescription}</p>
      </div>
    </div>
  );
};

export default SingleContentPage;
