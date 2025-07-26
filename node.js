let colorchanger= document.querySelector("btn");
let work=()=>{
    color="white"
    if(color==="white"){
        backgroundColor="brown";
    }else{
        backgroundColor="white";
    }
}
colorchanger.addEventListener("onclick",work);