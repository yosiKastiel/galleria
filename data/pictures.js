class Picture {
    constructor(name, artist, price, isInStock, image) {
        this.name = name;
        this.artist = artist;
        this.price = price;
        this.isInStock = isInStock;
        this.image = image;
    }
    getName() {
        return `${this.name}`;
    }
    getArtist() {
        return `${this.artist}`;
    }
    getPrice() {
        return `${this.price}`;
    }
    getAvailabilty() {
        if (this.isInStock) {
            return 'Product is in stock!';
        } else {
            return 'Product is out of Stock';
        }
    }
    getImage() {
        const IMAGE_PATH = 'https://cdn.pixabay.com/photo/';
        return `${IMAGE_PATH}${this.image}`;
    }
}

let picturesArray = [
    new Picture(
        'horizon',
        'bruno brave',
        130,
        true,
        '2022/06/19/07/12/mount-kilimanjaro-7271184_960_720.jpg'
    ),
    new Picture(
        'cheetah',
        'joseph kastiel',
        1230,
        true,
        '2022/06/22/10/47/cheetah-7277665_960_720.jpg'
    ),
    new Picture(
        'Landscape',
        'bruno brave',
        192,
        false,
        '2022/06/03/03/50/beach-7239311_960_720.jpg'
    ),
    new Picture(
        'Alpine Forest',
        'bruno brave',
        1292,
        true,
        '2022/01/17/11/16/alpine-6944487_960_720.jpg'
    ),
    new Picture(
        'Lighthouse',
        'bruno brave',
        792,
        false,
        '2022/01/04/16/01/lighthouse-6915406_960_720.jpg'
    ),
    new Picture(
        'Sea',
        'bruno brave',
        892,
        true,
        '2018/12/14/10/23/sea-3874707_960_720.jpg'
    ),
    new Picture(
        'Dolphin',
        'bruno brave',
        196,
        false,
        '2016/11/12/14/07/dolphin-1818853_960_720.jpg'
    ),
    new Picture(
        'Macaw',
        'bruno brave',
        1792,
        true,
        '2021/07/24/01/53/macaw-6488474_960_720.jpg'
    ),
    new Picture(
        'Fishing',
        'bruno brave',
        1992,
        true,
        '2020/07/08/04/07/sea-5382487_960_720.jpg'
    )
]
export {
    picturesArray
};