function MsgBox({UserName,TextColor}){
    let styles = {backgroundColor:TextColor}
   
    return(
        <div style={styles}>
        <h1>UserName : {UserName}</h1>
        <h3>TextColor : {TextColor}</h3>
        
        </div>
    );
}
export default MsgBox;