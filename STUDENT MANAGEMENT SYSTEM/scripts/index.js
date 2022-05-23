let Student = function(name,course,unit,image,batch){
    this.name = name;
    this.course = course;
    this.unit = unit;
    this.image = image;
    this.batch = `Ft-Web-${batch}`;
}

let Students = JSON.parse(localStorage.getItem("Students")) || [];

function Submit(){
    event.preventDefault();
    let form = document.querySelector("form");

    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s = new Student(name,course,unit,image,batch);
   
    Students.push(s);
    console.log(Students)
    localStorage.setItem("Students", JSON.stringify(Students))
    location.reload();
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