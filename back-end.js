class DeviceStore {
    availableProducts = [];
    addDevice(icon, name, price, promotion = 0) {
        let newDevice = { "icon": icon, "name": name, "price": price };
        this.availableProducts.push(newDevice);
    }
}

let devStore = new DeviceStore();
devStore.addDevice("./image1.jpg", "HUAWEI MATE S", "$280.00");
devStore.addDevice("./image2.jpg", "SONY XPERIA Z5", "$550.00");
devStore.addDevice("./image3.jpg", "XIAOMI MI 4I", "$350.00");
devStore.addDevice("./image4.jpg", "HUAWEI G8 4C", "$350.00");
devStore.addDevice("./image5.jpg", "IPHONE ROSE GOLD", "$649.00", "$280.00");
devStore.addDevice("./image6.jpg", "HUAWEI G8 4C", "$350.00");
devStore.addDevice("./image7.jpg", "GALAXY CORE PRIME", "$399.00");
devStore.addDevice("./image8.jpg", "APPLE IPHONE 6S", "$550.00");
devStore.addDevice("./image9.jpg", "SAMSUNG GALAXY-A32-5G", "$350.00");
devStore.addDevice("./image10.jpg", "XIAOMI REDMI 9A", "$399.00");
devStore.addDevice("./image11.jpg", "APPLE IPHONE 13", "$550.00");

let fileteredItems = [];

let container = document.getElementById('myContainer');
let grid = document.getElementById('gridItems');
let availableProducts = devStore.availableProducts;

fileteredItems = availableProducts;

let pages = document.getElementById('pagination');

reload();

let searchBar = document.getElementById('query');
searchBar.addEventListener('input', filter);

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearList);
clearBtn.disabled = true;

changePage(1);

function filter(e) {
    console.log('filter');
    fileteredItems = [];
    let inputValue = e.target.value;
    if (inputValue != '') {
        clearBtn.disabled = false;
    }
    for (let i = 0; i < availableProducts.length; i++) {
        if (availableProducts[i].name.toLowerCase().includes(inputValue.toLowerCase())) {
            fileteredItems.push(availableProducts[i]);
        };
    };
    reload();
    changePage(1);
};

function reload() {
    pages.innerHTML = '';
    let countPages = Math.ceil(fileteredItems.length / 8);

    for (let i = 1; i <= countPages; i++) {
        let page = document.createElement('li');
        page.classList.add('page-item');
        page.setAttribute('id', "page" + i);
        page.addEventListener('click', function () { changePage(i); }, false);
        let link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.innerHTML = i;
        page.appendChild(link);
        pages.appendChild(page);
    }
}

function changePage(page) {
    console.log('change pages' + page);
    let startIndex = (page - 1) * 8 + 1;
    let endIndex = (page - 1) * 8 + 8;
    let appearedItems = fileteredItems.slice(startIndex - 1, endIndex);
    console.log(startIndex);
    console.log(endIndex);
    loadPage(appearedItems);
}

function loadPage(items) {
    console.log('load page' + items.length);
    grid.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let itemAll = document.createElement('div');
        let icon = document.createElement('img');
        icon.src = items[i].icon;
        icon.width = '200';
        icon.height = '200';
        itemAll.appendChild(icon);

        let name = document.createElement('p');
        name.innerHTML = items[i].name;
        itemAll.appendChild(name);

        let price = document.createElement('p');
        price.innerHTML = items[i].price;
        price.style.color = "red";
        itemAll.appendChild(price);
        grid.appendChild(itemAll);
    }

}

function clearList() {
    searchBar.value = '';
    fileteredItems = availableProducts;
    clearBtn.disabled = true;
    reload();
    changePage(1);
}

// slideshow class
class SlideshowContainer {
    availableService = [];
    addService(icon, name, description) {
        let newService = { "icon": icon, "name": name, "description": description };
        this.availableService.push(newService);
    }
}

let serviceOffers = new SlideshowContainer();
serviceOffers.addService("./service1.jpg", "FULL WARRENTY", "Read About Our Warrenty");
serviceOffers.addService("./service2.jpg", "EXPRESS SHIPPING", "Local & International Shipping");
serviceOffers.addService("./service3.jpg", "MOBILE BLOG", "Discuss Your Favourite Phone");
serviceOffers.addService("./service4.jpg", "24/7 SUPPORT", "Get Full Support via Chat");
serviceOffers.addService("./service5.jpg", "Other services", "text1.1");
serviceOffers.addService("./service6.jpg", "Other seervices", "text2.1");

let slideshowList = document.getElementById('containerServices');
let availableService = serviceOffers.availableService;

loadServices();

function loadServices() {
    //clear slider on every auto srolling
    slideshowList.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        let service = document.createElement('div');
        service.classList.add('d-flex');
        service.classList.add('w-100');
        service.classList.add('justify-content-between');
        service.style.padding='5px';
        let serviceIcon = document.createElement('img');
        serviceIcon.src = availableService[i].icon;
        serviceIcon.width = '30';
        serviceIcon.height = '30';
        service.appendChild(serviceIcon);

        let nameService = document.createElement('b');
        nameService.innerHTML = availableService[i].name;
        service.appendChild(nameService);

        let descriptionService = document.createElement('p');
        descriptionService.innerHTML = availableService[i].description;
        service.appendChild(descriptionService);
        slideshowList.appendChild(service);
    };
    if (availableService.length > 4) {
        setTimeout(slideServices, 2000);
    }
};

function slideServices() {
    let firstService = availableService.shift();
    availableService.push(firstService);
    loadServices();
}