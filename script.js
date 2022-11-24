function create1(tag){
    var ele = document.createElement(tag);    
    return ele;
}
function create2(tag,content){
    var ele = document.createElement(tag);
    ele.innerHTML=content;
    return ele;
}
function create3(tag,attrname,attrvalue){
    var ele=document.createElement(tag);    
    ele.setAttribute(attrname,attrvalue);       
    return ele;
}
function create4(tag,attrname,attrvalue,content){
    var ele=document.createElement(tag);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;    
    return ele;
} 
function create5(tag,a1,v1,a2,v2,a3,v3){
    var ele = document.createElement(tag);
    ele.setAttribute(a1,v1);
    ele.setAttribute(a2,v2);
    ele.setAttribute(a3,v3);    
    ele.setAttribute('required', '');
    return ele;
}
function create6(tag,a1,v1,a2,v2,a3,v3,a4,v4){
    var ele = document.createElement(tag);
    ele.setAttribute(a1,v1);
    ele.setAttribute(a2,v2);
    ele.setAttribute(a3,v3);
    ele.setAttribute(a4,v4);    
    return ele;
}

var container = create3("div","class","container");
var row = create3("div","class","row");
var col = create3("div","class","col-md-4");
var left = create3("div","class","left");
var p = create2("h1","Form Submission:");
//form 
var forms = create3("form","id","form");

//firstname
var labelfn = create4("label","for","first-name","First Name:");
var bfn = create1("br");
var inputfn = create5("input","type","text","id","first-name","placeholder","First Name");
var bfn1 = create1("br");

//lastname
var labell = create4("label","for","last-name","Last Name:");
var bl = create1("br");
var inputl = create5("input","type","text","id","last-name","placeholder","Last Name");
var bl1 = create1("br");

//gender
var labelg = create2("label","Gender:&nbsp;");
var inputm = create6("input","type","radio","name","gender","id","Male","value","Male");
var labelm = create2("label","&nbsp;Male&nbsp;");
var inputf = create6("input","type","radio","name","gender","id","Female","value","Female");
var labelf = create2("label","&nbsp;Female");
var bg = create1("br");


//choice of food
var labelfood = create4("label","for","food","Choice of Food : <i>(must atleast any 2)</i>");
var bf = create1("br");

//food 1
var inputf1 = create6("input","type","checkbox","name","food","id","north-indian","value","North Indian");
var labelf1 = create2("label","&nbsp;Chettinadu");
var bf1 = create1("br");

//food2
var inputf2 = create6("input","type","checkbox","name","food","id","south-indian","value","South Indian");
var labelf2 = create2("label","&nbsp;South Indian");
var bf2 = create1("br");

//food3
var inputf3 = create6("input","type","checkbox","name","food","id","chinese","value","Chinese");
var labelf3 = create2("label","&nbsp;Non-vegeterian");
var bf3 = create1("br");

//food4
var inputf4 = create6("input","type","checkbox","name","food","id","japanese","value","Japanese");
var labelf4 = create2("label","&nbsp;Vegeterian");
var bf4 = create1("br");

//food5
var inputf5 = create6("input","type","checkbox","name","food","id","seafood","value","Sea Food");
var labelf5 = create2("label","&nbsp;Sea Food");
var bf5 = create1("br");


//Address
var labela = create4("label","for","address","Address:");
var ba = create1("br");
var text = create5("textarea","type","text","id","address","placeholder","Address");
var ba1 = create1("br");

//pincode
var labelp = create4("label","for","pincode","PIN:");
var bp = create1("br");
var inputp = create5("input","type","text","id","pincode","placeholder","Pincode");
var bp1 = create1("br");

//state
var labels = create4("label","for","state","State:");
var bs = create1("br");
var inputs = create5("input","type","text","id","state","placeholder","State");
var bs1 = create1("br");

//country
var labelc = create4("label","for","country","Country:");
var bc = create1("br");
var inputc = create5("input","type","text","id","country","placeholder","Country");
var bc1 = create1("br");

//button
var button = create5("button","type","button","id","submit","onclick","order()");
button.innerHTML = "submit";

//table
var col1 = create3("div","class","col-md-8");
col1.innerHTML = `
<h1>Temporary Database</h1>
<table class="table border">
<head>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Food</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>State</th>
        <th>Country</th>
    </tr>
</head>
<tbody id="tb"></tbody>
</table>`


forms.append(labelfn,bfn,inputfn,bfn1,labell,bl,inputl,bl1,labelg,inputm,labelm,inputf,labelf,bg,
    labelfood,bf,inputf1,labelf1,bf1,inputf2,labelf2,bf2,inputf3,labelf3,bf3,inputf4,labelf4,bf4,inputf5,labelf5,bf5,
    labela,ba,text,ba1,labelp,bp,inputp,bp1,labels,bs,inputs,bs1,labelc,bc,inputc,bc1,button);

left.append(p,forms);
col.append(left);
row.append(col,col1);
container.append(row);
document.body.append(container);


//Javascript code
function order(){


    //getvalues 
    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var gender = document.querySelector(`input[name="gender"]:checked`).value;
    var foods = food();
    var address = document.getElementById("address").value;
    var pin = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    //post on table
    var tr = document.createElement("tr");
    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));
    var td6 = tr.appendChild(document.createElement("td"));
    var td7 = tr.appendChild(document.createElement("td"));
    var td8 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = gender;
    td4.innerHTML = foods;
    td5.innerHTML = address;
    td6.innerHTML = pin;
    td7.innerHTML = state;
    td8.innerHTML = country;
    document.getElementById("tb").appendChild(tr);
    var my_form = document.getElementById("form");
    my_form.reset(); 

}

//get selected checkbox value
function food(){
    var temp=[];    
var food1 = document.getElementsByName("food");
for (var i = 0; i < food1.length; i++) {
    if (food1[i].checked){
        temp.push(food1[i].value);
     }
}    
if(temp.length>=2){
    return temp.join(" ");     
}else{
    alert("select minimum 2");    
    
}
};