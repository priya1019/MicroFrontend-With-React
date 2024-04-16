import React, { useEffect, useState } from "react";
import { getProductById } from "first_project/products";
import { useParams } from "react-router-dom";
const SingleContentPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);
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
        <p>{product.description}</p>
        <p className="text-sm">{product.longDescription}</p>
      </div>
    </div>
  );
};

export default SingleContentPage;
