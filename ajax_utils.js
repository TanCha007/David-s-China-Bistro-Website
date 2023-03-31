(function (global) {
    //Set up a namespace for our utility
    var ajaxUtils = {};

    //Returns an HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            //For very old IE browsers (optinal)
            return (new ActiveXObject("Microsoft.MXLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return(null);
        }
    }

    var request = getRequestObject();
    var myhandler = null;

    //Makes an Ajax GET request to "requestUrl"...This is called asynchronously which will lead to 'A race condition'. Two pieces of codes racing each other, and whoever wins overwrites the expected result.
    ajaxUtils.sendGetRequest = 
        function (requestUrl, responseHandler) {
            myhandler = responseHandler;
            request.onreadystatechanger = handleResponse(request, responseHandler);
            request.open("GET", requestUrl, true);
            request.send(null);
    };

    //Only calls user provided 'responseHandler'
    //function if response is ready
    //and not an error
    function handleResponse(request, responseHandler) {
        if((request.readyState == 4) & (request.status == 200)) {
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;

}
);