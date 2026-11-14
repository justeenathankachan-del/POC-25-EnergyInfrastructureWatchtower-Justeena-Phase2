export interface PowerPlant {
  id: string;
  name: string;
  fuel: string;
  capacityMW: number;
  lat: number;
  lng: number;
  region: string;
  status: "Online" | "Maintenance" | "Offline";
}

export const PLANTS_DATA: PowerPlant[] = [
  // North America
  { id: "1", name: "Palo Verde Generating Station", fuel: "Nuclear", capacityMW: 3937, lat: 33.3965, lng: -112.8677, region: "Southwest", status: "Online" },
  { id: "2", name: "Grand Coulee Hydro Dam", fuel: "Hydro", capacityMW: 6809, lat: 47.957, lng: -118.981, region: "Northwest", status: "Online" },
  { id: "3", name: "W. A. Parish Electric Station", fuel: "Natural Gas", capacityMW: 3653, lat: 29.4842, lng: -95.6322, region: "Texas / Gulf", status: "Maintenance" },
  { id: "4", name: "Topaz Solar Farm", fuel: "Solar", capacityMW: 550, lat: 35.3831, lng: -120.0633, region: "West", status: "Online" },
  { id: "5", name: "Alta Wind Energy Center", fuel: "Wind", capacityMW: 1548, lat: 35.0189, lng: -118.3247, region: "West", status: "Online" },
  { id: "6", name: "James M. Barry Generating Plant", fuel: "Coal", capacityMW: 2670, lat: 31.0069, lng: -88.0111, region: "Southeast", status: "Online" },
  { id: "7", name: "Robert Moses Niagara Power Plant", fuel: "Hydro", capacityMW: 2525, lat: 43.1417, lng: -79.0444, region: "Northeast", status: "Online" },
  { id: "8", name: "The Geysers Geothermal Complex", fuel: "Geothermal", capacityMW: 1517, lat: 38.7969, lng: -122.7553, region: "West", status: "Online" },
  { id: "9", name: "Bruce Nuclear Generating Station", fuel: "Nuclear", capacityMW: 6550, lat: 44.3253, lng: -81.5997, region: "Northeast", status: "Online" },
  { id: "10", name: "Robert-Bourassa Hydroelectric", fuel: "Hydro", capacityMW: 5616, lat: 53.7819, lng: -77.5303, region: "Northeast", status: "Online" },
  { id: "11", name: "Gila Bend Solar Complex", fuel: "Solar", capacityMW: 1100, lat: 32.9478, lng: -112.7169, region: "Southwest", status: "Online" },
  { id: "12", name: "Roscoe Wind Farm", fuel: "Wind", capacityMW: 781, lat: 32.4446, lng: -100.5387, region: "Texas / Gulf", status: "Online" },
  { id: "13", name: "Laguna Verde Nuclear Plant", fuel: "Nuclear", capacityMW: 1640, lat: 19.7208, lng: -96.4064, region: "Texas / Gulf", status: "Online" },
  { id: "14", name: "Vogtle Electric Generating Plant", fuel: "Nuclear", capacityMW: 4536, lat: 33.1419, lng: -81.7647, region: "Southeast", status: "Online" },

  // South America
  { id: "15", name: "Itaipu Hydroelectric Dam", fuel: "Hydro", capacityMW: 14000, lat: -25.4081, lng: -54.5889, region: "South America", status: "Online" },
  { id: "16", name: "Belo Monte Hydropower Complex", fuel: "Hydro", capacityMW: 11233, lat: -3.1264, lng: -51.775, region: "South America", status: "Online" },
  { id: "17", name: "Guri Hydroelectric Station", fuel: "Hydro", capacityMW: 10235, lat: 7.7658, lng: -62.9981, region: "South America", status: "Maintenance" },
  { id: "18", name: "Atacama Cerro Dominador Solar", fuel: "Solar", capacityMW: 210, lat: -22.7719, lng: -69.4797, region: "South America", status: "Online" },

  // Europe
  { id: "19", name: "Gravelines Nuclear Power Station", fuel: "Nuclear", capacityMW: 5460, lat: 51.0153, lng: 2.1361, region: "Europe", status: "Online" },
  { id: "20", name: "Hornsea Offshore Wind Farm", fuel: "Wind", capacityMW: 2600, lat: 53.885, lng: 1.7911, region: "Europe", status: "Online" },
  { id: "21", name: "Cattenom Nuclear Station", fuel: "Nuclear", capacityMW: 5200, lat: 49.4158, lng: 6.2181, region: "Europe", status: "Online" },
  { id: "22", name: "Belchatow Thermal Power Station", fuel: "Coal", capacityMW: 5102, lat: 51.2661, lng: 19.3264, region: "Europe", status: "Maintenance" },
  { id: "23", name: "Nunez de Balboa Solar Plant", fuel: "Solar", capacityMW: 500, lat: 38.4525, lng: -6.2244, region: "Europe", status: "Online" },
  { id: "24", name: "Hellisheidi Geothermal Station", fuel: "Geothermal", capacityMW: 303, lat: 64.0375, lng: -21.4006, region: "Europe", status: "Online" },
  { id: "25", name: "Kvilldal Hydro Power Plant", fuel: "Hydro", capacityMW: 1240, lat: 59.5186, lng: 6.6531, region: "Europe", status: "Online" },
  { id: "26", name: "Kozloduy Nuclear Power Plant", fuel: "Nuclear", capacityMW: 2000, lat: 43.7461, lng: 23.7706, region: "Europe", status: "Online" },

  // Middle East & Africa
  { id: "27", name: "Barakah Nuclear Energy Plant", fuel: "Nuclear", capacityMW: 5380, lat: 23.9606, lng: 52.2617, region: "Middle East & Africa", status: "Online" },
  { id: "28", name: "Mohammed bin Rashid Solar Park", fuel: "Solar", capacityMW: 2860, lat: 24.7547, lng: 55.3636, region: "Middle East & Africa", status: "Online" },
  { id: "29", name: "Benban Solar Park", fuel: "Solar", capacityMW: 1650, lat: 24.4561, lng: 32.7389, region: "Middle East & Africa", status: "Online" },
  { id: "30", name: "Grand Ethiopian Renaissance Dam", fuel: "Hydro", capacityMW: 5150, lat: 11.2142, lng: 35.0928, region: "Middle East & Africa", status: "Online" },
  { id: "31", name: "Koeberg Nuclear Power Station", fuel: "Nuclear", capacityMW: 1860, lat: -33.6764, lng: 18.4319, region: "Middle East & Africa", status: "Online" },
  { id: "32", name: "Medupi Thermal Power Station", fuel: "Coal", capacityMW: 4764, lat: -23.7042, lng: 27.5567, region: "Middle East & Africa", status: "Maintenance" },
  { id: "33", name: "Noor Ouarzazate Solar Complex", fuel: "Solar", capacityMW: 580, lat: 31.0472, lng: -6.8631, region: "Middle East & Africa", status: "Online" },

  // Asia & Oceania
  { id: "34", name: "Three Gorges Dam", fuel: "Hydro", capacityMW: 22500, lat: 30.8231, lng: 111.0033, region: "Asia-Pacific", status: "Online" },
  { id: "35", name: "Baihetan Hydropower Station", fuel: "Hydro", capacityMW: 16000, lat: 27.2231, lng: 102.9031, region: "Asia-Pacific", status: "Online" },
  { id: "36", name: "Bhadla Solar Park", fuel: "Solar", capacityMW: 2245, lat: 27.5397, lng: 71.9153, region: "Asia-Pacific", status: "Online" },
  { id: "37", name: "Kudankulam Nuclear Power Plant", fuel: "Nuclear", capacityMW: 2000, lat: 8.1689, lng: 77.7125, region: "Asia-Pacific", status: "Online" },
  { id: "38", name: "Muppandal Wind Farm", fuel: "Wind", capacityMW: 1500, lat: 8.2581, lng: 77.5561, region: "Asia-Pacific", status: "Online" },
  { id: "39", name: "Vindhyachal Thermal Power Station", fuel: "Coal", capacityMW: 4760, lat: 24.0983, lng: 82.6719, region: "Asia-Pacific", status: "Online" },
  { id: "40", name: "Kashiwazaki-Kariwa Station", fuel: "Nuclear", capacityMW: 7965, lat: 37.4286, lng: 138.6014, region: "Asia-Pacific", status: "Maintenance" },
  { id: "41", name: "Hanul Nuclear Power Plant", fuel: "Nuclear", capacityMW: 5928, lat: 37.0928, lng: 129.3836, region: "Asia-Pacific", status: "Online" },
  { id: "42", name: "Jiuquan Wind Power Base", fuel: "Wind", capacityMW: 10000, lat: 40.5167, lng: 96.65, region: "Asia-Pacific", status: "Online" },
  { id: "43", name: "Tengger Desert Solar Park", fuel: "Solar", capacityMW: 1547, lat: 37.55, lng: 105.05, region: "Asia-Pacific", status: "Online" },
  { id: "44", name: "Bayswater Power Station", fuel: "Coal", capacityMW: 2640, lat: -32.3961, lng: 150.9492, region: "Asia-Pacific", status: "Online" },
  { id: "45", name: "Macarthur Wind Farm", fuel: "Wind", capacityMW: 420, lat: -38.0469, lng: 142.1917, region: "Asia-Pacific", status: "Online" },
];