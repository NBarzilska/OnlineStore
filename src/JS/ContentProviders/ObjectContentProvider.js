import {DeviceStore} from "../Entities/objectClass.js"
export class ObjectContentProvider{
    static getItems() {
        let devStore = new DeviceStore();
        devStore.addDevice("../pictures/image1.jpg", "HUAWEI MATE S", "$280.00");
        devStore.addDevice("../pictures/image2.jpg", "SONY XPERIA Z5", "$550.00");
        devStore.addDevice("../pictures/image3.jpg", "XIAOMI MI 4I", "$350.00");
        devStore.addDevice("../pictures/image4.jpg", "HUAWEI G8 4C", "$350.00");
        devStore.addDevice("../pictures/image5.jpg", "IPHONE ROSE GOLD", "$649.00", "$280.00");
        devStore.addDevice("../pictures/image6.jpg", "HUAWEI G8 4C", "$350.00");
        devStore.addDevice("../pictures/image7.jpg", "GALAXY CORE PRIME", "$399.00");
        devStore.addDevice("../pictures/image8.jpg", "APPLE IPHONE 6S", "$550.00");
        devStore.addDevice("../pictures/image9.jpg", "SAMSUNG GALAXY-A32-5G", "$350.00");
        devStore.addDevice("../pictures/image10.jpg", "XIAOMI REDMI 9A", "$399.00");
        devStore.addDevice("../pictures/image11.jpg", "APPLE IPHONE 13", "$550.00");
        return devStore.getAvailableProducts();
    };
};

