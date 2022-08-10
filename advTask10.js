"use strict";

const arr=[{id:1, uname:"Rohit" ,salary:24000,},
{id:2, uname:"Raj" ,salary:24000,},
{id:3, uname:"karan" ,salary:24000, },
{id:4, uname:"Ram" ,salary:24000, }
];
function populate()
{
        // alert();
  var text="";
  text="<table><tr><th>Id</th><th>Name</th><th>salary</th></tr>";
  for(var i=0;i<arr.length;i++)
  {
    text+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].uname+"</td><td>"+arr[i].salary+"</td></tr>"

  }
  console.log(arr);
  document.getElementById('outer').innerHTML=text;
  text="</table>";

}

Updatedsalary();
function Updatedsalary()
{
    for(var i=0;i<arr.length;i++)
    {
     
        var userSal=30000;
        arr[i].salary=userSal; 
    }
    console.log(arr);
    populate();
   
}