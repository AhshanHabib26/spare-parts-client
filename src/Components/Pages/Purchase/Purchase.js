import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://motor-parts-263.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Purchase;
