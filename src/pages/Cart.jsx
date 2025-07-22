// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id, change) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(item.quantity + change, 1); // Quantity can't go below 1
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return acc + numericPrice * (item.quantity || 1);
  }, 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="max-w-5xl mx-auto space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg bg-gray-950 p-2 border border-gray-700"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-red-400">{item.name}</h2>
                    <p className="text-gray-400 text-sm">
                      {item.price} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-lg"
                      >
                        −
                      </button>
                      <span className="text-xl font-medium px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 mt-4 sm:mt-0"
                >
                  ✖ Remove
                </button>
              </div>
            ))}

            <div className="text-center mt-10 space-y-4">
              <p className="text-2xl font-bold text-green-400">
                Total: ₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                <button
                  onClick={() => navigate("/")}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-medium transition"
                >
                  ← Continue Shopping
                </button>

                <button
                  onClick={() => alert("🧾 Checkout functionality coming soon!")}
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md text-white font-medium transition"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={handleClearCart}
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-medium transition"
                >
                  🧹 Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
