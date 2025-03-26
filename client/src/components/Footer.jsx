
const Footer = () => {
  return (
    <>
  <footer className="bg-gray-900 text-white px-24 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold">Partimee</h2>
          <p className="mt-2 text-gray-400">Find the best part-time jobs near you with ease.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Jobs</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        &copy; 2025 Partimee. All rights reserved.
      </div>
    </footer>
    </>
  )
}
export default Footer;
