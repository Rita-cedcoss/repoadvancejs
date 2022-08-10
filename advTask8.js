const objArr=[];
function add()
{
    var id=document.getElementById('uid').value;
    var uname=document.getElementById('username').value;
    var usalary=document.getElementById('salary').value;
    if(usalary<=0)
    {
        debugger;
    }
    const arr={ID:id,name:uname,salary:usalary};
    objArr.push(arr);
    console.log(objArr);
  
    

    populate();
}
function populate()
{
    var text="";
    text="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
    for(i=0;i<objArr.length;i++)
    {
      text+="<tr><td>"+objArr[i].ID+"</td><td>"+objArr[i].name+"</td><td>"+objArr[i].salary+"</td><tr>";

    }
    document.getElementById('tbleData').innerHTML+=text;
    text="</table>";


}
