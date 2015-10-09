/**
 * Created by session1 on 10/8/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Race', 'Mean Income',{ role: 'style' }],
        ['Asian', 97562, 'purple'],
        ['White', 78890, 'red'],
        ['Hispanic', 57534, 'brown'],
        ['Black', 51230, 'blue'],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {
        title: 'Average Income by Race',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Mean Income',
            minValue: 0
        },
        vAxis: {
            title: 'Race'
        },
        legend: { position: "none" }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(view, options);
}