{/* on click event */}
function handleclick() {
  console.log("hello!");
}
{/* on mouse hover event  */}
function onmouseover() {
  console.log("Bye!");
}
{/* on dbl click  event */}
function dblclick(){
    console.log('you Click Twice!');
    
}
export default function demo() {
  return (
    <div>
      <button onClick={handleclick}>click Me!</button>
      <p onMouseOver={onmouseover}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos natus
        perspiciatis dolorem molestias tempore animi ducimus consequatur enim
        placeat, sapiente atque provident velit assumenda, voluptates sequi
        iusto! Dolore, quis. Ipsam?
      </p>
      <button onDoubleClick={dblclick}>click me twice</button>
    </div>
  );
}
