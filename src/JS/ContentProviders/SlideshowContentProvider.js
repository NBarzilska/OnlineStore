import { SlideshowContainer } from "../Entities/slideshowClass.js";
export class SlideshowContentProvider {
    static getAvailableServices(){
        let serviceOffers = new SlideshowContainer();
        serviceOffers.addService("../pictures/service1.jpg", "FULL WARRENTY", "Read About Our Warrenty");
        serviceOffers.addService("../pictures/service2.jpg", "EXPRESS SHIPPING", "Local & International Shipping");
        serviceOffers.addService("../pictures/service3.jpg", "MOBILE BLOG", "Discuss Your Favourite Phone");
        serviceOffers.addService("../pictures/service4.jpg", "24/7 SUPPORT", "Get Full Support via Chat");
        serviceOffers.addService("../pictures/service4.jpg", "Other services", "text1.1");
        serviceOffers.addService("../pictures/service3.jpg", "Other seervices", "text2.1");
        return serviceOffers.getAvailableServices();
    };
};

