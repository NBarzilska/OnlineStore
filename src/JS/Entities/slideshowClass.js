export class SlideshowContainer {
    availableService = [];
    addService(icon, name, description) {
        let newService = { "icon": icon, "name": name, "description": description };
        this.availableService.push(newService);
    };
    getAvailableServices(){
        return this.availableService;
    };
};