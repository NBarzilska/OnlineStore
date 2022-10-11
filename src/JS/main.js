import { ObjectContentProvider } from "./ContentProviders/ObjectContentProvider.js";
import { SlideshowContentProvider } from "./ContentProviders/SlideshowContentProvider.js";


let fileteredItems = [];

let container = document.getElementById('myContainer');
let grid = document.getElementById('gridItems');
let contentProvider = new ObjectContentProvider();
let availableProducts = contentProvider.getItems();

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
    let startIndex = (page - 1) * 8 + 1;
    let endIndex = (page - 1) * 8 + 8;
    let appearedItems = fileteredItems.slice(startIndex - 1, endIndex);
    loadPage(appearedItems);
}

function loadPage(items) {
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

        let detailsBtn = document.createElement('button');
        detailsBtn.textContent = 'Details';
        detailsBtn.style.backgroundColor = 'salmon';
        detailsBtn.style.color = 'white';
        detailsBtn.style.textAlign = "center";
  
        detailsBtn.addEventListener('click', function () { showDetails(items[i].id); }, false);

        itemAll.appendChild(detailsBtn);

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


let slideshowList = document.getElementById('containerServices');
let availableService = SlideshowContentProvider.getAvailableServices();

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

function showDetails(id){
    console.log('details');
    console.log(id);
    window.location.href = "./views/details.html?id=" + id;
}