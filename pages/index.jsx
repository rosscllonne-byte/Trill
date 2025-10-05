import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Luxury Real Estate Website", price: 299, type: "Business", image: "https://source.unsplash.com/800x600/?modern,website" },
    { id: 2, name: "E-commerce Store", price: 399, type: "E-Commerce", image: "https://source.unsplash.com/800x600/?shop,web" },
    { id: 3, name: "Crypto Trading Platform", price: 499, type: "Finance", image: "https://source.unsplash.com/800x600/?crypto,app" },
    { id: 4, name: "Portfolio Site", price: 199, type: "Portfolio", image: "https://source.unsplash.com/800x600/?portfolio,design" },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold text-indigo-600">Trillion Marketplace</h1>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-indigo-600">Home</button>
          <button className="text-gray-700 hover:text-indigo-600">About</button>
          <button className="text-gray-700 hover:text-indigo-600">Products</button>
          <button className="text-gray-700 hover:text-indigo-600">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Buy & Sell Premium Websites</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">Launch your online business instantly with professional website templates built for success.</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search website templates..."
            className="w-72 md:w-96 p-3 rounded-l-xl text-gray-800 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-yellow-400 px-5 py-3 rounded-r-xl font-semibold hover:bg-yellow-500 transition">Search</button>
        </div>
      </header>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Websites</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="card cursor-pointer" onClick={() => setSelectedProduct(p)}>
              <img src={p.image} alt={p.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
              <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
              <p className="text-gray-500 mb-2">{p.type}</p>
              <p className="text-indigo-600 font-bold mb-3">${p.price}</p>
              <button className="bg-indigo-600 text-white w-full py-2 rounded-xl hover:bg-indigo-700">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setSelectedProduct(null)}>✕</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h4>
            <p className="text-gray-600 mb-3">Category: {selectedProduct.type}</p>
            <p className="text-gray-700 font-bold mb-4 text-lg">${selectedProduct.price}</p>
            <p className="text-sm text-gray-500 mb-6">Secure payments accepted:</p>
            <div className="flex justify-between mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-8" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Stripe_Logo%2C_revised_2016.svg" className="h-8" alt="Stripe" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" className="h-8" alt="Crypto" />
            </div>
            <button className="bg-green-500 w-full py-3 text-white rounded-xl font-semibold hover:bg-green-600">Buy Now</button>
          </div>
        </div>
      )}

      {/* Dashboard Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">Dashboards</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card text-center">
            <h4 className="text-xl font-semibold mb-2">Buyer Dashboard</h4>
            <p className="text-gray-600">Track your purchases and manage downloads.</p>
          </div>
          <div className="card text-center">
            <h4 className="text-xl font-semibold mb-2">Seller Dashboard</h4>
            <p className="text-gray-600">Monitor your sales, upload websites, and view earnings.</p>
          </div>
          <div className="card text-center">
            <h4 className="text-xl font-semibold mb-2">Admin Dashboard</h4>
            <p className="text-gray-600">Manage users, payments, and analytics securely.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white font-bold mb-2">Trillion Marketplace</h5>
            <p>Your one-stop destination for buying and selling premium websites.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Quick Links</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Contact</h5>
            <p>Email: <a href="mailto:support@trillionmarketplace.com" className="hover:text-white">support@trillionmarketplace.com</a></p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Follow Us</h5>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-white">🌐</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">🐦</a>
              <a href="#" className="hover:text-white">📸</a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">© 2025 Trillion Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}
  
