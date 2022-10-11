export class DeviceStore {

    availableProducts = [];

    addDevice(id, icon, name, price, description) {
        let newDevice = { "id": id, "icon": icon, "name": name, "price": price, 'description': description};
        this.availableProducts.push(newDevice);
    };

    getAvailableProducts(){
        return this.availableProducts;
    };
};