const Product = require("../model/product.model")
const User = require("../model/user.model")

exports.getProduct = function (req, res, next) {
    res.render("products/product")
}

exports.postProduct = async function (req, res, next) {
    const errors = [];
    if (!req.body.name) {
        errors.push('Name is required!')
    }
    if (!req.body.price) {
        errors.push('Price is required!')
    }
    if (!req.body.content) {
        errors.push('Content is required!')
    }
 
    if(errors.length){
        res.render("products/product", {
            errors: errors,
            values: req.body
        });
        return;
    }

    const { name, price, content } = req.body

    let avatar = req.file.path
    console.log(avatar);
    avatar = "/"+avatar.split('\\').slice(1).join('/');
    const data = {
        name, price, content, image: avatar
    }
    try {
        // dung await thi nen cho vao trycath nhe
        const product = await Product.create(data)
        console.log(product);
        res.redirect('productsmanager')

    } catch (error) {
        console.log(error);
    }

}
exports.getProductId = async function (req, res, next) {

    // const {id} = req.params;
    const id = req.params.id;
    const productId = await Product.findById({ _id: id });
    res.render("products/product-detail", { productId }) // truyền productId cơ mà. có phải product đâu: hihi

}

exports.getAllProduct = async function (req, res, next) {
    const product = await Product.find({});
    res.render("products/all-product", { product })
}
exports.deleteProduct = async function (req, res, next) {
    const id = req.params.id;
    const deleId = await Product.findById({_id: id});
    console.log(id);
    if(deleId){
        await Product.findByIdAndDelete({ _id: deleId._id })
        res.redirect('back')
    }
    else{
        res.json({
            status: "user not fao",
        });
    }
    
}