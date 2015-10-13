/**
 * Created by session1 on 10/9/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Salary');

    data.addRows([
        [{v: [8, 0, 0], f: 'Less than 9th Grade'}, 35378],
        [{v: [9, 0, 0], f: 'Some High School'}, 37820],
        [{v: [10, 0, 0], f:'High School Graduate'}, 55241],
        [{v: [11, 0, 0], f: 'Associate Degree'}, 73826],
        [{v: [12, 0, 0], f: 'Bachelors Degree'}, 105146],
        [{v: [13, 0, 0], f: 'Masters Degree'}, 120393],
        [{v: [14, 0, 0], f: 'Doctorate Degree'}, 152344]
    ]);

    var options = {
        title: 'Average Salary for Amount of Education',
        hAxis: {
            title: 'Education Level'
        },
        vAxis: {
            title: 'Average Salary'
        }
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart2_div'));

    chart.draw(data, options);
}