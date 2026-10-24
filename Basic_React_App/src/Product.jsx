import "./Product.css"
function Product({title ,Price }){
    return (
    <div className="Product">
    <h1>Title :{title}</h1>
    <h3>Price :{Price}</h3>
    {Price>30000 ?<p>Discount of 5 %</p>:null}
    </div>
    );
}

export default Product;