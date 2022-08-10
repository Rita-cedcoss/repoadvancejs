const arr=[{id:1, uname:"Rohit" ,salary:24000, upadateSalary:""},
{id:2, uname:"Rohit" ,salary:24000, upadateSalary:""},
{id:3, uname:"Rohit" ,salary:24000, upadateSalary:''},
{id:4, uname:"Rohit" ,salary:24000, upadateSalary:''}
];
// console.log(arr);
function populate()
{
        // alert();
  var text="";
  text="<table><tr><th>Id</th><th>Name</th><th>salary</th><th>Updatedsalary</th></tr>";
  for(var i=0;i<arr.length;i++)
  {
    text+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].uname+"</td><td>"+arr[i].salary+"</td><td>"+arr[i].upadateSalary+"</td></tr>"

  }
  console.log(arr);
  document.getElementById('outer').innerHTML=text;
  text="</table>";

}
populate();
Updatedsalary();
function Updatedsalary()
{
   
   try
   {
    for(i=0;i<arr.length;i++)
    {
     
        var userSal=arr[i].salary*1.10;
        // console.log(userSal);
        arr[i].upadateSalary=userSal;
        
      
    }
    console.log(arr);
    populate();
   }
   catch(e)
   {
    alert("dfbvdfs");
   }

}