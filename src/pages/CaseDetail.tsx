import { Link, useParams } from "react-router-dom";
import { cases } from "../data/cases";
import Layout from "../components/Layout";

export default function CaseDetail() {
  const { id } = useParams();
  const c = cases.find((x) => x.id === id);

  if (!c) {
    return (
      <div style={{ padding: 24 }}>
        <p>Case not found.</p>
        <Link to="/cases">Back</Link>
      </div>
    );
  }

  return (
    <Layout>
      <Link to="/cases">← Back</Link>

      <h1 style={{ marginTop: 12 }}>{c.title}</h1>
      <p style={{ opacity: 0.75 }}>{c.customerName}</p>

      <p>
        <strong>Workspace:</strong> {c.workspaceId} · {c.environment}
      </p>
      <p>
        <strong>Version:</strong> {c.appVersion} · <strong>Auth:</strong> {c.authMode}
      </p>
      <p>
        <strong>Last published:</strong> {c.lastPublished}
      </p>

      <hr style={{ margin: "18px 0" }} />

      <h3>Customer Goal</h3>
      <p>{c.customerGoal}</p>

      <h3>Reported Problem</h3>
      <p>{c.reportedProblem}</p>

      <h3>What We Checked</h3>
      <ul>
        {c.whatWeChecked.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h3>Findings</h3>
      <p>{c.findings}</p>

      <h3>Recommended Actions (Now)</h3>
      <ul>
        {c.resolutionNow.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h3>Recommended Actions (Next)</h3>
      <ul>
        {c.resolutionNext.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h3>Customer Reply (Draft)</h3>

      <button
        onClick={async () => {
          await navigator.clipboard.writeText(c.customerMessageDraft);
          alert("Copied to clipboard");
        }}
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 10,
          padding: "8px 10px",
          cursor: "pointer",
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        Copy reply
      </button>

      <div
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 12,
          background: "#fafafa",
        }}
      >
        {c.customerMessageDraft}
      </div>

      <h3>Internal Notes</h3>
      <ul>
        {c.internalNotes.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h3>Workspace Preview</h3>
      <a href={c.lovableUrl} target="_blank" rel="noreferrer">
        Open Lovable App
      </a>
    </Layout>
  );
}
