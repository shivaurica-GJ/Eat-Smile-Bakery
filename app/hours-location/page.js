import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

export default function HoursLocation() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-red-900 mb-12">
            Hours & Location
          </h1>
          <div className="mb-12 flex justify-center">
            <Card className="w-full max-w-2xl h-fit text-center">
              <CardContent className="space-y-6">
                {/* Store Hours Section */}
                <div className="p-6 bg-red-100 rounded-lg mt-4">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    Open 24/7
                  </h3>
                  <p className="text-red-700">Monday through Sunday</p>
                  <p className="text-red-700">All day, every day</p>
                </div>

                {/* Contact Section */}
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-center items-center space-x-2">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span>Call us: +1 (718) 555-2311</span>
                  </p>
                  <p className="flex justify-center items-center space-x-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span>45 Main Street, Brooklyn, NY 11201, USA</span>
                  </p>
                </div>

                <hr className="border-t border-gray-200" />

                {/* Visit Us Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="flex justify-center items-center space-x-2 text-lg font-semibold text-red-800 mb-1">
                      <MapPin className="h-5 w-5" />
                      <span>Visit Us</span>
                    </h3>
                    <p className="text-gray-700">
                      Come visit our historic bakery in the heart of Brooklyn.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Address</h4>
                    <p className="text-gray-700">
                      45 Main Street
                      <br />
                      Brooklyn, NY 11201
                      <br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Parking</h4>
                    <p className="text-gray-700">
                      Street parking available. We're located on a well-known
                      landmark street in Brooklyn.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <Card>
            <CardHeader>
              <CardTitle className="text-red-800">Find Us on the Map</CardTitle>
              <CardDescription>
                Located in the heart of Brooklyn, we're easy to find!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2726683531924!2d-73.99668268459434!3d40.69149597933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316fe31c27%3A0x5b89f8b6e4c0a1c0!2s45%20Main%20St%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sus!4v1642694857123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eat Smile Bakery Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
