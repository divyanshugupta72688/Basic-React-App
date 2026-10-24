
/*


1. REACT
React is a JavaScript library used for building user interfaces (UI).

Example:
React is used to build interactive websites and web applications.


2. COMPONENT
A component is a reusable piece of UI that has its own logic and appearance.

Example:
Navbar, Footer, Button, and Sidebar are common React components.


3. JSX
JSX stands for JavaScript XML.

It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript, mainly used in React.

Example:
const element = <h1>Hello World!</h1>;


4. BABEL
Babel is a JavaScript compiler that can transform JSX into regular JavaScript code.

Example:
JSX:
const element = <h1>Hello World!</h1>;

Transformed JavaScript (simplified):
const element = React.createElement("h1", null, "Hello World!");

6. to CREATE FRONTENED ->npm create vite@latest
7.to start the server-> npm run dev

8.if u want render other function u have to write <Title/>

9. FOR IMPORT AND EXPORT =>
    FOR SINGLE IMPORT AND EXPORT -> import Title from "./Title.jsx" 
                                    export default Title 

    FOR MUTLIPLE IMPORT AND EXPORT -> export{Title ,sum}
                                      import {Title,Sum} from "./Title"
                                      AGAR PARAMTERE DIYA HO DUSRE COMPONENT ME {Sum(2,3)}
10.JAB BHI HUM CHAHTE HAI KI EXTRA NODE CREATE NA HO CHILDREN KO GROUP KARNE KE LIYE TO FREGMANT KA USE KARTE HAI <></>.
11. AGAR HUM JSX KE UNDER JS LIKHNA HO TO {}CURLY BRACKETS KE UNDER LIKHTE HAI..
12.PROPS =>
            Props in React are used to pass data from one component to another component.

Props ka use Parent Component se Child Component mein data pass karne ke liye hota hai.
String ko hum double quotes (" ") mein pass karte hain.
Number ko pass karne ke liye curly braces {} use karte hain.

EXAMPLE =>
*/

function Product({ title, Price }) {
return (
<div className="Product">
<h1>Title: {title}</h1>
<h3>Price: {Price}</h3>
</div>
);
}

function ProductTab() {
return (
<>
<Product title="Phone" Price={30000} />
<Product title="Laptop" Price={40000} />
<Product title="Mixy" Price={5000} />
</>
);
}

export default ProductTab;

/*
OUTPUT =>

Title: Phone
Price: 30000

Title: Laptop
Price: 40000

Title: Mixy
Price: 5000

IMPORTANT =>
Curly braces {} are used to pass JavaScript values or expressions in JSX.

Example:
name="Rahul" // String
Price={30000} // Number
isStudent={true} // Boolean

13. CONITION LIKHNE KA TAREEKA=> {Price>30000 ?<p>Discount of 5 %</p>:null}

*/

