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
  { id: "1", name: "Palo Verde Generating Station", fuel: "Nuclear", capacityMW: 3937, lat: 33.3965, lng: -112.8677, region: "Southwest", status: "Online" },
  { id: "2", name: "Grand Coulee Hydro Dam", fuel: "Hydro", capacityMW: 6809, lat: 47.957, lng: -118.981, region: "Northwest", status: "Online" },
  { id: "3", name: "W. A. Parish Electric Station", fuel: "Natural Gas", capacityMW: 3653, lat: 29.4842, lng: -95.6322, region: "Texas / Gulf", status: "Maintenance" },
  { id: "4", name: "Topaz Solar Farm", fuel: "Solar", capacityMW: 550, lat: 35.3831, lng: -120.0633, region: "West", status: "Online" },
  { id: "5", name: "Alta Wind Energy Center", fuel: "Wind", capacityMW: 1548, lat: 35.0189, lng: -118.3247, region: "West", status: "Online" },
  { id: "6", name: "James M. Barry Generating Plant", fuel: "Coal", capacityMW: 2670, lat: 31.0069, lng: -88.0111, region: "Southeast", status: "Online" },
  { id: "7", name: "Robert Moses Niagara Power Plant", fuel: "Hydro", capacityMW: 2525, lat: 43.1417, lng: -79.0444, region: "Northeast", status: "Online" },
  { id: "8", name: "The Geysers Geothermal Complex", fuel: "Geothermal", capacityMW: 1517, lat: 38.7969, lng: -122.7553, region: "West", status: "Online" },
];