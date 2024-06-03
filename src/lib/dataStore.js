
// dataStore.js
// This file acts as a mock database, containing hardcoded property data.
// It exports an array of property objects that can be imported and used by the PropertyList component.

const properties = [
    {
        id: 1,
        title: "Modern Family Home",
        description: "Spacious 3-bedroom house with a lovely garden.",
        price: "$1200/month",
        imageUrl: "https://via.placeholder.com/400x300.png?text=Modern+Family+Home"
    },
    {
        id: 2,
        title: "Urban Studio Apartment",
        description: "Compact living space in the heart of the city, perfect for young professionals.",
        price: "$950/month",
        imageUrl: "https://via.placeholder.com/400x300.png?text=Urban+Studio+Apartment"
    },
    {
        id: 3,
        title: "Cozy Cottage",
        description: "A charming cottage with beautiful surroundings in a peaceful location.",
        price: "$800/month",
        imageUrl: "https://via.placeholder.com/400x300.png?text=Cozy+Cottage"
    },
    {
        id: 4,
        title: "Luxury Villa",
        description: "A luxurious villa with a private pool and stunning views.",
        price: "$2500/month",
        imageUrl: "https://via.placeholder.com/400x300.png?text=Luxury+Villa"
    }
];

export default properties;
