"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PLANTS_DATA } from "./plantsData";

interface Props {
  selectedFuel: string;
  selectedRegion: string;
}

export default function PowerPlantMap({ selectedFuel, selectedRegion }: Props) {
  // Ensure DOM is fully mounted in the browser before rendering Leaflet
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-[#030712] text-slate-500 font-mono text-xs rounded-lg border border-[#1F2937]">
        Loading Map View...
      </div>
    );
  }

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const matchFuel = selectedFuel === "All" || plant.fuel.toLowerCase() === selectedFuel.toLowerCase();
    const matchRegion = selectedRegion === "All" || plant.region.toLowerCase() === selectedRegion.toLowerCase();
    return matchFuel && matchRegion;
  });

  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-[#1F2937] relative">
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ minHeight: "340px", height: "100%", width: "100%", background: "#030712" }}
      >
        <TileLayer
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
/>
        {filteredPlants.map((plant) => {
          const isOnline = plant.status === "Online";
          const color = isOnline ? "#38BDF8" : "#F59E0B";

          return (
            <CircleMarker
              key={plant.id}
              center={[plant.lat, plant.lng]}
              radius={Math.max(6, Math.sqrt(plant.capacityMW) / 3.5)}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.8,
                weight: 1.5,
              }}
            >
              <Popup>
                <div className="text-slate-900 font-sans p-1 text-xs">
                  <p className="font-bold text-sm text-slate-950">{plant.name}</p>
                  <p className="mt-1"><span className="font-semibold">Fuel:</span> {plant.fuel}</p>
                  <p><span className="font-semibold">Capacity:</span> {plant.capacityMW.toLocaleString()} MW</p>
                  <p><span className="font-semibold">Region:</span> {plant.region}</p>
                  <p><span className="font-semibold">Status:</span> {plant.status}</p>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}