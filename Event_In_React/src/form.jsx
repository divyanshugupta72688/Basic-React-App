function formhandler(event){
    event.preventDefault();
    console.log("form  was submitted")
}
function Formsubmit() {
  return (
    <>
      <form onSubmit={formhandler}>
        <input type="text" placeholder="Enter something" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Formsubmit;
