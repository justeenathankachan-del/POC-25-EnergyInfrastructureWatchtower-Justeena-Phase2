"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PLANTS_DATA, PowerPlant } from "./plantsData";

interface PowerPlantMapProps {
  selectedFuel: string;
  selectedRegion: string;
  selectedPlant: PowerPlant | null;
  onSelectPlant: (plant: PowerPlant) => void;
}

export default function PowerPlantMap({
  selectedFuel,
  selectedRegion,
  selectedPlant,
  onSelectPlant,
}: PowerPlantMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-[#06110D] text-emerald-400 text-xs font-mono">
        Initializing Global Grid Telemetry...
      </div>
    );
  }

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const fuelMatch = selectedFuel === "All" || plant.fuel === selectedFuel;
    const regionMatch = selectedRegion === "All" || plant.region === selectedRegion;
    return fuelMatch && regionMatch;
  });

  const getMarkerColor = (plant: PowerPlant) => {
    if (plant.status === "Maintenance") return "#F97316"; // Alert Orange
    if (plant.fuel === "Solar" || plant.fuel === "Wind" || plant.fuel === "Geothermal")
      return "#10B981"; // Renewable Emerald
    if (plant.fuel === "Hydro" || plant.fuel === "Nuclear")
      return "#38BDF8"; // Zero-Carbon Baseload Cyan
    return "#FACC15"; // Thermal / Gas Amber-Gold
  };

  return (
    <MapContainer
      center={[22, 12]}
      zoom={2.4}
      minZoom={2}
      zoomControl={false}
      style={{ height: "100%", width: "100%", background: "#06110D" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="forest-dark-tiles"
      />

      {filteredPlants.map((plant) => {
        const isSelected = selectedPlant?.id === plant.id;
        const markerColor = getMarkerColor(plant);

        return (
          <CircleMarker
            key={plant.id}
            center={[plant.lat, plant.lng]}
            radius={isSelected ? 12 : Math.max(6, Math.min(10, plant.capacityMW / 1800))}
            pathOptions={{
              color: isSelected ? "#FFFFFF" : markerColor,
              fillColor: markerColor,
              fillOpacity: isSelected ? 0.98 : 0.85,
              weight: isSelected ? 3 : 2,
            }}
            eventHandlers={{
              click: () => onSelectPlant(plant),
            }}
          >
            <Tooltip direction="top" offset={[0, -6]} opacity={0.95}>
              <div className="text-xs font-sans">
                <div className="font-bold text-slate-900">{plant.name}</div>
                <div className="text-slate-700">
                  {plant.fuel} • {plant.capacityMW.toLocaleString()} MW ({plant.status})
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                  Click marker for grid telemetry →
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}