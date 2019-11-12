 queue()
  .defer(d3.csv, "assets/data/planetary-data.csv")
  .await(makeGraphs);

 function makeGraphs(error, planetData) {
 }

 /* planetData.forEach(function(d) {
   d.perihelion = parseInt(d.perihelion);
   d.aphelion = parseInt(d.aphelion);
   d.mass = parseInt(d.mass);
   d.numberOfMoons = parseInt(d.numberOfMoons);
  })

  show_planet_selector(ndx)
  show_distance_from_sun(ndx)

  dc.renderAll();
 }

//..................................................................PLANET DROPDOWN//

 function show_planet_selector(ndx) {
  var dim = ndx.dimension(dc.pluck('name'));
  var group = dim.group();

  dc.selectMenu("#planet-selector")
   .dimension(dim)
   .group(group);
 }

//..................................................................ESCAPE VELOCITY//




//..................................................................PLANETARY COMPOSITION PIE CHART//

 /*function makeGraphs(error, planetData) {
  var ndx = crossfilter(planetData);

  var size_dimension = ndx.dimension(function(d) {
   if (d.composition === "Rock")
    return "Rock";
   else
    return "Gas";
  });

  var size_group = size_dimension.group();

  console.log(size_group.all());

  dc.pieChart("#composition")
   .height(330)
   .radius(90)
   .dimension(size_dimension)
   .group(size_group)

  dc.renderAll();
 }

//..................................................................PLANETARY MASS BAR CHART//

 function makeGraphs(error, planetData) {
  var ndx = crossfilter(planetData);
  var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_mass = name_dim.group().reduceSum(dc.pluck('mass'));


  dc.barChart("#planet-mass")
   .width(600)
   .height(300)
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_mass)
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .xAxisLabel("Planet")
   .yAxisLabel("Mass (x10^24 kg)")
   .yAxis().ticks(8);

  dc.renderAll();
 }

//..................................................................NUMBER OF MOONS PIE CHART//
 
 function makeGraphs(error, planetData) {
  var ndx = crossfilter(planetData);

  var name_dim = ndx.dimension(dc.pluck('name'));
  var total_number_of_moons = name_dim.group().reduceSum(dc.pluck('numberOfMoons'));

  dc.pieChart("#number-of-moons")
   .height(330)
   .radius(90)
   .dimension(name_dim)
   .group(total_number_of_moons);
   
   dc.renderAll();
 }

//..................................................................SUN DISTANCE BAR CHART//

  function show_distance_from_sun(ndx) {
   var dim = ndx.dimension(dc.pluck('distanceFromSun'));
   var group = dim.group();

   dc.barChart("#sun-distance")
    .width(350)
    .height(250)
    .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Gender")
    .yAxisLabel("Frequency")
    .yAxis().ticks(20);
    
    dc.renderAll();
  }*/