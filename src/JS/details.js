import { ObjectContentProvider } from "./ContentProviders/ObjectContentProvider.js";

console.log('details loaded');

// Read url parameteres from js file
let currentUrl = window.location.href;
let url = new URL(currentUrl);
let searchParams = url.searchParams;
let currentId = searchParams.get('id');

let contentProvider = new ObjectContentProvider();
let itemDetails = contentProvider.getDetails(currentId);

let imageItem = document.getElementById('itemimage');
let nameItem = document.getElementById('itemInformation');
let priceItem = document.getElementById('price');
let descriptionItem = document.getElementById('description');

nameItem.innerHTML = itemDetails.name;
priceItem.innerHTML = itemDetails.price;
descriptionItem.innerHTML = itemDetails.description;
imageItem.src = '../'+ itemDetails.icon;