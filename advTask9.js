const objArr=[];
function add()
{
    var id=document.getElementById('uid').value;
    var uname=document.getElementById('username').value;
    var usalary=document.getElementById('salary').value;
    try
    {
    if(id=="" && uname=="" && usalary=="")
    {
       throw "All fields must be filled";
    }
    if(uname.match(/[0-9]/))
    {
        throw "pleae enter alphabet";
    }
    if(id==""||uname==""||usalary=="")
    {
        throw "All fields must be filled";
    }

  
    const arr={ID:id,name:uname,salary:usalary};
    objArr.push(arr);
    console.log(objArr);
    populate();
    }
    catch(e)
    {
       document.getElementById('outercatch').innerHTML=e;
    }
    

   
}
function populate()
{
    var text="";
    text="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
    for(i=0;i<objArr.length;i++)
    {
      text+="<tr><td>"+objArr[i].ID+"</td><td>"+objArr[i].name+"</td><td>"+objArr[i].salary+"</td><tr>";

    }
    document.getElementById('tbleData').innerHTML=text;
    text="</table>";


}
