var jsonLines = [
    {id: 'one', x1: 300, y1: 100, x2: 500, y2: 500, stroke : 'black'},
    {id: 'two', x1: 100, y1: 100, x2: 100, y2: 500, stroke: 'red'},
    {id: 'three', x1: 800, y1: 300, x2: 400, y2: 700, stroke: 'blue'},
    {id: 'four', x1: 900, y1: 700, x2: 200, y2: 800, stroke: 'purple'}
];
var x = d3.select('html').append('body').append('svg').attr('width', 1000).attr('height', 1000);
var drag = d3.behavior.drag()
    .on('drag', function (d){
        var line = d3.select('#' + d.id);
        for(var i = 0; i < jsonLines.length; i++){
            if(d.id == jsonLines[i].id) {
                continue;
            }
            var lineLog = d3.select('#' + jsonLines[i].id);
//TODO: make the sign equal but give a more reasonable number
            if(lineLog.attr('x1') < d.x1){console.log('hit');};
            if(lineLog.attr('y1') < d.y1){console.log('hit');};
            if(lineLog.attr('x2') < d.x2){console.log('hit');};
            if(lineLog.attr('y2') < d.y2){console.log('hit');};
        }
        line.attr('x1', parseInt(line.attr('x1')) + d3.event.dx)
            .attr('y1', parseInt(line.attr('y1')) + d3.event.dy)
            .attr('x2', parseInt(line.attr('x2')) + d3.event.dx)
            .attr('y2', parseInt(line.attr('y2')) + d3.event.dy);
    });

var line = x.selectAll('line')
    .data(jsonLines)
    .enter()
    .append('line')
    .attr('x1', function(d) {return d.x1;})
    .attr('y1', function(d) {return d.y1;})
    .attr('x2', function(d) {return d.x2;})
    .attr('y2', function(d) {return d.y2;})
    .attr("id", function(d) {return d.id;})
    .attr('stroke-width', 10)
    .attr('stroke', function(d) {return d.stroke;})
    .call(drag);
//TODO: simplify (kept in unsimplified to make it easier to visualize)
