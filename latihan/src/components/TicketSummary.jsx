import { useTicket } from "../context/TicketContext";

function TicketSummary() {
  const { tickets } = useTicket();

  // Statistik Berdasarkan Status
  const total = tickets.length;
  const open = tickets.filter((ticket) => ticket.status === "Open").length;
  const progress = tickets.filter((ticket) => ticket.status === "In Progress").length;
  const resolved = tickets.filter((ticket) => ticket.status === "Resolved").length;

  // Statistik Berdasarkan Kategori (Sesuai Ketentuan Latihan point g)
  const hardwareCount = tickets.filter((ticket) => ticket.category === "Hardware").length;
  const softwareCount = tickets.filter((ticket) => ticket.category === "Software").length;
  const networkCount = tickets.filter((ticket) => ticket.category === "Network").length;
  const accountCount = tickets.filter((ticket) => ticket.category === "Account").length;
  const securityCount = tickets.filter((ticket) => ticket.category === "Security").length;

  return (
    <div className="mb-4">
      {/* Kartu Status Ticket */}
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Total Ticket</h6>
              <h2>{total}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Open</h6>
              <h2 className="text-danger">{open}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">In Progress</h6>
              <h2 className="text-warning">{progress}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Resolved</h6>
              <h2 className="text-success">{resolved}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Kartu Kategori Ticket (Latihan point g: Minimal Hardware, Software, Network, Account, Security) */}
      <div className="card shadow-sm">
        <div className="card-body py-2">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span className="fw-bold text-secondary">
              <i className="bi bi-tags"></i> Kategori Ticket:
            </span>
            <span className="badge bg-light text-dark border p-2">
              Hardware: <strong className="text-primary">{hardwareCount}</strong>
            </span>
            <span className="badge bg-light text-dark border p-2">
              Software: <strong className="text-primary">{softwareCount}</strong>
            </span>
            <span className="badge bg-light text-dark border p-2">
              Network: <strong className="text-primary">{networkCount}</strong>
            </span>
            <span className="badge bg-light text-dark border p-2">
              Account: <strong className="text-primary">{accountCount}</strong>
            </span>
            <span className="badge bg-light text-dark border p-2">
              Security: <strong className="text-danger">{securityCount}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSummary;

