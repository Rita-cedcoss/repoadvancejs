const arr=[];
 function add()
 {
   let userid= document.getElementById('uid').value;

   let username= document.getElementById('username').value;

   let salary= document.getElementById('salary').value;

var obj={userid:userid,username:username,salary:salary};
arr.push(obj);
 
populate();

}
function populate(){

var text="";
text = "<table id='tbl2'><tr><th>ID</th><th>Name</th><th> salary</th><th>Action</th></tr>"
for(i=0;i<arr.length;i++){
    text+="<tr><td>"+arr[i].userid+"</td><td>"+arr[i].username+"</td><td>"+arr[i].salary+"</td><td><button onclick='deleteElement(this)'>delete</button></td></tr>"
}
document.getElementById('tbleData').innerHTML=text;
text="</table>"

}



function deleteElement(args)
{
    tr=args.parentNode.parentNode;
   
    let index=tr.rowIndex;
      
  arr.splice(index-1,1);
  populate();
  if(arr.length==0)
  {
    document.getElementById('tbleData').innerHTML=" ";

  }

}


