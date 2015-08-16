var galleryData = [
    {
        "name": "Summer Collection",
        "items": [
            {
                "type": "carousel",
                "code": "F001",
                "images": [
                    {
                        "img": "http://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/10497152_751050108341926_8707558144056360036_o.jpg",
                    },
                    {
                        "img": "http://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/10497152_751050108341926_8707558144056360036_o.jpg",
                    }

                ]
            }
        ]
    }
];


function buildGallery(galleryData) {
    var image = null;
    var imageURL = null;

    var galleryContainer = document.getElementById('gallery');

    for (var i = 0; i < galleryData.items.length; i++) {
        var galleryItem = document.createElement("div");
        var galleryItemLink = document.createElement("a");
        var galleryItemImage = document.createElement("img");

        image = galleryData.items[i].images[0];
        imageURL = image.img;
        galleryItemImage.src = imageURL;
        galleryItemImage.className = "img-responsive thumbnail";
        galleryItem.className = 'col-lg-3 col-md-4 col-xs-6 thumb';

        galleryItemLink.appendChild(galleryItemImage);
        galleryItem.appendChild(galleryItemLink);
        galleryContainer.appendChild(galleryItem);

    }
}

buildGallery(galleryData);

//<div class="col-lg-3 col-md-4 col-xs-6 thumb">
//    <a href="#">
//    <img class="img-responsive thumbnail" src="public_html/assets/images/collections/0000_0.jpg" alt="">
//    </a>
//</div>
