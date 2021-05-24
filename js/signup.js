function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById('demo').innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "js/ajax_info.txt", true);
    xhttp.send();
}

loadDoc();




    function toJSONString(form) {
        let obj = {};
        let elements = document.querySelectorAll("input");

        for (let i = 0; i < elements.length; i++)
        {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if(name) {
                obj[name] = value;
            }
        }
        console.log(obj);
        return JSON.stringify(obj);

    }


document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById("signup-form");
    var output = document.getElementById("output1");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let userDataJson = toJSONString(this);
        console.log(userDataJson);
        localStorage.setItem('userDataLS', userDataJson);
        output.innerHTML = userDataJson;
    },false)

})

