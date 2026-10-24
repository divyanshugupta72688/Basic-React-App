import Product from "./Product";

function ProductTab(){
    return (
        <>
        <Product title = "Phone" Price = {30000} />
         <Product title = "Laptop" Price = {40000}/>
          <Product title = "Mixy" price={20000}/>
        </>
    );
}

export default ProductTab;