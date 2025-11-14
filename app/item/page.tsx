"use client";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../redux-toolkit/CartSlice";
import Image from "next/image";
const Item = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className="remove-button" onClick={() => dispatch(clearCart([]))}>Clear All</button>

      <div className="pt-4 pb-8 px-4 justify-center	 items-center flex">
        <div className="product-card">
          <div className="product-image">
            <Image
              src="https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwb971e09a/01.JBL_Tune_720BT_ProductImage_Hero_Blue.png?sw=535&sh=535"
              alt="Product Image"
              width={100}
              height={100}
            />
          </div>

          <div className="product-info">
            <h1>Wireless Earphone</h1>
            <p className="price">$129.99</p>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore velit cupiditate quidem iure fugit pariatur fugiat id
              nihil totam voluptatibus amet, odit voluptas reprehenderit, dolor
              repellat obcaecati voluptate, suscipit ullam!
            </p>
            <div className="gap-4">
              <button className="btn" onClick={() => dispatch(addItem(1))}>
                Add to Cart
              </button>
              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(1))}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
