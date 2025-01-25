"use client";
import React from "react";
import { remove } from "../redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store"; // Replace with the actual path to your store's RootState type
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price,
    0
  );

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Please add items before confirming.");
      return;
    }
    // Simulate order confirmation
    alert(`Order confirmed! Your total is $${totalPrice.toFixed(2)}.`);
    // Additional actions such as clearing the cart can be added here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>

      {/* Cart Items Section */}
      <div className="space-y-6">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow-md rounded-lg p-4"
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                height={150}
                width={150}
                className="rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="ml-4 flex-grow">
              <h5 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h5>
              <h5 className="text-lg font-medium text-gray-600 mt-2">
                ${item.price.toFixed(2)}
              </h5>
            </div>

            {/* Button Section */}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* If Cart is Empty */}
        {cartItems.length === 0 && (
          <p className="text-center text-gray-600">
            Your cart is empty. Start adding items!
          </p>
        )}
      </div>

      {/* Total Price Section */}
      {cartItems.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-4 mt-6">
          <h4 className="text-xl font-semibold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </h4>
        </div>
      )}

      {/* Confirm Order Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleConfirmOrder}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          disabled={cartItems.length === 0}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
