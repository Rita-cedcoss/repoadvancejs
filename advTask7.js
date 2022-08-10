

import {id,name,salary} from './advTask7expo.js';
console.log(id);

const arr=[{id:1,uname:"Raj",usalary:20000,},{id:2,uname:"Rahul",usalary:22000}];

var objImpo={id:id,uname:name,usalary:salary};
arr.push(objImpo);
function populate()
{
        alert();
  var text="";
  text="<table><tr><th>Name</th><th>salary</th><th>Updatedsalary</th></tr>";
  for(var i=0;i<arr.length;i++)
  {
    text+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].uname+"</td><td>"+arr[i].usalary+"</td></tr>"

  }
  console.log(arr);
  document.getElementById('outer').innerHTML=text;
  text="</table>";

}
populate();