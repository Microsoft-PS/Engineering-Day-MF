(function() {

    // window object
    window.addEventListener('mycustomevent', function(e) {
        var label = document.createElement("h3");
        label.innerText = "This is Handled by window. Event Payload: " + JSON.stringify(e.detail);
        document.body.appendChild(label);
    });

    // body 
    document.body.addEventListener('mycustomevent', function(e) {
        var label = document.createElement("h3");
        label.innerText = "This is Handled by body tag. Event Payload: " + JSON.stringify(e.detail);
        document.body.appendChild(label);
    });

    // div tag
    document.getElementById('containerDiv').addEventListener('mycustomevent', function(e) {
        var label = document.createElement("h3");
        label.innerText = "This is Handled by Div tag. Event Payload: " + JSON.stringify(e.detail);
        document.body.appendChild(label);
        //e.stopPropagation();
    });

    // h1 tag
    document.getElementById('htmlelement').addEventListener('mycustomevent', function(e) {
        var label = document.createElement("h3");
        label.innerText = "This is Handled by H1 tag. Event Payload: " + JSON.stringify(e.detail);
        document.body.appendChild(label);

    });

    var payload = {
        "productId": "101",
        "productName": 'Fixed Deposit'
    };
    var event = new CustomEvent('mycustomevent', { bubbles: true, cancelable: true, detail: payload });


    var element = document.getElementById("htmlelement");
    element.dispatchEvent(event);

})();