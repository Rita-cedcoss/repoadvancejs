const arr=[{uname:"Raj",usalary:20000,updatedSal:''},{uname:"Rahul",usalary:22000,updatedSal:''}];
function populate()
{
        // alert();
  var text="";
  text="<table><tr><th>Name</th><th>salary</th><th>Updatedsalary</th></tr>";
  for(var i=0;i<arr.length;i++)
  {
    text+="<tr><td>"+arr[i].uname+"</td><td>"+arr[i].usalary+"</td><td>"+arr[i].updatedSal+"</td></tr>"

  }
  console.log(arr);
  document.getElementById('outer').innerHTML=text;
  text="</table>";

}
populate();

arr.map((x)=>x.updatedSal=x.usalary*0.15);
populate();


