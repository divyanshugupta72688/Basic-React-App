/*
1. REACT=>
         React is a JavaScript library used for building user interfaces (UI).
Example:
React is used to build interactive websites and web applications.

2. COMPONENT=>
            A component is a reusable piece of UI that has its own logic and appearance.

Example:
Navbar, Footer, Button, and Sidebar are common React components.

3. JSX=>
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

14. EVENT ME KABHI BHI METHOD KO EXECUTE NAHI KARNA KYUKI AGAR YE KAR DOGE TO EK BAAR HII EVENT EXECUTE HOGA AUTOMATIC!
15.FORM KO SUBMIT KARTE TIME BHT SAARE DEFAULT BEHAVOIR CREATE HOTE HAI USE ROKNE KE LIYE event.preventDefault() use karte hai.

16.STATE=>State is a built-in React feature used to store and manage data in a component. When the state changes, 
          React re-renders the component to update the UI.
          component ke under jo bhi change hote hai vo UI ko rerender nahi karwa paate hai...

17. HOOKS EK AISA FUNCTON YA METHOD HAI JO AUR FUNCTIONALITY DETE HAI REACT KE UNDER
HOOKS WERE NEW ADDITION IN 16.8 REACT


18.UseState is a React Hook that allows us to create and manage state variables in a functional component. When the state changes, 
   React re-renders the component to update the UI.
USE STATE RETURNS AN ARRAY WITH EXACTLY TWO VALUE

19.import { useState } from "react";

export default function Counter(){
    let[count,setCount] = useState(0);
    
    let incCount=()=>{
        // setCount(count+1);//asynchronous function hota hai..
        // setCount(count+1);// increase ek baar hii hoga chahe jitni baar bhi ye statment likh lu.
        // if u want execute upper lines then u have to call back.by following
        setCount((currvalue)=>{
            return currvalue+1;
        });
        setCount((currvalue)=>{
            return currvalue+1;
        });
        
    }
    return(
        <div>
        <h1>Count={count}</h1>
        
        <button onClick={incCount}>Increase Button!</button>
        </div>
    )
};

20.LEXICAL SCOPING=>Lexical scoping means a function's access to variables is determined by where the function is defined in the source code
Function kahan likha gaya hai, uske basis par decide hota hai ki woh kaun-se variables access kar sakta hai.
EXAMPLE =>
  
  function outer(){
  let name = "Divyanshu Gupta"
  console.log(secret)// it can not access the secret varriable
  function inner(){
  let secret = "evrything is possible in my life "
  console.log(name) it can access the name varriable
  }
  function innertwo(){
  console.log(secret)// it can not access the secret varriable
  console.log(name) it can also access the name varriable
  }
  inner();
  innertwo()
  }
  outer();

IN SIMPLE WORD=> BAAP SE BETA LE SAKTA HAI LEKIN BETE SE BAAP NAHI LE SAKTA AUR BHAI BHAI APAS ME SHARE NAHI KR SAKTE..

21.CLOSURE=>A closure is a function that remembers and accesses variables from its lexical scope, even when executed outside that scope.
EXAMPLE=>function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let result = outer();

result();
result();
result();

OUTPUT=>1
        2
        3

        IN SIMPLW WORD=>Jab outer function khatam ho jaata hai, tab bhi inner function apne outer function ke variable ko yaad rakh sakta hai.
22.

        */

