import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fish, Star, Cake, Clock } from 'lucide-react';

const features = [
  {
    icon: Fish,
    title: "FISH FRIDAY",
    description: "Deep Fried White Fish and Shrimp are available from about 8:30 AM every Friday until it's gone. You can make sure to get yours by calling ahead and placing your order. Call the day before or early Friday and tell us what time you would like to pick up your order."
  },
  {
    icon: Star,
    title: "SPECIALTY ITEMS",
    description: "We are famous for our Kringles! Oliver's Bakery Kringles are a unique, any time gift. Their tender, flaky crust and flavorful fillings make them ideal for Anniversaries, Weddings, Office Gathering, Holidays and more!"
  },
  {
    icon: Cake,
    title: "CAKES",
    description: "From basic to custom Oliver's can help you with your next cake order. Order on line or give us a call, we would love to help in any way we can."
  },
  {
    icon: Clock,
    title: "HISTORY",
    description: "For the past 70 years, Eat smile bakery's has been Brooklyn hometown bakery, and our store on Roosevelt Road is a well known landmark in the community. Over the years we have had the privilege of serving and building relationships with our customers. Being Sweet to You Is What We Do!"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-900 mb-12">
          A few things we're great at
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-red-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}