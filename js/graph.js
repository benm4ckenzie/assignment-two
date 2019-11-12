 queue()
  .defer(d3.csv, "data/planetary-data.csv")
  .await(makeGraphs);

 function makeGraphs(error, planetData) {
  var ndx = crossfilter(planetData);

  planetData.forEach(function(d) {
   d.mass = parseInt(d.mass);
   d.gravity = parseInt(d.gravity);
   d.density = parseInt(d.density);
   d.distanceFromSun = parseInt(d.distanceFromSun);
   d.orbitalVelocity = parseInt(d.orbitalVelocity);
   d.orbitalPeriod = parseInt(d.orbitalPeriod);
   d.escapeVelocity = parseInt(d.escapeVelocity);
   d.lengthOfDay = parseInt(d.lengthOfDay);
   d.rotationPeriod = parseInt(d.rotationPeriod);
   d.numberOfMoons = parseInt(d.numberOfMoons);
   d.orbitalInclination = parseInt(d.orbitalInclination);
   d.orbitalEccentricity = parseInt(d.orbitalEccentricity);
  })

  show_planet_selector(ndx);
  show_number_of_moons(ndx);
  show_length_of_day(ndx);
  show_rotation_period(ndx);
  show_orbital_period(ndx);
  show_planet_composition(ndx);
  show_magnetic_field(ndx);
  show_rotation_direction(ndx);
  show_planet_ring_system(ndx);
  show_planetary_mass(ndx);
  show_planetary_temperature(ndx);
  show_orbit_eccentricity(ndx);
  show_orbit_inclination(ndx);
  show_distance_from_sun(ndx);
  show_planet_mass_gravity_relationship(ndx);
  show_planet_density_gravity_relationship(ndx);
  show_planet_distance_velocity_relationship(ndx);
  show_planet_distance_orbitalperiod_relationship(ndx);
  show_planet_orbitalvelocity_orbitalperiod_relationship(ndx);
  show_planet_gravity_escapevelocity_relationship(ndx);

  dc.renderAll();
 }

 //................................................DROPDOWN PLANET SELECTOR//

 function show_planet_selector(ndx) {
  dim = ndx.dimension(dc.pluck('name'));
  group = dim.group();

  dc.selectMenu("#planet-selector")
   .dimension(dim)
   .group(group);
 }

 //................................................NUMBERDISPLAY NUMBER OF MOONS//

 function show_number_of_moons(ndx) {
  var moons_dim = ndx.groupAll().reduceSum(dc.pluck("numberOfMoons"));

  dc.numberDisplay("#number-of-moons")
   .formatNumber(d3.format())
   .valueAccessor(function(d) {
    return d;
   })
   .group(moons_dim)
   .formatNumber(d3.format(".0"));
 }

 //................................................NUMBERDISPLAY LENGTH OF DAY//

function show_length_of_day(ndx) {
 var day_length = ndx.groupAll().reduce(
  function (p, v) {
   p.count++;
   p.total += v.lengthOfDay;
  return p;
  },
  function (p, v) {
   p.count--;
   p.total -= v.lengthOfDay;
  return p;
  },
  function() {
   return {count: 0, total: 0};
  });
  
  dc.numberDisplay("#length-of-day")
   .formatNumber(d3.format(".1f"))
   .valueAccessor(function(d) {
    if (d.count == 0) {
     return 0;
    }
    else {
     return (d.total / d.count);
    }
   })
   .group(day_length);
 }

 //................................................NUMBERDISPLAY ROTATION PERIOD//

function show_rotation_period(ndx) {
 var rotation = ndx.groupAll().reduce(
  function (p, v) {
   p.count++;
   p.total += v.rotationPeriod;
  return p;
  },
  function (p, v) {
   p.count--;
   p.total -= v.rotationPeriod;
  return p;
  },
  function() {
   return {count: 0, total: 0};
  });
  
  dc.numberDisplay("#rotation-period")
   .formatNumber(d3.format(".1f"))
   .valueAccessor(function(d) {
    if (d.count == 0) {
     return 0;
    }
    else {
     return (d.total / d.count);
    }
   })
   .group(rotation);
 }
 
 //................................................NUMBERDISPLAY ORBITAL PERIOD//

