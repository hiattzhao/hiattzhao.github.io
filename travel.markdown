---
layout: page
title: travel
permalink: /travel
---

<div id="galleria"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
<script src="/assets/js/galleria-1.4.2.min.js"></script>

<script>
  var imageLocation = '/assets/photos/travel/';
  var thumbLocation = imageLocation + 'thumb-t/';
  var imagePrefix = 't';
  
  var data = [];
  var titles = ['2002 St Elizabeth 12', '2003 Black Hills 070', '2003 Black Hills 255', '2003 Butte 004', '2003 Butte 007', '2003 Chicago 267', '2003 Chicago 277', '2003 Chicago 312', '2003 Dallas 051', '2003 Houston 097', '2003 Los Angeles 002', '2003 Los Angeles 005', '2003 Los Angeles 008', '2003 Minneapolis 378','2003 New Orleans 181', '2003 New Orleans 281', '2003 Philadelphia 039', '2003 Philadelphia 055', '2003 Portland 117', '2003 Salt Lake City 060', '2003Salt Lake City 083', '2003 San Antonio 106', '2003 San Francisco 089', '2003 Santa Fe 034', '2003 Savannah 026', '2003 Seattle 050', '2003 St Augustine023', '2004 Brooklyn Heights 25', '2004 New York City 179', '2004 New York City 793', '2004 New York City 941', '2004 New York City 954', '2004 New York City 961', '2004 New York City 1070', '2004 New York City 1124', '2004 NewYork City 1290', '2005 Boston 041', '2005 Rochester 038', '2006 Chicago 024', '2006 Jim Thorpe 04', '2006 Lehigh Valley 20', '2006 New Hope 006', '2006New York City 114', '2006 Philadelphia 005', '2006 Philadelphia 121', '2006Philadelphia 151', '2006 Quakertown 007', '2009 New Year 151', '2010 Bethlehem 41', '2010 Madison 045', '2011 Bethlehem 33', '2011 Naples 49', '2011 Wescosville 003', '2013 Beijing 0226', '2013 Beijing 0507', '2013 Beijing 1454', '2013 Beijing 2143', '2013 Chichen Itza 280', '2013 Seattle 389', '2013 Towers East 161', '2014 Burlington 21', '2014 Fort Myers 55', '2014 Pittsburgh 007', '2015 Las Vegas 027', '2015 New York City 035', '2015 New York City 0117', '2015 New York City 0139', '2015 New York City 0400', '2015 New York City 0683', '2015 New York City 1061', '2015 Rochester 059', '2015 Rochester075', '2016 Cambridge 124', '2016 Lisbon 089', '2016 Lisbon 197', '2016 Lisbon 289', '2016 Lisbon 493', '2016 London 333', '2016 Madrid 074', '2016 Madrid 296', '2016 Marseille 247', '2016 New York City 040', '2016 New York City 096', '2016 New York City 161', '2016 New York City 187', '2016 New York City 199', '2016 Nice 079', '2016 Paris 0067', '2016 Paris 0695', '2016 Sintra 216', '2016 Sintra 283', '2016 Toledo 286', '2017 Atlantic City 27', '2017Philadelphia 296', '2017 Pittsburgh 055', '2017 Pittsburgh 093', '2017 Pittsburgh 100', '2017 Pittsburgh 140', '2017 West Oak Lane 091', '2017 West OakLane 134', '2018 Denver 250', '2023 Bohol 41', '2023 Bohol 111', '2023 Haiphong 11', '2023 Halong Bay 35', '2023 Halong Bay 95', '2023 Hanoi 32', '2023Hanoi 70', '2023 Hanoi 91', '2023 Hilo 153', '2023 Himeji 25', '2023 Himeji62', '2023 Hiroshima 24', '2023 Hiroshima 38', '2023 Hiroshima 123', '2023 Ho Chi Minh City 3', '2023 Kaohsiung 15', '2023 Kaohsiung 155', '2023 Kaohsiung 182', '2023 Kobe 124', '2023 Kyoto 189', '2023 Kyoto 223', '2023 Kyoto 372', '2023 Kyoto 467', '2023 Manila 55', '2023 Manila 79', '2023 Nara 39', '2023 Nara 43', '2023 Nara 104', '2023 Nara 145', '2023 Nara 151', '2023 Okayama 18', '2023 Okayama 26', '2023 Osaka 2', '2023 Osaka 84', '2023 Osaka 134', '2023 Seattle 97', '2023 Seattle 149', '2023 Seattle 168', '2023 Seattle 235', '2023 Seoul 144', '2023 Taipei 38', '2023 Taipei 132', '2023 Taipei 201', '2023 Taipei 246', '2023 Taipei 418', '2023 Takamatsu 38', '2023 Tokyo 134', '2023 Tokyo 237', '2023 Tokyo 257', '2024 Ayutthaya 51', '2024 Ayutthaya 67', '2024 El Nido 23', '2024 El Nido 45', '2024 El Nido 49', '2024 GeorgeTown 115', '2024 Kuala Lumpur 185', '2024 Manila 68', '2024 Phnom Penh 60','2024 Phuket 232', '2024 Siem Reap 54', '2024 Siem Reap 161', '2024 Singapore 12', '2024 Singapore 407', '2024 Taipei 43', '2025 Amman 39', '2025 Dresden 180', '2025 Giza 4', '2025 Giza 57', '2025 Petra 65', '2025 Petra 137', '2025 Petra 383', '2025 Poland 603', '2025 Prague 81', '2025 Prague 239', '2025 Prague 256', '2025 Scotland 73', '2025 Scotland 159', '2025 The Netherlands 51', '2025 Wroclaw 757', '2025 Wroclaw 822', '2026 Athens 151', '2026 Catania 10', '2026 Croatia 29', '2026 Croatia 87', '2026 Croatia 182', '2026 Croatia 404', '2026 Croatia 449', '2026 Florence 3', '2026 Florence 196', '2026 Naples 124', '2026 Naples 195', '2026 Palermo 45', '2026 Pisa 41', '2026 Procida 11', '2026 Rome 110', '2026 Rome 150', '2026 Rome 376', '2026 Rome 399', '2026 Tropea 13', '2026 Vatican City 103'];

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
