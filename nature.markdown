---
layout: page
title: nature
permalink: /nature
---

<div id="galleria"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
<script src="/assets/js/galleria-1.4.2.min.js"></script>

<script>
  var imageLocation = '/assets/photos/nature/';
  var thumbLocation = imageLocation + 'thumb-n/';
  var imagePrefix = 'n';
  
  var data = [];
  var titles = ['2002 Tree 50', '2003 Flagstaff 060', '2003 Flagstaff 147', '2003 Rochester 3172', '2003 Seattle 142', '2004 Ottowa 109', '2005 New York City 36', '2005 Rochester 100', '2006 Chicago 147', '2011 Birds 11', '2011 Flowers 020', '2011 Flowers 139', '2011 Flowers 209', '2011 Flowers 217', '2011 Flowers 251', '2011 Flowers 268', '2011 Flowers 297', '2011 Flowers 331', '2011 Flowers 344', '2011 Flowers 379', '2011 Hope Ln 003', '2011 Trexler Park 22', '2012 Wescosville 169', '2013 Anchorage 177', '2013 Beijing 1136', '2013 Carmel 386', '2013 Carmel 390', '2013 Carmel 394', '2013 Juneau 564', '2013 Los Angeles 289', '2013 Monterey 233', '2013 Pacific Grove 089', '2014 Lake George 87', '2014 Lake Placid 099', '2014 Lake Placid 155', '2014 Orlando 094', '2014 Orlando 116', '2014 St Petersburg 249', '2015 Antelope Canyon 137', '2015Grand Canyon 032', '2015 New York City 0995', '2015 Rochester 196', '2015 Salt Lake City 014', '2016 Blue Bell 14', '2016 Trexler Nature Preserve 26', '2017 Moon 39', '2017 New Years Day 22', '2017 Tree 081', '2017 West Oak Lane 021', '2017 West Oak Lane 029', '2017 West Oak Lane 046', '2017 West Oak Lane 072', '2018 Baker 1733', '2018 Baker 1785', '2018 Boulder 2500', '2018 Bryce Canyon 1472', '2018 Fallon 1988', '2018 Fallon 1998', '2018 Gardnerville 2082', '2018 Lancaster 0083', '2018 Telluride 2253', '2020 Wayne 053', '2021 King Of Prussia 131', '2022 Flowers 13', '2022 Key West 36', '2022 Reading 25', '2024 Bantayan 29', '2024 El Nido 87', '2024 Phuket 76', '2024 Port Barton 29', '2024 Port Barton 122', '2024 Taipei 305', '2025 Germany 169', '2025 Limassol 76', '2025 New Brunswick 5', '2025 Poland 442', '2025 Quebec 333', '2025 Wadi Rum 109', '2026 Albania 59', '2026 Arezzo 94', '2026 Austria 212', '2026 Croatia 410', '2026 Croatia 497', '2026 Czechia 27', '2026 Gozo 35', '2026 Montenegro 59', '2026 Naples 96', '2026 Slovakia 5'];

  var totalImages = titles.length;
  var ext = '.webp';

  for (var i = 1; i <= totalImages; i++) {
    data.push({
      image : imageLocation + imagePrefix + i + ext,
      thumb : thumbLocation + imagePrefix + i + ext,
      title: titles[i - 1]
    });
  }

  data.reverse(); // Reverse the order of the photos

  // Load the custom theme
  Galleria.loadTheme('/assets/js/galleria/galleria.portfolio.js');
  // Configure Galleria
  Galleria.configure({
    showInfo: true
  });
  // Initialize Galleria
  Galleria.run('#galleria', {
    dataSource: data
  });
</script>
