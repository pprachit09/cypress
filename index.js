
var xl = require('excel4node');

//create new instance of workbook class
var wb = new xl.Workbook();

//Add new worksheet
var ws = wb.addWorksheet('Sheet1');


var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d-H-M');
var https =require('https');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

ws.cell(2,1).number(100);

wb.write('sample'+formatted+'.xlsx');

parser.on('error', function(err) { console.log('Parser error', err); });

var data = '';
https.get('https://www.pfizer.cl/sitemap.xml', function(res) {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      res.on('data', function(data_) { data += data_.toString(); });
      res.on('end', function() {
        //console.log('data', data);
        parser.parseString(data, function(err, result) {
            for (i = 0; i < result.urlset.url.length; i++){
                console.log(result.urlset.url[i].loc.toString());
            }
        });
      })
    }
})

console.log(formatted);