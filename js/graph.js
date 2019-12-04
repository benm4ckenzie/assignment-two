 queue()
  .defer(d3.csv, "data/planetary-data.csv")
  .await(makeGraphs);

 function makeGraphs(error, planetData) {
  var ndx = crossfilter(planetData);

  planetData.forEach(function(d) {
   d.order = parseFloat(d.order);
   d.mass = parseFloat(d.mass);
   d.gravity = parseFloat(d.gravity);
   d.density = parseFloat(d.density);
   d.distanceFromSun = parseFloat(d.distanceFromSun);
   d.orbitalVelocity = parseFloat(d.orbitalVelocity);
   d.orbitalPeriod = parseFloat(d.orbitalPeriod);
   d.escapeVelocity = parseFloat(d.escapeVelocity);
   d.lengthOfDay = parseFloat(d.lengthOfDay);
   d.rotationPeriod = parseFloat(d.rotationPeriod);
   d.numberOfMoons = parseFloat(d.numberOfMoons);
   d.orbitalInclination = parseFloat(d.orbitalInclination);
   d.orbitalEccentricity = parseFloat(d.orbitalEccentricity);
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
  show_planetary_temperature(ndx);
  show_orbit_eccentricity(ndx);
  show_orbit_inclination(ndx);
  show_planetary_mass(ndx);
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
   .formatNumber(d3.format(""));
 }

 //................................................NUMBERDISPLAY LENGTH OF DAY//

 function show_length_of_day(ndx) {
  var day_length = ndx.groupAll().reduce(
   function(p, v) {
    p.count++;
    p.total += v.lengthOfDay;
    return p;
   },
   function(p, v) {
    p.count--;
    p.total -= v.lengthOfDay;
    return p;
   },
   function() {
    return { count: 0, total: 0 };
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
   function(p, v) {
    p.count++;
    p.total += v.rotationPeriod;
    return p;
   },
   function(p, v) {
    p.count--;
    p.total -= v.rotationPeriod;
    return p;
   },
   function() {
    return { count: 0, total: 0 };
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
   function(p, v) {
    p.count++;
    p.total += v.orbitalPeriod;
    return p;
   },
   function(p, v) {
    p.count--;
    p.total -= v.orbitalPeriod;
    return p;
   },
   function() {
    return { count: 0, total: 0 };
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
    return "Rock";
   else
    return "Gas";
  });

  var comp_group = composition_dim.group();

  dc.pieChart("#planetary-composition")

   .colors(d3.scale.ordinal().range(["#EE7600", "#FFB90F"]))
   .radius(70)
   .dimension(composition_dim)
   .group(comp_group)
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

   .colors(d3.scale.ordinal().range(["#EE7600", "#FFB90F"]))
   .radius(70)
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
 
   .colors(d3.scale.ordinal().range(["#EE7600", "#FFB90F"]))
   .radius(70)
   .dimension(rotation_dim)
   .group(spin_group);
 }

 //................................................PIECHART RING SYSTEM//

 function show_planet_ring_system(ndx) {
  var ring_dim = ndx.dimension(function(d) {
   if (d.ringSystem === "Yes")
    return "Rings";
   else
    return "No rings";
  });
  var ring_group = ring_dim.group();

  dc.pieChart("#planetary-ring-system")

   .colors(d3.scale.ordinal().range(["#EE7600", "#FFB90F"]))
   .radius(70)
   .dimension(ring_dim)
   .group(ring_group);
 }

 //................................................BARCHART PLANETARY TEMPERATURE//

 function show_planetary_temperature(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_temp = name_dim.group().reduceSum(dc.pluck('meanTemperature'));

  var planetColours = d3.scale.ordinal()
   .domain(["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"])
   .range(["#808080", "#FFDFE5", "#3232FF", "#620000", "#FFA500", "#CCAC00", "#66E4FF", "#40198C"]);

  var order = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range([0, 1, 2, 3, 4, 5, 6, 7]);

  dc.barChart("#planetary-temperature")
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_temp)
   .ordering(function(d) {
    return order(d.key);
   })
   .colors(function(d) {
    return planetColours(d.key);
   })
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .elasticY(false)
   .yAxisLabel("Degrees Celcius")
   .yAxis().ticks(5);
 }



 //................................................BARCHART ORBIT ECCENTRICITY//

 function show_orbit_eccentricity(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_ecc = name_dim.group().reduceSum(dc.pluck('orbitalEccentricity'));

  var planetColours = d3.scale.ordinal()
   .domain(["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"])
   .range(["#808080", "#FFDFE5", "#3232FF", "#620000", "#FFA500", "#CCAC00", "#66E4FF", "#40198C"]);

  var order = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range([0, 1, 2, 3, 4, 5, 6, 7]);

  dc.barChart("#orbit-eccentricity")
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_ecc)
   .ordering(function(d) {
    return order(d.key);
   })
   .colors(function(d) {
    return planetColours(d.key);
   })
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .xUnits(dc.units.ordinal)
   .elasticY(false)
   .yAxis().ticks(5);
 }

 //................................................BARCHART ORBIT INCLINATION//

 function show_orbit_inclination(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var planetary_temp = name_dim.group().reduceSum(dc.pluck('orbitalInclination'));

  var order = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range([0, 1, 2, 3, 4, 5, 6, 7]);

  dc.barChart("#orbit-inclination")
   .margins({ top: 10, right: 50, bottom: 30, left: 50 })
   .dimension(name_dim)
   .group(planetary_temp)
   .transitionDuration(500)
   .x(d3.scale.ordinal())
   .ordering(function(d) {
    return order(d.key);
   })
   .xUnits(dc.units.ordinal)
   .elasticY(false)
   .yAxisLabel("Degrees")
   .yAxis().ticks(10);
 }

 //................................................ROWCHART PLANETARY MASS//

 function show_planetary_mass(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var mass_group = name_dim.group().reduceSum(dc.pluck('mass'));

  var order = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range([0, 1, 2, 3, 4, 5, 6, 7]);

  dc.rowChart("#planetary-mass")
   .colors(d3.scale.ordinal().range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]))
   .dimension(name_dim)
   .group(mass_group)
   .ordering(function(d) {
    return order(d.key);
   })
   .transitionDuration(500)
   .elasticX(false)
   .xAxis().ticks(5);
 }

 //................................................ROWCHART DISTANCE FROM SUN//

 function show_distance_from_sun(ndx) {
  var name_dim = ndx.dimension(dc.pluck('name'));
  var distance_group = name_dim.group().reduceSum(dc.pluck('distanceFromSun'));

  var order = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range([0, 1, 2, 3, 4, 5, 6, 7]);

  dc.rowChart("#distance-from-sun")
   .colors(d3.scale.ordinal().range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]))
   .dimension(name_dim)
   .group(distance_group)
   .ordering(function(d) {
    return order(d.key);
   })
   .transitionDuration(500)
   .elasticX(false)
   .xAxis().ticks(5);
 }

 //................................................SCATTERPLOT MASS / GRAVITY RELATIONSHIP//

 function show_planet_mass_gravity_relationship(ndx) {
  var mass_dim = ndx.dimension(dc.pluck("mass"));
  var gravity_dim = ndx.dimension(dc.pluck("gravity"));
  var massDim = ndx.dimension(function(d) {
   return [d.mass, d.gravity, d.name];
  });
  var gravityMassGroup = massDim.group();

  var planetColors = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]);

  var maxMass = mass_dim.top(1)[0].mass;
  var maxGravity = gravity_dim.top(1)[0].gravity;

  dc.scatterPlot("#planetary-mass-gravity-relationship")
   .x(d3.scale.linear().domain([0, maxMass]))
   .y(d3.scale.linear().domain([0, maxGravity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("m / s^2")
   .xAxisLabel("x 10^24 kg")
   .title(function(d) {
    return d.key[2] + " has a mass of " + d.key[0] + " x 10^24 kg and a gravitational pull equating to " + d.key[1] + " m / s^2.";
   })
   .colorAccessor(function(d) {
    return d.key[2];
   })
   .colors(planetColors)
   .elasticX(false)
   .elasticY(false)

   .dimension(massDim)
   .group(gravityMassGroup)
   .margins({ top: 10, right: 25, bottom: 50, left: 70 });
 }

 //................................................SCATTERPLOT DENSITY / GRAVITY RELATIONSHIP//

 function show_planet_density_gravity_relationship(ndx) {
  var density_dim = ndx.dimension(dc.pluck("density"));
  var gravity_dim = ndx.dimension(dc.pluck("gravity"));
  var densityDim = ndx.dimension(function(d) {
   return [d.density, d.gravity, d.name];
  });
  var densityGravityGroup = densityDim.group();

  var planetColors = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]);

  var maxDensity = density_dim.top(1)[0].density;
  var maxGravity = gravity_dim.top(1)[0].gravity;

  dc.scatterPlot("#planetary-gravity-density-relationship")
   .x(d3.scale.linear().domain([0, maxDensity]))
   .y(d3.scale.linear().domain([0, maxGravity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("m / s^2")
   .xAxisLabel("kg / m^3")
   .title(function(d) {
    return d.key[2] + " has a mass of " + d.key[0] + " x 10^24 kg and a gravitational pull equating to " + d.key[1] + " m / s^2.";
   })
   .colorAccessor(function(d) {
    return d.key[2];
   })
   .colors(planetColors)
   .dimension(densityDim)
   .group(densityGravityGroup)
   .margins({ top: 10, right: 25, bottom: 50, left: 70 });
 }

 //................................................SCATTERPLOT DISTANCE FROM SUN / ORBITAL VELOCITY RELATIONSHIP//

 function show_planet_distance_velocity_relationship(ndx) {
  var distance_dim = ndx.dimension(dc.pluck("distanceFromSun"));
  var velocity_dim = ndx.dimension(dc.pluck("orbitalVelocity"));
  var velocityDim = ndx.dimension(function(d) {
   return [d.distanceFromSun, d.orbitalVelocity, d.name];
  });
  var distanceVelocityGroup = velocityDim.group();

  var planetColors = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]);

  var maxDistance = distance_dim.top(1)[0].distanceFromSun;
  var maxVelocity = velocity_dim.top(1)[0].orbitalVelocity;

  dc.scatterPlot("#planetary-distance-velocity-relationship")
   .x(d3.scale.linear().domain([0, maxDistance]))
   .y(d3.scale.linear().domain([0, maxVelocity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("km / s")
   .xAxisLabel("x 10^6 km")
   .title(function(d) {
    return d.key[2] + " has an orbital velocity of  " + d.key[1] + " km / s at a distance of " + d.key[0] + " x 10^6 km from the sun.";
   })
   .colorAccessor(function(d) {
    return d.key[2];
   })
   .colors(planetColors)
   .dimension(velocityDim)
   .group(distanceVelocityGroup)
   .margins({ top: 10, right: 25, bottom: 50, left: 70 });
 }

 //................................................SCATTERPLOT DISTANCE FROM SUN / ORBITAL PERIOD RELATIONSHIP//

 function show_planet_distance_orbitalperiod_relationship(ndx) {
  var distance_dim = ndx.dimension(dc.pluck("distanceFromSun"));
  var period_dim = ndx.dimension(dc.pluck("orbitalPeriod"));
  var periodDim = ndx.dimension(function(d) {
   return [d.distanceFromSun, d.orbitalPeriod, d.name];
  });
  var distancePeriodGroup = periodDim.group();

  var planetColors = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]);

  var maxDistance = distance_dim.top(1)[0].distanceFromSun;
  var maxPeriod = period_dim.top(1)[0].orbitalPeriod;

  dc.scatterPlot("#planetary-distance-orbitalperiod-relationship")
   .x(d3.scale.linear().domain([0, maxDistance]))
   .y(d3.scale.linear().domain([0, maxPeriod]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Days")
   .xAxisLabel("x 10^6 km")
   .title(function(d) {
    return d.key[2] + " has an orbital period of  " + d.key[1] + " days at a distance of " + d.key[0] + " x 10^6 km from the sun.";
   })
   .colorAccessor(function(d) {
    return d.key[2];
   })
   .colors(planetColors)
   .dimension(periodDim)
   .group(distancePeriodGroup)
   .margins({ top: 10, right: 25, bottom: 50, left: 70 });
 }

 //................................................SCATTERPLOT ORBITAL PERIOD / ORBITAL VELOCITY RELATIONSHIP//

 function show_planet_orbitalvelocity_orbitalperiod_relationship(ndx) {
  var velocity_dim = ndx.dimension(dc.pluck("orbitalVelocity"));
  var period_dim = ndx.dimension(dc.pluck("orbitalPeriod"));
  var periodDim = ndx.dimension(function(d) {
   return [d.orbitalVelocity, d.orbitalPeriod, d.name];
  });
  var velocityPeriodGroup = periodDim.group();

  var planetColors = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]);

  var maxVelocity = velocity_dim.top(1)[0].orbitalVelocity;
  var maxPeriod = period_dim.top(1)[0].orbitalPeriod;

  dc.scatterPlot("#planetary-orbitalvelocity-orbitalperiod-relationship")
   .x(d3.scale.linear().domain([0, maxVelocity]))
   .y(d3.scale.linear().domain([0, maxPeriod]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("Days")
   .xAxisLabel("km / s")
   .title(function(d) {
    return d.key[2] + " has an orbital period of " + d.key[1] + " days and an orbital velocity of " + d.key[0] + " km / s.";
   })
   .colorAccessor(function(d) {
    return d.key[2];
   })
   .colors(planetColors)
   .dimension(periodDim)
   .group(velocityPeriodGroup)
   .margins({ top: 10, right: 25, bottom: 50, left: 70 });
 }

 //................................................SCATTERPLOT GRAVITY / ESCAPE VELOCITY RELATIONSHIP//

 function show_planet_gravity_escapevelocity_relationship(ndx) {
  var velocity_dim = ndx.dimension(dc.pluck("escapeVelocity"));
  var gravity_dim = ndx.dimension(dc.pluck("gravity"));
  var escapeDim = ndx.dimension(function(d) {
   return [d.gravity, d.escapeVelocity, d.name];
  });
  var gravityEscapeGroup = escapeDim.group();

  var planetColors = d3.scale.ordinal()
   .domain(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'])
   .range(["#808080", "#E1D3C1", "#739FEE", "#B85B1A", "#FFA332", "#D6BFA4", "#E5FFF6", "#5077BD"]);

  var maxVelocity = velocity_dim.top(1)[0].escapeVelocity;
  var maxGravity = gravity_dim.top(1)[0].gravity;

  dc.scatterPlot("#planetary-gravity-escapevelocity-relationship")
   .x(d3.scale.linear().domain([0, maxGravity]))
   .y(d3.scale.linear().domain([0, maxVelocity]))
   .brushOn(false)
   .symbolSize(8)
   .clipPadding(10)
   .yAxisLabel("km / s")
   .xAxisLabel("m / s^2")
   .title(function(d) {
    return d.key[2] + " has a gravitational pull equating to " + d.key[0] + " m / s^2 that requires an escape velocity of " + d.key[1] + " km / s.";
   })
   .colorAccessor(function(d) {
    return d.key[2];
   })
   .colors(planetColors)
   .dimension(escapeDim)
   .group(gravityEscapeGroup)

   .margins({ top: 10, right: 25, bottom: 50, left: 70 });
 }
 