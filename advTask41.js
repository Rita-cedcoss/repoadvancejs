class Employee{


    addJson(args)
    {
      var myObj=JSON.parse(args);
      this.id=myObj.id;
      this.name=myObj.name;
      this.salary=myObj.salary;
    }
}
var obj=new Employee();
const objarr='{"id":"1","name":"Raj","salary":"22000"}';
// const objarr='[{"id":"1","name":"Raj","salary":"22000"},{"id":"1","name":"Raj","salary":"22000"},{"id":"1","name":"Raj","salary":"22000"}]';

obj.addJson(objarr);
console.log(obj);

var text="";

 text="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
  
      text+= "<tr><td>"+obj.id+"</td><td>"+obj.name+"</td><td>"+obj.salary+"</td></tr>"
     
    document.getElementById('outer').innerHTML=text;
   text+="</table>";
