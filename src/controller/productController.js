const Product = require('../models/productModel')

const Addproduct = (req,res) => {

    const data = req.body;
    const name = data.name;
    const description = data.description;
    const price = data.price;
    const categories = data.category;
    const stocks = data.stock;
    const dateAdded = data.dateAdded

    const newProduct = new Product(
        {
            name : name,
            description : description,
            price : price,
            category : categories,
            stock : stocks,
            dateAdded : dateAdded

        }
    );
    newProduct
    .save()
    .then((data)=>{

        res
        .status(201)
        .json({ message: "Product added successfully", data});

})

.catch((err) => {
    res.status(500).json({ message: "Error adding product", err });
});

}



module.exports = {
    Addproduct,
}