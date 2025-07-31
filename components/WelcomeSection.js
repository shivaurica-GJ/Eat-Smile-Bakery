import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WelcomeSection() {
  return (
    <section id="welcome-section" className="py-16 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8">
          Welcome to Eat Smile Bakery!
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We would like to thank you for your business during these trying times and hope you continue to support us as other businesses reopen. We have proudly served this community for over 70 years, and with your support, we hope to see another 70. Oliver's Bakery is a locally owned small business with the flexibility to cater to your personal needs. If you don't see what you are looking for give us a call and we will see if we can help you out.
        </p>
        <Link href="/online-orders">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            Online Cake Order
          </Button>
        </Link>
      </div>
    </section>
  );
}