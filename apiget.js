console.log("hello");
const api_url = "https://covid19-api-philippines.herokuapp.com/api/top-regions";



async function func(){
const response = await fetch(api_url);
const data = await response.json();
console.log(data);

var outputHtml = "";



outputHtml += "<table border = 1>";
outputHtml += "<tr>";
outputHtml += "<th>Regions</th>";
outputHtml += "<th>Cases</th>";
outputHtml += "<th>Recoveries</th>";
outputHtml += "<th>Deaths</th>";
outputHtml += "</tr>"


for(var i = 0; i < 18; i++){
    outputHtml += "<tr>";
    outputHtml += "<td>" + data['data'][i]['region']; + "</td>"
    outputHtml += "<td>" + data['data'][i]['cases']; + "</td>"
    outputHtml += "<td>" + data['data'][i]['recovered']; + "</td>"
    outputHtml += "<td>" + data['data'][i]['deaths']; + "</td>"
    outputHtml += "</tr>";

   

}






outputHtml += "</table>"



document.getElementById("outp").innerHTML = outputHtml;

}
func()


