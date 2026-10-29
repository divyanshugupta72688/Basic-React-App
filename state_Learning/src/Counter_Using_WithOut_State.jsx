// it will not update the UI uske liye hume STATE KO CHAnge krna padta hai..
export default function Counter(){
    let count = 0;
    function incCount(){
        count = count+1;
        console.log(count);
        
    }
    return (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={incCount}>Submit</button>
        </div>
    )
}