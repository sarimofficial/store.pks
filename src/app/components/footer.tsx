export default function Footer() {
    return (
  <>
<footer className="bg-gray-200 text-black py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* About Section */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">About Us</h2>
      <p className="text-gray-900">
        We are your one-stop shop for the best products at unbeatable prices.
        Our mission is to provide quality products with excellent customer
        service.
      </p>
    </div>
    {/* Links Section */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
      <ul className="text-gray-900 space-y-2">
        <li>
          <a href="/shop" className="hover:text-white transition">
            Shop
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-white transition">
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </li>
        <li>
          <a href="/faq" className="hover:text-white transition">
            FAQs
          </a>
        </li>
      </ul>
    </div>
    {/* Subscribe Section */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
      <p className="text-gray-900 mb-4">
        Subscribe to our newsletter to get updates on new products and special
        offers.
      </p>
      <form className="flex space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
  <div className="mt-8 border-t border-gray-900 pt-4 text-center text-gray-900">
    <p>© 2025 Muhammad Sarim E-Commerce Store. All Rights Reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="hover:text-black transition">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#" className="hover:text-black transition">
        <i className="fab fa-twitter" />
      </a>
      <a href="#" className="hover:text-black transition">
        <i className="fab fa-instagram" />
      </a>
      <a href="#" className="hover:text-black transition">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  </div>
</footer>

  </>
    );
  }








                       













