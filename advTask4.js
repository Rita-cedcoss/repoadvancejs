class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
}

let obj=new Employee(1,"john",10000);

var text="";
  text="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
 text+= "<tr><td>"+obj.id+"</td><td>"+obj.name+"</td><td>"+obj.salary+"</td></tr>"
    
 document.getElementById('outer').innerHTML=text;
  text+="</table>";


  const arr='{"data":[{"id":"1","name":"Raj","salary":"24000"},{"id":"2","name":"simran","salary":"20000"},{"id":"3","name":"Rahul","salary":"22000"}]}';

//  arr.push(myJSON);
//  console.log(arr);
 const myObj=JSON.parse(arr);
 console.log(myObj);
 function populate(){
 var text="";

 text="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
    for(i=0;i<myObj.data.length;i++)
    {
      text+= "<tr><td>"+myObj.data[i].id+"</td><td>"+myObj.data[i].name+"</td><td>"+myObj.data[i].salary+"</td></tr>"
    }  
    document.getElementById('outer').innerHTML=text;
   text+="</table>";

}
populate();