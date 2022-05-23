let container = document.getElementById("maindata");

let Students = JSON.parse(localStorage.getItem("Students")) || [];
let trash = JSON.parse(localStorage.getItem("trash")) || [];
// let no_of_std = document.getElementById("noofs");
// let no = Students.length;
// no_of_std.innerText = no;

Students.forEach(function(e,i){
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    
    let img = document.createElement("img");
    img.src = e.image;
   td1.append(img);
    
    let td2 = document.createElement("td");
    td2.innerHTML = e.name;
    

    let td3= document.createElement("td");
    td3.innerHTML = e.course;
    

    
    let td4 = document.createElement("td");
    td4.innerHTML = e.unit;
    

    let td5 = document.createElement("td");
    td5.innerHTML = e.batch;
   

    let td6 = document.createElement("td");
   
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.backgroundColor = "red";
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.padding = "5px 5px 5px 5px "
    btn.addEventListener("click", function()
    {
        remove(i)
        
   
         
          location.reload();
});
    td6.append(btn);

    tr.append(td1,td2,td3,td4,td5,td6);
    

    document.querySelector("tbody").append(tr);

});

function remove(i){
    trash.push(Students[i]);
    localStorage.setItem("trash", JSON.stringify(trash));

        if(confirm("Sure, You wamt to remove?")){
            
             
            
            Students.splice(i,1);
        
         localStorage.setItem("Students", JSON.stringify(Students));
        
    }
}


let no_of_std = document.getElementById("noofs");
function calculate(){
    let obj ={};
    for(let i=0;i<Students.length;i++){
        if(obj[Students[i].batch] === undefined){
            obj[Students[i].batch] = 1;
        }
        else{
            obj[Students[i].batch]++;
        }
    }
    
    
   for(let key in obj){
    let d = document.createElement("div");
    d.innerText = `| ${key}:- ${obj[key]} |`;
    no_of_std.append(d); 
   }

    console.log(obj);
}

calculate(); 
