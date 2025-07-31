import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/Eat Smile.png"
                className="w-16 p-1 bg-white rounded"
                alt="Eat Smile Logo"
              />
              <span className="text-xl font-bold">Eat Smile Bakery</span>
            </div>
            <p className="text-red-100">
              Proudly serving Brooklyn for over 70 years with fresh baked goods,
              custom cakes, and specialty items.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-300">Contact Info</h3>
            <div className="space-y-2 text-red-100">
              <p>45 Main Street</p>
              <p>Brooklyn, NY 11201, USA</p>
              <p>Phone: +1 (718) 555-2311</p>
              <p>Email: hello@eatsmilebakery.com</p>
              <p>Open 24/7</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-300">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-red-100 hover:text-red-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a> */}
              <a
                href="https://www.instagram.com/yangnhungry"
                className="text-red-100 hover:text-red-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-200">
          <p>&copy; 2025 Eat Smile Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
