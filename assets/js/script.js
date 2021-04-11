google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Total PTS', 'Mental Ninja', 'Total PTS/Students'],
    ['School 1',    1,      1,     1],
    ['School 2',    2,      2,     2],
    ['School 3',    3,      3,     3],
    ['School 4',    4,      4,     4],
    ['School 5',    5,      5,     5]
  ]);

  var options = {
    title: 'Students Leaderboard (Top 3 School)'
 };

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Total PTS', 'Mental Ninja', 'Total PTS/School'],
    ['School 1',    2,      1,     1],
    ['School 2',    2,      3,     2],
    ['School 3',    3,      1,     1],
    ['School 4',    4,      4,     5],
    ['School 5',    5,      2,     3]
  ]);

  var options = {
    title: 'School Leaderboard (Top 3 School)'
 };

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

$(window).resize(function(){
    drawChart1();
    drawChart2();
  });
