var catalog = [
    {
        _id: "random",
        title: "Canada Outfit",
        price: 59.99,
        stock: 15,
        category: "Clothes",
        discount: 10,
        image: "images/canada.jpg",
    },
    {
        _id: "random",
        title: "Dubai Outfit",
        price: 79.99,
        stock: 1,
        category: "Clothes",
        discount: 10,
        image: "images/DubaiOutfit.jpg",
    },
    {
        _id: "random",
        title: "Cali Outfit",
        price: 39.99,
        stock: 7,
        category: "Clothes",
        discount: 10,
        image: "images/California.jpg",
    },
    {
        _id: "random",
        title: "Greece Outfit",
        price: 89.99,
        stock: 10,
        category: "Clothes",
        discount: 10,
        image: "images/Greece.jpg",
    },
    {
        _id: "random",
        title: "New York Outfit",
        price: 59.99,
        stock: 12,
        category: "Clothes",
        discount: 10,
        image: "images/NewYork.jpg",
    },
    {
        _id: "random",
        title: "Utah Outfit",
        price: 69.99,
        stock: 15,
        category: "Clothes",
        discount: 10,
        image: "images/Utah.jpg",
    }


];


class DataService{
    getCatalog(){
        //this method should retrive the data from the server

        //var catalog = request(); 

        return catalog;
    }
}

export default DataService;