
// PropertyCard.jsx
// Displays individual property details such as the image, title, description, and price.
// This component is used within the Property List to showcase each property in a card format.

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ property }) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={property.imageUrl} alt={`Image of ${property.title}`} />
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{property.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-semibold">{property.price}</p>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
