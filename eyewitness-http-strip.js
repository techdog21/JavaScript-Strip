var x = document.querySelectorAll("a");
var myarray = []
var str1 = String
for (var i=0; i<x.length; i++){

var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].href;

myarray.push([cleantext,cleanlink]);

};
function make_table() {
    var table = '<table><thead><th>Name</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
        str1 = myarray[i][0]
        if (str1.startsWith('http')) {
           table += '<tr><td>'+ myarray[i][0] +'</td></tr>'; 
        }   
    };
 
    var w = window.open("");
w.document.write(table); 

}
make_table()
