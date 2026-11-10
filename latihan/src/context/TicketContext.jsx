import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  // Minimal 5 data Service Request pengujian awal dengan variasi lengkap (Sesuai Ketentuan Latihan point j)
  const [tickets, setTickets] = useState([
    {
      id: 1,
      ticketNumber: "HD-001",
      name: "Fakhry Akmal",
      email: "fakhry@polman.astra.ac.id",
      location: "Laboratorium",
      category: "Network",
      priority: "High",
      title: "Akses wifi bermasalah",
      description: "Wifi lab komputer sering terputus saat praktikum berlangsung.",
      incidentDate: "2026-11-01",
      status: "In Progress",
      createdAt: "01/11/2026",
    },
    {
      id: 2,
      ticketNumber: "HD-002",
      name: "Ahmad Dahlan",
      email: "ahmad@polman.astra.ac.id",
      location: "Ruang Kelas",
      category: "Software",
      priority: "Medium",
      title: "Aplikasi CAD tidak bisa dibuka",
      description: "Software desain memerlukan update lisensi kampus terbaru.",
      incidentDate: "2026-11-02",
      status: "Resolved",
      createdAt: "02/11/2026",
    },
    {
      id: 3,
      ticketNumber: "HD-003",
      name: "Rani Prasetyo",
      email: "rani@polman.astra.ac.id",
      location: "Ruang Dosen",
      category: "Hardware",
      priority: "Low",
      title: "PC sangat lemot saat dinyalakan",
      description: "PC meja kerja dosen membutuhkan waktu sangat lama saat booting.",
      incidentDate: "2026-11-03",
      status: "Open",
      createdAt: "03/11/2026",
    },
    {
      id: 4,
      ticketNumber: "HD-004",
      name: "Budi Santoso",
      email: "budi@polman.astra.ac.id",
      location: "Area Umum",
      category: "Security",
      priority: "Critical",
      title: "Dugaan malware di komputer lobi",
      description: "PC lobi sering memunculkan pop-up berbahaya saat digunakan.",
      incidentDate: "2026-11-04",
      status: "Open",
      createdAt: "04/11/2026",
    },
    {
      id: 5,
      ticketNumber: "HD-005",
      name: "Siti Rahma",
      email: "siti@polman.astra.ac.id",
      location: "Ruang Kelas",
      category: "Account",
      priority: "Medium",
      title: "Akun SIAKAD terkunci otomatis",
      description: "Terjadi kesalahan password lebih dari batas percobaan login.",
      incidentDate: "2026-11-05",
      status: "Resolved",
      createdAt: "05/11/2026",
    },
  ]);

  // Menambahkan ticket baru
  const addTicket = (ticket) => {
    setTickets((previousTickets) => [
      ...previousTickets,
      {
        ...ticket,
        id: Date.now(),
        ticketNumber: `HD-${String(previousTickets.length + 1).padStart(3, "0")}`,
        status: "Open",
        createdAt: new Date().toLocaleDateString("id-ID"),
      },
    ]);
  };

  // Mengubah status ticket
  const updateTicketStatus = (id, status) => {
    setTickets((previousTickets) =>
      previousTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status } : ticket
      )
    );
  };

  // Menghapus hanya satu ticket yang dipilih (Sesuai Latihan point f)
  const deleteTicket = (id) => {
    setTickets((previousTickets) =>
      previousTickets.filter((ticket) => ticket.id !== id)
    );
  };

  // Menghapus seluruh ticket
  const clearTickets = () => {
    setTickets([]);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        addTicket,
        updateTicketStatus,
        deleteTicket,
        clearTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTicket() {
  return useContext(TicketContext);
}

