function getShippingCost(country) {
switch (country) {
    case country = "Australia":
        return `Shipping to Australia will cost 170 credits`;
        break;
    case country = "China":
        return `Shipping to China will cost 100 credits`;
        break;
    case country = "Chile":
        return `Shipping to Chile will cost 250 credits`;
        break;
    case country = "Jamaica":
        return `Shipping to Jamaica will cost 120 credits`;
        break;
    default:
        return `Sorry, there is no delivery to your country`;                 
}
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"