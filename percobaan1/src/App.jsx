import TicketForm from "./components/TicketForm";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            ServiceDesk
          </span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="mb-4">
          <h2>IT Helpdesk</h2>
          <p className="text-muted">
            Submit your IT service request.
          </p>
        </div>

        <TicketForm />
      </div>
    </div>
  );
}

export default App;

