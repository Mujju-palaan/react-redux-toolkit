'use client'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux-toolkit/hooks";
import { fetchProducts } from "@/app/redux-toolkit/ProductSlice";
import { addItem, removeItem } from "@/app/redux-toolkit/CartSlice";

const Product = () => {
  const dispatch = useAppDispatch();

  const productsState = useAppSelector((state) => state.product);
  const cartState = useAppSelector((state) => state.cart);

  const products = productsState?.items ?? [];
  const cartItems = cartState?.items ?? [];

  useEffect(() => {
    if (productsState?.status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsState?.status]);

  if (productsState?.status === "loading") return <p>Loading...</p>;
  if (productsState?.status === "failed") return <p>Error loading products.</p>;

  return (
    <div className="grid">
      {products.map((item: any) => (
        <div key={item.id} className="card">
          <img src={item.thumbnail} alt={item.title} />
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="price">${item.price}</div>

            {cartItems.find((c: any) => c.id === item.id) ? (
              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(item))}
              >
                Remove
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => dispatch(addItem(item))}
              >
                Add
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
