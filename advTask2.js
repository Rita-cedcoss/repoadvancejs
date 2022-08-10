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