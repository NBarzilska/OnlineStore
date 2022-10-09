export class DeviceStore {

    availableProducts = [];

    addDevice(icon, name, price, promotion = 0) {
        let newDevice = { "icon": icon, "name": name, "price": price };
        this.availableProducts.push(newDevice);
    };

    getAvailableProducts(){
        return this.availableProducts;
    };
};