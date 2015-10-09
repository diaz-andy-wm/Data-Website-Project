/**
 * Created by session1 on 10/9/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Income Range', 'Number of Households'],
        ['Below $9,999', 4571+4320],
        ['$10k - $49,999', 6766+6779+6865+6363+6232+5857+5430+5060],
        ['$50k - $99,999', 5084+4220+4477+3709+3737+3484+3142+2750+2665+2339],
        ['$100k - $149,999', 2679+2070+1922+1623+1863+1452+1512+1219+1290+1024],
        ['$150k - $199,999', 1146+848+875+786+717+607+619+556+485+436],
        ['Above $200k', 7005]
    ]);

    var options = {
        title: 'Number of Households by Income Range',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}