import { useState } from "react";
import TicketForm1 from "../percobaan1/src/components/TicketForm";

import { TicketProvider as TicketProvider2 } from "../percobaan2/src/context/TicketContext";
import TicketForm2 from "../percobaan2/src/components/TicketForm";
import TicketSummary2 from "../percobaan2/src/components/TicketSummary";
import TicketList2 from "../percobaan2/src/components/TicketList";

import { TicketProvider as TicketProviderLatihan } from "../latihan/src/context/TicketContext";
import TicketFormLatihan from "../latihan/src/components/TicketForm";
import TicketSummaryLatihan from "../latihan/src/components/TicketSummary";
import TicketListLatihan from "../latihan/src/components/TicketList";

function App() {
  const [activeTab, setActiveTab] = useState("latihan");

  return (
    <div className="bg-light min-vh-100">
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container d-flex flex-wrap justify-content-between align-items-center py-1">
          <span className="navbar-brand mb-0 h1 fs-5">
            ServiceDesk - Week 5
          </span>

          {/* Navigation Tabs */}
          <ul className="nav nav-pills bg-white p-1 rounded shadow-sm">
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${activeTab === "percobaan1" ? "active" : ""}`}
                onClick={() => setActiveTab("percobaan1")}
              >
                Percobaan 1
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${activeTab === "percobaan2" ? "active" : ""}`}
                onClick={() => setActiveTab("percobaan2")}
              >
                Percobaan 2
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${activeTab === "latihan" ? "active" : ""}`}
                onClick={() => setActiveTab("latihan")}
              >
                Latihan (Poin a - j)
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        {/* ================= PERCOBAAN 1 ================= */}
        {activeTab === "percobaan1" && (
          <div>
            <div className="mb-4">
              <span className="badge bg-primary mb-2">Percobaan 1</span>
              <h2>IT Helpdesk Form Service Request</h2>
              <p className="text-muted">
                Form Service Request dengan validasi real-time, submit validation, fokus otomatis dengan useRef, dan tampilan Submitted Data.
              </p>
            </div>
            <TicketForm1 />
          </div>
        )}

        {/* ================= PERCOBAAN 2 ================= */}
        {activeTab === "percobaan2" && (
          <TicketProvider2>
            <div className="mb-4">
              <span className="badge bg-primary mb-2">Percobaan 2</span>
              <h2>IT Helpdesk Dashboard</h2>
              <p className="text-muted">
                Pengembangan ServiceDesk menggunakan Context API dan useEffect untuk mengambil data categories.json.
              </p>
            </div>

            <TicketSummary2 />

            <div className="row g-4">
              <div className="col-lg-4">
                <TicketForm2 />
              </div>
              <div className="col-lg-8">
                <TicketList2 />
              </div>
            </div>
          </TicketProvider2>
        )}

        {/* ================= LATIHAN ================= */}
        {activeTab === "latihan" && (
          <TicketProviderLatihan>
            <div className="mb-4">
              <span className="badge bg-success mb-2">Latihan Mandiri</span>
              <h2>IT Helpdesk Dashboard Lengkap (Poin a - j)</h2>
              <p className="text-muted">
                ServiceDesk lengkap dengan Lokasi Kejadian, Kategori Security, Prioritas Critical, Multi-Search (Judul/Pelapor), Filter Prioritas, Tombol Delete, Statistik per Kategori, dan Kunci Status Resolved.
              </p>
            </div>

            <TicketSummaryLatihan />

            <div className="row g-4">
              <div className="col-lg-4">
                <TicketFormLatihan />
              </div>
              <div className="col-lg-8">
                <TicketListLatihan />
              </div>
            </div>
          </TicketProviderLatihan>
        )}
      </div>
    </div>
  );
}

export default App;
