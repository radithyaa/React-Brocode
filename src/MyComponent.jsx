import { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold flex justify-center items-center py-2">
        Hi {name}!
      </h1>
      <input
        type="text"
        onChange={handleNameChange}
        value={name}
        className="bg-gray-800 text-white rounded-sm px-2 py-1"
      ></input>
      <br />
      <h1 className="text-center text-xl font-medium flex py-3">
        Quantity: {quantity}
      </h1>
      <input
        type="number"
        onChange={handleQuantityChange}
        value={quantity}
        className="bg-gray-800 text-white rounded-sm px-2 py-1"
      ></input>
      <br />
      <h1 className="text-center text-xl font-medium flex py-3">
        Comment: {comment}
      </h1>
      <textarea
        placeholder="Enter Delivery Instructions"
        type="number"
        onChange={handleCommentChange}
        value={comment}
        className="bg-gray-800 text-white rounded-sm px-2 py-1"
      ></textarea>
      <br />
      <h1 className="text-center text-xl font-medium flex py-3">
        Payment: {payment}
      </h1>
      <select
        onChange={handlePaymentChange}
        value={payment}
        className="bg-gray-800 text-white rounded-sm px-2 py-1"
      >
        <option value="">Enter Your Payment Method</option>
        <option value="Visa">VISA</option>
        <option value="Master Card">Master Card</option>
        <option value="BNI">BNI</option>
        <option value="Mandiri">Mandiri</option>
      </select>
      <br />
      <h1 className="text-center text-xl font-medium flex py-3">
        Shipping: {shipping}
      </h1>
      <label>
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        ></input>
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        ></input>
        Delivery
      </label>
      <br />
    </div>
  );
}
