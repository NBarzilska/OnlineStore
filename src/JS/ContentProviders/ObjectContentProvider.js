import { DeviceStore } from "../Entities/objectClass.js"
export class ObjectContentProvider {
    devStore = new DeviceStore();

    constructor() {
        this.devStore = new DeviceStore();
        this.devStore.addDevice(1, "../pictures/image1.jpg", "HUAWEI MATE S", "$280.00", "more decription");
        this.devStore.addDevice(2, "../pictures/image2.jpg", "SONY XPERIA Z5", "$550.00", "more decription");
        this.devStore.addDevice(3, "../pictures/image3.jpg", "XIAOMI MI 4I", "$350.00", "more decription");
        this.devStore.addDevice(4, "../pictures/image4.jpg", "HUAWEI G8 4C", "$350.00", "more decription");
        this.devStore.addDevice(5, "../pictures/image5.jpg", "IPHONE ROSE GOLD", "$649.00", "$280.00", "more decription");
        this.devStore.addDevice(6, "../pictures/image6.jpg", "HUAWEI G8 4C", "$350.00", "more decription");
        this.devStore.addDevice(7, "../pictures/image7.jpg", "GALAXY CORE PRIME", "$399.00", "more decription");
        this.devStore.addDevice(8, "../pictures/image8.jpg", "APPLE IPHONE 6S", "$550.00", "more decription");
        this.devStore.addDevice(9, "../pictures/image9.jpg", "SAMSUNG GALAXY-A32-5G", "$350.00", "more decription");
        this.devStore.addDevice(10, "../pictures/image10.jpg", "XIAOMI REDMI 9A", "$399.00", "more decription");
        this.devStore.addDevice(11, "../pictures/image11.jpg", "APPLE IPHONE 13", "$550.00", "more decription");
    }

    getItems() {

        return this.devStore.getAvailableProducts();
    };

    getDetails(id) {
        console.log('get details');
        let listOfProducts = this.devStore.getAvailableProducts();
        for (let i = 0; i < listOfProducts.length; i++) {
            if (listOfProducts[i].id == id) {
                return listOfProducts[i];
            }
        }
    }

};

