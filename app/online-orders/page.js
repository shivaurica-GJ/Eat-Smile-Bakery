'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function OnlineOrders() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    cakeSize: '',
    cakeFlavor: '',
    filling: '',
    decorations: '',
    frosting: '',
    decorationColor: '',
    writing: '',
    specialInstructions: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-red-900 mb-8">
            Online Cake Order Form
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Place Your Order</CardTitle>
              <CardDescription>
                Please allow 24-48 hours processing for all online orders! If you have not received a phone call within 24 hours of placing your order, please call us to confirm your order.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="https://formsubmit.co/hello@eatsmilebakery.com" method="POST" encType="multipart/form-data" className="space-y-6">
                {/* Hidden FormSubmit fields */}
                <input type="hidden" name="_subject" value="New Cake Order Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_template" value="table" />

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-800">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 201-555-0123"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-800">Pickup Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pickupDate">Pickup Date *</Label>
                      <Input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pickupTime">Pickup Time *</Label>
                      <Select onValueChange={(value) => handleSelectChange('pickupTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pickup time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="pickupTime" value={formData.pickupTime} />
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    Please remember we close at 2:00 PM Monday & Tuesday, 3:00 PM Wednesday & Thursday, 5:00 PM on Friday and 3:00 PM on Saturday. Please plan your pickup time accordingly.
                  </p>
                </div>

                {/* Cake Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-800">Cake Details</h3>
                  
                  <div>
                    <Label htmlFor="cakeSize">Cake Size *</Label>
                    <Select onValueChange={(value) => handleSelectChange('cakeSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cake size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6 inch">6 inch</SelectItem>
                        <SelectItem value="8 inch">8 inch</SelectItem>
                        <SelectItem value="9 inch">9 inch</SelectItem>
                        <SelectItem value="10 inch">10 inch</SelectItem>
                        <SelectItem value="12 inch">12 inch</SelectItem>
                        <SelectItem value="1/4 sheet">1/4 sheet</SelectItem>
                        <SelectItem value="1/2 sheet">1/2 sheet</SelectItem>
                        <SelectItem value="full sheet">Full sheet</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="cakeSize" value={formData.cakeSize} />
                  </div>

                  <div>
                    <Label htmlFor="cakeFlavor">Cake Flavor *</Label>
                    <Select onValueChange={(value) => handleSelectChange('cakeFlavor', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cake flavor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Chocolate">Chocolate</SelectItem>
                        <SelectItem value="White">White</SelectItem>
                        <SelectItem value="Marble">Marble</SelectItem>
                        <SelectItem value="Danish Torte">Danish Torte</SelectItem>
                        <SelectItem value="Red Velvet">Red Velvet</SelectItem>
                        <SelectItem value="Carrot">Carrot</SelectItem>
                        <SelectItem value="Lemon">Lemon</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="cakeFlavor" value={formData.cakeFlavor} />
                    <p className="text-sm text-gray-600 mt-1">
                      Chocolate, White & Marble Cakes are NOT FILLED
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="filling">Select Filling</Label>
                    <Select onValueChange={(value) => handleSelectChange('filling', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select filling (Danish Tortes only)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="Raspberry">Raspberry</SelectItem>
                        <SelectItem value="Strawberry">Strawberry</SelectItem>
                        <SelectItem value="Cherry">Cherry</SelectItem>
                        <SelectItem value="Blueberry">Blueberry</SelectItem>
                        <SelectItem value="Custard">Custard</SelectItem>
                        <SelectItem value="Chocolate">Chocolate</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="filling" value={formData.filling} />
                    <p className="text-sm text-gray-600 mt-1">
                      Filling is available on Danish Tortes ONLY
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="decorations">Decorations</Label>
                    <Select onValueChange={(value) => handleSelectChange('decorations', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select decorations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="Roses">Roses</SelectItem>
                        <SelectItem value="Flowers">Flowers</SelectItem>
                        <SelectItem value="Borders">Borders</SelectItem>
                        <SelectItem value="Balloons">Balloons</SelectItem>
                        <SelectItem value="Custom Design">Custom Design</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="decorations" value={formData.decorations} />
                  </div>

                  <div>
                    <Label htmlFor="frosting">Frosting</Label>
                    <Select onValueChange={(value) => handleSelectChange('frosting', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frosting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Buttercream">Buttercream</SelectItem>
                        <SelectItem value="Cream Cheese">Cream Cheese</SelectItem>
                        <SelectItem value="Whipped Cream">Whipped Cream</SelectItem>
                        <SelectItem value="Fondant">Fondant</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="frosting" value={formData.frosting} />
                  </div>

                  <div>
                    <Label htmlFor="decorationColor">Color of Decorations</Label>
                    <Input
                      type="text"
                      id="decorationColor"
                      name="decorationColor"
                      placeholder="e.g., Pink and White"
                      value={formData.decorationColor}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialImage">Special Image</Label>
                    <Input
                      type="file"
                      id="specialImage"
                      name="specialImage"
                      accept="image/*"
                      className="file:mr-4 file:py-2 file:px-4 h-13 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                    />
                  </div>

                  <div>
                    <Label htmlFor="writing">Writing or Message on cake</Label>
                    <Input
                      type="text"
                      id="writing"
                      name="writing"
                      placeholder="e.g., Happy Birthday John!"
                      value={formData.writing}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialInstructions">Special Instructions</Label>
                    <Textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      rows={4}
                      placeholder="Please include any special instructions here..."
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold text-center">
                    PLEASE CALL +1 (718) 555-2311 FOR CONFIRMATION!
                  </p>
                  <p className="text-red-700 text-sm text-center mt-2">
                    Please allow 24-48 hours processing for all online orders!
                  </p>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                  Submit Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}