import {
    picturesArray
} from "/data/pictures.js";
const container = document.getElementById('pictures-container');


function displayPictures(picturesArray) {
    let html = '';
    picturesArray.forEach(picture => {
        html += `<div class="col-sm-4">
                    <div class="card w-75 mb-5" style="width: 18rem;">
                    <img src="${picture.getImage()}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${picture.getName()} </h5> 
                        <p class="card-text">Artist: ${picture.getArtist()}</p>
                        <ul class="list-group list-group-flush">
                         <li class="list-group-item">Price: $${picture.getPrice()}</li> 
                        </ul>
                        <h6 class="card-subtitle mb-2 text-muted">${picture.getAvailabilty()} <h6>
                        <a href="#" class="btn btn-primary"> (decorative only) </a>
                    </div>
                    </div>
                </div>`;
    });
    container.innerHTML = html;
}
displayPictures(picturesArray);


window.searchPictures = function () {
    const searchField = document.getElementById('search-field');
    const searchedTerm = searchField.value.trim();
    const searchResult = picturesArray.filter(picture => {
        return picture.name.toLowerCase().includes(searchedTerm.toLowerCase())
    })
    displayPictures(searchResult);
}
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', searchPictures);