# UAT CHECKLIST (User Acceptance Testing)
**PoC ID:** POC-25  
**PoC Title:** Energy Infrastructure Watchtower  
**Developer:** Justeena Thankachan  

---

## Functional Gate Validation

- [x] **Application Build:** Builds and runs with zero terminal compilation errors.
- [x] **No Console Errors:** Zero unhandled runtime exceptions or Leaflet container crashes.
- [x] **70/30 Layout Ratio:** Verified responsive split across desktop resolutions.
- [x] **Geospatial Map Functionality:**
  - [x] Map renders geographic tiles and regional interconnections cleanly.
  - [x] Facility circle markers correctly size according to Megawatt (MW) capacity.
  - [x] Interactive popups display facility name, fuel source, capacity, and operational status.
- [x] **Sidebar Intelligence Modules:**
  - [x] "Why This Matters" infrastructure impact summary present.
  - [x] "Who Controls The Rail" regulatory and RTO/ISO context present.
  - [x] Fuel Type filter dynamically adjusts markers on the map.
  - [x] Region filter isolates power facilities by geographic boundary.
- [x] **Data Export Execution:**
  - [x] Clicking "Download Sample Data (CSV)" triggers instant download of `POC25_Energy_Watchtower_Sample_Data.csv`.
- [x] **Visual Identity Check:** Obsidian black (`#030712`) and electric cyan (`#38BDF8`) theme applied across all cards.
-