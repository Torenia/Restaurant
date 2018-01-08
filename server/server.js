// include the http module

var http = require('http');

var tables = [["10.00-11.00", "11.00-12.00", "12.00-13.00", "13.00-14.00", "14.00-15.00","15.00-16.00","16.00-17.00", "17.00-18.00", "18.00-19.00", "19.00-20.00", "20.00-21.00", "21.00-22.00", "22.00-23.00", "23.00-24.00"],
    ["10.00-11.00", "11.00-12.00"]]

// create a webserver
http.createServer(function (request, res) {

    // respond to any incoming http request
    res.setHeader("Access-Control-Allow-Origin","*"); // to response add header that allow request from any url

    if (request.url.includes("table")) {
        var tableIndex = request.url.split("/")[2];//http://localhost:1337/table/0 -> tableIndex=0
        var responce = tables[tableIndex]; //tables[0] -> ["10.00-11.00", "11.00-12.00"]
        res.end(JSON.stringify(responce)); //["10.00-11.00", "11.00-12.00"] convert to JSON
    }

    if (request.url.includes("reserve")) {
        var jsonString = '';

        request.on('data', function (data) { // receive body request like string
            jsonString += data;
        });

        request.on('end', function () { // when all data came ->
            var reserveRequest = JSON.parse(jsonString); // convert JSON to object
            var slotsForTable = tables[reserveRequest.tableNumber]; // selected table
            var reservedTime = slotsForTable.splice(reserveRequest.checked, 1); // delete selected time for reserve
            res.end("Dear " + reserveRequest.name + " your table is reserved for time " + reservedTime);
        });
    }

}).listen(1337, '127.0.0.1'); //turn on server on port 1337
