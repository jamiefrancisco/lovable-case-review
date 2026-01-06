import { Link } from "react-router-dom";
import { cases } from "../data/cases";
import Layout from "../components/Layout";


export default function CasesList() {
  return (
    <Layout>
      <h1 style={{ fontSize: 28 }}>FlowHub Case Review</h1>
      <p style={{ opacity: 0.75 }}>
        Reviewing (hopefully) realistic customer scenarios from a Lovable-built workspace.
      </p>
      <p style={{ opacity: 0.75, maxWidth: 600 }}>
        Each case represents an example of a customer situation. Click into a case to see
        how I'd investigate the issue, communicate with the customer, and turn it into
        repeatable guidance for the team.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
        {cases.map((c) => (
          <Link
            key={c.id}
            to={`/cases/${c.id}`}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div>
                <strong>{c.title}</strong>
                <p style={{ margin: "6px 0", opacity: 0.75 }}>
                  {c.reportedProblem}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 999,
                        padding: "4px 10px",
                        fontSize: 12,
                        opacity: 0.9,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span style={{ whiteSpace: "nowrap" }}>Risk: {c.risk}</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
