import "./Product.css"
function Product({title ,Price }){
    {/* DYNAMIC STYLING */}
    let styles = {backgroundColor: Price>30000 ? "yellow":""}
    return (
    <div className="Product"  style={styles}>
    <h1>Title :{title}</h1>
    <h3>Price :{Price}</h3>
    {/* CONDITION */}
    {Price>30000 ?<p>Discount of 5 %</p>:null}
    </div>
    );
}

export default Product;