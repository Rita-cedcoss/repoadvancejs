class arrJSON1
    {
       addJson(objJson)
       {
      
        var objJson=JSON.parse(objJson);
        // console.log(objJson);
        var text="";

        var text="";
       text="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>"
        text+= "<tr><td>"+objJson.id+"</td><td>"+objJson.name+"</td><td>"+objJson.salary+"</td></tr>"
        document.getElementById('outer').innerHTML=text;
       text+="</table>";

       }

    }
  var obj=new arrJSON1();
  const objarr='{"id":"1","name":"Raj","salary":"24000"}';
  obj.addJson(objarr);

  
