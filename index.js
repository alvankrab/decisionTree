$(document).ready(function() { 
    var treeData = {};
    $('#app').html('Hello World!');
    $.getJSON('./data.json', function(data){
        alert(data);
    });
});

function getAnswers() {

}