function show_orbital_period(ndx) {
 var orbital_period = ndx.groupAll().reduce(
  function (p, v) {
   p.count++;
   p.total += v.orbitalPeriod;
  return p;
  },
  function (p, v) {
   p.count--;
   p.total -= v.orbitalPeriod;
  return p;
  },
  function() {
   return {count: 0, total: 0};
  });
  
  dc.numberDisplay("#orbital-period")
   .formatNumber(d3.format(".1f"))
   .valueAccessor(function(d) {
    if (d.count == 0) {
     return 0;
    }
    else {
     return (d.total / d.count);
    }
   })
   .group(orbital_period);
 }
 

 //................................................PIECHART PLANET COMPOSITION//

 function show_planet_composition(ndx) {
  var composition_dim = ndx.dimension(function(d) {
   if (d.composition === "Rock")
    return "Rock composition";
   else
    return "Gas composition";
  });
  var comp_group = composition_dim.group();

  dc.pieChart("#planetary-composition")
   .height(330)
   .radius(90)
   .dimension(composition_dim)
   .group(comp_group);
 }

 //................................................PIECHART GLOBAL MAGNETIC FIELD//

 function show_magnetic_field(ndx) {
  var magnetic_dim = ndx.dimension(function(d) {
   if (d.globalMagneticField === "Yes")
    return "Magnetic field";
   else
    return "No magnetic field";
  });
  var mag_group = magnetic_dim.group();

  dc.pieChart("#planetary-magnetic-field")
   .height(330)
   .radius(90)
   .dimension(magnetic_dim)
   .group(mag_group);
 }

 //................................................PIECHART PLANETARY ROTATION//

 function show_rotation_direction(ndx) {
  var rotation_dim = ndx.dimension(function(d) {
   if (d.spinDirection === "Retrograde")
    return "Retrograde";
   else
    return "Anterograde";
  });
  var spin_group = rotation_dim.group();

  dc.pieChart("#planetary-spin-direction")
   .height(330)
   .radius(90)
   .dimension(rotation_dim)
   .group(spin_group);
 }

 //................................................PIECHART RING SYSTEM//

 function show_planet_ring_system(ndx) {
  var ring_dim = ndx.dimension(function(d) {
   if (d.ringSystem === "Yes")
    return "Ring system";
   else
    return "No ring system";
  });
  var ring_group = ring_dim.group();

  dc.pieChart("#planetary-ring-system")
   .height(330)
   .radius(90)
   .dimension(ring_dim)
   .group(ring_group);
 }

 //................................................BARCHART PLANETARY MASS//

 function show_planetary_mass(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_mass = name_dim.group().reduceSum(dc.pluck('mass'));

  dc.barChart("#planetary-mass")
   .width(400)
   .height(300)
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_mass)
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .elasticY(true)
   .xAxisLabel("Planet")
   .yAxisLabel("Mass (x 10^24 kg)")
   .yAxis().ticks(10);
 }

 //................................................BARCHART PLANETARY TEMPERATURE//

 function show_planetary_temperature(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_temp = name_dim.group().reduceSum(dc.pluck('meanTemperature'));

  dc.barChart("#planetary-temperature")
   .width(400)
   .height(300)
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_temp)
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .elasticY(true)
   .xAxisLabel("Planet")
   .yAxisLabel("Mean temperature (Degrees Celcius)")
   .yAxis().ticks(10);
 }

 //................................................BARCHART ORBIT ECCENTRICITY//

function show_orbit_eccentricity(ndx) {
 var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_temp = name_dim.group().reduceSum(dc.pluck('orbitalEccentricity'));

  dc.barChart("#orbit-eccentricity")
   .width(400)
   .height(300)
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_temp)
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .elasticY(true)
   .xAxisLabel("Planet")
   .yAxisLabel("Orbit eccentricity (??????)")
   .yAxis().ticks(10);
 }
 
 //................................................BARCHART ORBIT INCLINATION//

function show_orbit_inclination(ndx) {
 var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_temp = name_dim.group().reduceSum(dc.pluck('orbitalInclination'));

  dc.barChart("#orbit-inclination")
   .width(400)
   .height(300)
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_temp)
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .elasticY(true)
   .xAxisLabel("Planet")
   .yAxisLabel("Orbit inclination (degrees)")
   .yAxis().ticks(10);
 }
 
 //................................................ROWCHART DISTANCE FROM SUN//
 
