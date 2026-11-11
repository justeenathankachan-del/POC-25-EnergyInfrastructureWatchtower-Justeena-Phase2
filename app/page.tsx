"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PLANTS_DATA } from "./plantsData";

// Dynamically import the map to avoid server-side rendering issues
const PowerPlantMap = dynamic(() => import("./PowerPlantMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[340px] w-full flex items-center justify-center bg-[#0B1117] border border-[#1F2937] rounded-lg text-slate-400 text-xs font-mono">
      Initializing Grid Map Telemetry...
    </div>
  ),
});

export default function EnergyWatchtowerDashboard() {
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const fuelBreakdown = [
    { name: "Natural Gas", pct: 40.9, color: "#818CF8" },
    { name: "Coal", pct: 23.7, color: "#F97316" },
    { name: "Nuclear", pct: 20.2, color: "#38BDF8" },
    { name: "Hydro", pct: 10.0, color: "#06B6D4" },
    { name: "Wind", pct: 3.7, color: "#10B981" },
    { name: "Solar", pct: 1.0, color: "#EAB308" },
    { name: "Geothermal", pct: 0.3, color: "#A855F7" },
    { name: "Biomass", pct: 0.2, color: "#EC4899" },
  ];

  // CSV export handler for the sidebar button
  const handleDownloadCSV = () => {
    const headers = "ID,Plant_Name,Fuel_Type,Capacity_MW,Region,Status,Latitude,Longitude\n";
    const rows = PLANTS_DATA.map(
      (p) => `${p.id},"${p.name}","${p.fuel}",${p.capacityMW},"${p.region}","${p.status}",${p.lat},${p.lng}`
    ).join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "POC25_Energy_Watchtower_Sample_Data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#030712] text-slate-100 font-sans">
      {/* ========================================================= */}
      {/* MAIN STAGE (70%): Map, Generation Mix, Timeline, Context */}
      {/* ========================================================= */}
      <main className="w-[70%] h-full overflow-y-auto p-6 space-y-6 border-r border-[#1F2937]">
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl">
            <span className="text-[10px] uppercase font-mono text-slate-400">Official EIA Electricity Data</span>
            <div className="text-xl font-bold text-white mt-1">21,89,614.361</div>
            <span className="text-[10px] text-slate-500">Thousand MWh (U.S. Gen 2023)</span>
          </div>

          <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl">
            <span className="text-[10px] uppercase font-mono text-slate-400">Total Generation</span>
            <div className="text-xl font-bold text-[#38BDF8] mt-1">2189.61 TWh</div>
            <span className="text-[10px] text-slate-500">Annual aggregated output</span>
          </div>

          <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl">
            <span className="text-[10px] uppercase font-mono text-slate-400">Renewable Share</span>
            <div className="text-xl font-bold text-emerald-400 mt-1">53.0%</div>
            <span className="text-[10px] text-slate-500">Solar, wind, hydro mix</span>
          </div>

          <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl">
            <span className="text-[10px] uppercase font-mono text-slate-400">Attention Required</span>
            <div className="text-xl font-bold text-amber-400 mt-1">01 Facility</div>
            <span className="text-[10px] text-slate-500">Scheduled maintenance</span>
          </div>
        </div>

        {/* Map Stage */}
        <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-white uppercase font-mono">
                Energy Infrastructure Grid Map
              </h2>
              <p className="text-[11px] text-slate-400">
                Geographic coordinates of key generation hubs across regional interconnections
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" /> Online
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" /> Maintenance
              </span>
            </div>
          </div>

          <div className="h-[340px] w-full">
            <PowerPlantMap selectedFuel={selectedFuel} selectedRegion={selectedRegion} />
          </div>
        </div>

        {/* Fuel Mix & Outage Timeline */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Electricity Fuel Mix Share (%)
            </h3>
            <div className="space-y-2.5 pt-1">
              {fuelBreakdown.map((item) => (
                <div key={item.name} className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">{item.name}</span>
                    <span className="font-mono text-slate-400">{item.pct}%</span>
                  </div>
                  <div className="w-full bg-[#1F2937] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Infrastructure Event Timeline
            </h3>
            <span className="text-[10px] text-slate-500 block">
              Synthetic event telemetry & scheduled maintenance dispatch
            </span>

            <div className="space-y-3 pt-2">
              <div className="p-2.5 rounded border border-[#1F2937] bg-[#030712]/60 text-xs">
                <div className="flex justify-between text-slate-400 font-mono text-[10px]">
                  <span>09:40 AM</span>
                  <span className="text-amber-400">Medium Priority</span>
                </div>
                <div className="font-semibold text-white mt-1">Northern Hydro Station</div>
                <div className="text-slate-400 text-[11px]">Turbine runner replacement inspection underway.</div>
              </div>

              <div className="p-2.5 rounded border border-[#1F2937] bg-[#030712]/60 text-xs">
                <div className="flex justify-between text-slate-400 font-mono text-[10px]">
                  <span>08:15 AM</span>
                  <span className="text-slate-400">Low Priority</span>
                </div>
                <div className="font-semibold text-white mt-1">Eastern Thermal Hub</div>
                <div className="text-slate-400 text-[11px]">Routine emission telemetry diagnostics verified.</div>
              </div>

              <div className="p-2.5 rounded border border-[#1F2937] bg-[#030712]/60 text-xs">
                <div className="flex justify-between text-slate-400 font-mono text-[10px]">
                  <span>Yesterday</span>
                  <span className="text-cyan-400">Scheduled</span>
                </div>
                <div className="font-semibold text-white mt-1">Western Wind Park</div>
                <div className="text-slate-400 text-[11px]">Inverter substation firmware synchronization completed.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emissions Banner */}
        <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-slate-400">Emissions Context</span>
            <div className="text-2xl font-bold text-white mt-0.5">
              420 <span className="text-xs font-normal text-slate-400">gCO₂/kWh</span>
            </div>
            <p className="text-[11px] text-slate-400">Illustrative carbon intensity index across regional load zones</p>
          </div>
          <div className="w-1/2">
            <div className="w-full bg-[#1F2937] h-2 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: "42%" }} />
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* INTELLIGENCE SIDEBAR (30%): Context, Controls, Export   */}
      {/* ========================================================= */}
      <aside className="w-[30%] h-full overflow-y-auto p-6 flex flex-col justify-between bg-[#0B1117]/80 backdrop-blur-md">
        <div className="space-y-6">
          <div>
            <div className="inline-block px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded">
              POC-25 // DATA & INTELLIGENCE
            </div>
            <h1 className="text-xl font-bold text-white mt-2">
              Energy Infrastructure Watchtower
            </h1>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Monitoring power generation mix, plant distribution, and grid telemetry using EIA open datasets.
            </p>
          </div>

          <hr className="border-[#1F2937]" />

          {/* Why This Matters */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Why This Matters
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed bg-[#030712] p-3 rounded-lg border border-[#1F2937]">
              Energy infrastructure underpins electricity pricing, industrial output, and decarbonization paths. Visualizing generation capacity against outage alerts enables operators, allocators, and policymakers to evaluate grid resilience and dispatch stability.
            </p>
          </div>

          {/* Who Controls The Rail */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Who Controls The Rail
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed bg-[#030712] p-3 rounded-lg border border-[#1F2937]">
              Regional Transmission Organizations (RTOs/ISOs like PJM, CAISO, ERCOT, MISO) manage grid dispatch and reliability, while public utility commissions (PUCs) regulate rate structures and resource planning.
            </p>
          </div>

          <hr className="border-[#1F2937]" />

          {/* Filters & Levers */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Filters & Levers
            </h3>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Fuel Type</label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-[#030712] border border-[#1F2937] rounded-md px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#38BDF8]"
              >
                <option value="All">All Fuels</option>
                <option value="Nuclear">Nuclear</option>
                <option value="Hydro">Hydro</option>
                <option value="Natural Gas">Natural Gas</option>
                <option value="Solar">Solar</option>
                <option value="Wind">Wind</option>
                <option value="Coal">Coal</option>
                <option value="Geothermal">Geothermal</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Interconnection / Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-[#030712] border border-[#1F2937] rounded-md px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#38BDF8]"
              >
                <option value="All">All Regions</option>
                <option value="West">West</option>
                <option value="Northwest">Northwest</option>
                <option value="Southwest">Southwest</option>
                <option value="Texas / Gulf">Texas / Gulf</option>
                <option value="Southeast">Southeast</option>
                <option value="Northeast">Northeast</option>
              </select>
            </div>
          </div>
        </div>

        {/* Download Sample Data Button */}
        <div className="pt-6">
          <button
            onClick={handleDownloadCSV}
            className="w-full py-2.5 px-4 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/40 hover:bg-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold tracking-wide transition-all shadow-[0_0_12px_rgba(56,189,248,0.15)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>↓</span> Download Sample Data (CSV)
          </button>
        </div>
      </aside>
    </div>
  );
}