function show_distance_from_sun(ndx) {
 var name_dim = ndx.dimension(dc.pluck('name'));
  var distance_group = name_dim.group().reduceSum(dc.pluck('distanceFromSun'));

  dc.rowChart("#distance-from-sun")
   .width(400)
   .height(300)
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(distance_group)
   .transitionDuration(500)
   .x(d3.scale.linear())
   .xUnits(dc.units.linear)
   .elasticY(true)
   .yAxisLabel("Planet")
   .xAxisLabel("km")
   .xAxis().ticks(10);
 }

 //................................................SCATTERPLOT MASS / GRAVITY RELATIONSHIP//

 function show_planet_mass_gravity_relationship(ndx) {
  var mass_dim = ndx.dimension(dc.pluck("mass"));
  var gravity_dim = ndx.dimension(dc.pluck("gravity"));
  var massDim = ndx.dimension(function(d) {
   return [d.mass, d.gravity, d.name];
  });
  var gravityMassGroup = massDim.group();

  var maxMass = mass_dim.top(1)[0].mass;
  var maxGravity = gravity_dim.top(1)[0].gravity;

  dc.scatterPlot("#planetary-mass-gravity-relationship")
   .width(800)
   .height(400)
   .x(d3.scale.linear().domain([0, maxMass]))
   .y(d3.scale.linear().domain([0, maxGravity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Gravity (m / s^2)")
   .title(function(d) {
    return d.key[2] + " has a mass of " + d.key[0] + " x 10^24 kg and a gravitational pull equating to " + d.key[1] + " m / s^2.";
   })
   .dimension(massDim)
   .group(gravityMassGroup)
   .margins({ top: 10, right: 50, bottom: 75, left: 75 });
 }

 //................................................SCATTERPLOT DENSITY / GRAVITY RELATIONSHIP//

 function show_planet_density_gravity_relationship(ndx) {
  var density_dim = ndx.dimension(dc.pluck("density"));
  var gravity_dim = ndx.dimension(dc.pluck("gravity"));
  var densityDim = ndx.dimension(function(d) {
   return [d.density, d.gravity, d.name];
  });
  var densityGravityGroup = densityDim.group();

  var maxDensity = density_dim.top(1)[0].density;
  var maxGravity = gravity_dim.top(1)[0].gravity;

  dc.scatterPlot("#planetary-gravity-density-relationship")
   .width(800)
   .height(400)
   .x(d3.scale.linear().domain([0, maxDensity]))
   .y(d3.scale.linear().domain([0, maxGravity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Gravity (m / s^2)")
   .title(function(d) {
    return d.key[2] + " has a mass of " + d.key[0] + " x 10^24 kg and a gravitational pull equating to " + d.key[1] + " m / s^2.";
   })
   .dimension(densityDim)
   .group(densityGravityGroup)
   .margins({ top: 10, right: 50, bottom: 75, left: 75 });
 }

 //................................................SCATTERPLOT DISTANCE FROM SUN / ORBITAL VELOCITY RELATIONSHIP//

 function show_planet_distance_velocity_relationship(ndx) {
  var distance_dim = ndx.dimension(dc.pluck("distanceFromSun"));
  var velocity_dim = ndx.dimension(dc.pluck("orbitalVelocity"));
  var velocityDim = ndx.dimension(function(d) {
   return [d.distanceFromSun, d.orbitalVelocity, d.name];
  });
  var distanceVelocityGroup = velocityDim.group();

  var maxDistance = distance_dim.top(1)[0].distanceFromSun;
  var maxVelocity = velocity_dim.top(1)[0].orbitalVelocity;

  dc.scatterPlot("#planetary-distance-velocity-relationship")
   .width(800)
   .height(400)
   .x(d3.scale.linear().domain([0, maxDistance]))
   .y(d3.scale.linear().domain([0, maxVelocity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Orbital velocity (km / s)")
   .xAxisLabel("Distance from the sun (x 10^6 km)")
   .title(function(d) {
    return d.key[2] + " has an orbital velocity of  " + d.key[1] + " km / s at a distance of " + d.key[0] + " x 10^6 km from the sun.";
   })
   .dimension(velocityDim)
   .group(distanceVelocityGroup)
   .margins({ top: 10, right: 50, bottom: 75, left: 75 });
 }

 //................................................SCATTERPLOT DISTANCE FROM SUN / ORBITAL PERIOD RELATIONSHIP//

 function show_planet_distance_orbitalperiod_relationship(ndx) {
  var distance_dim = ndx.dimension(dc.pluck("distanceFromSun"));
  var period_dim = ndx.dimension(dc.pluck("orbitalPeriod"));
  var periodDim = ndx.dimension(function(d) {
   return [d.distanceFromSun, d.orbitalPeriod, d.name];
  });
  var distancePeriodGroup = periodDim.group();

  var maxDistance = distance_dim.top(1)[0].distanceFromSun;
  var maxPeriod = period_dim.top(1)[0].orbitalPeriod;

  dc.scatterPlot("#planetary-distance-orbitalperiod-relationship")
   .width(800)
   .height(400)
   .x(d3.scale.linear().domain([0, maxDistance]))
   .y(d3.scale.linear().domain([0, maxPeriod]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Orbital period (Days)")
   .xAxisLabel("Distance from the sun (x 10^6 km)")
   .title(function(d) {
    return d.key[2] + " has an orbital period of  " + d.key[1] + " days at a distance of " + d.key[0] + " x 10^6 km from the sun.";
   })
   .dimension(periodDim)
   .group(distancePeriodGroup)
   .margins({ top: 10, right: 50, bottom: 75, left: 75 });
 }

 //................................................SCATTERPLOT ORBITAL PERIOD / ORBITAL VELOCITY RELATIONSHIP//

 function show_planet_orbitalvelocity_orbitalperiod_relationship(ndx) {
  var velocity_dim = ndx.dimension(dc.pluck("orbitalVelocity"));
  var period_dim = ndx.dimension(dc.pluck("orbitalPeriod"));
  var periodDim = ndx.dimension(function(d) {
   return [d.orbitalVelocity, d.orbitalPeriod, d.name];
  });
  var velocityPeriodGroup = periodDim.group();

  var maxVelocity = velocity_dim.top(1)[0].orbitalVelocity;
  var maxPeriod = period_dim.top(1)[0].orbitalPeriod;

  dc.scatterPlot("#planetary-orbitalvelocity-orbitalperiod-relationship")
   .width(800)
   .height(400)
   .x(d3.scale.linear().domain([0, maxVelocity]))
   .y(d3.scale.linear().domain([0, maxPeriod]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Orbital period (Days)")
   .xAxisLabel("Orbital velocity (km / s)")
   .title(function(d) {
    return d.key[2] + " has an orbital period of " + d.key[1] + " days and an orbital velocity of " + d.key[0] + " km / s.";
   })
   .dimension(periodDim)
   .group(velocityPeriodGroup)
   .margins({ top: 10, right: 50, bottom: 75, left: 75 });
 }

 //................................................SCATTERPLOT GRAVITY / ESCAPE VELOCITY RELATIONSHIP//

 function show_planet_gravity_escapevelocity_relationship(ndx) {
  var velocity_dim = ndx.dimension(dc.pluck("escapeVelocity"));
  var gravity_dim = ndx.dimension(dc.pluck("gravity"));
  var escapeDim = ndx.dimension(function(d) {
   return [d.gravity, d.escapeVelocity, d.name];
  });
  var gravityEscapeGroup = escapeDim.group();

  var maxVelocity = velocity_dim.top(1)[0].escapeVelocity;
  var maxGravity = gravity_dim.top(1)[0].gravity;

  dc.scatterPlot("#planetary-gravity-escapevelocity-relationship")
   .width(800)
   .height(400)
   .x(d3.scale.linear().domain([0, maxGravity]))
   .y(d3.scale.linear().domain([0, maxVelocity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Escape velocity (km / s)")
   .xAxisLabel("Gravity (m / s^2)")
   .title(function(d) {
    return d.key[2] + " has a gravitational pull equating to " + d.key[0] + " m / s^2 that requires an escape velocity of " + d.key[1] + " km / s.";
   })
   .dimension(escapeDim)
   .group(gravityEscapeGroup)
   .margins({ top: 10, right: 50, bottom: 75, left: 75 });
 }
 