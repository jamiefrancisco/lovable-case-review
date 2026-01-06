import { Link, NavLink } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  fontWeight: 700,
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: isActive ? "#f3f4f6" : "transparent",
  color: "inherit",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/cases" style={{ textDecoration: "none", color: "inherit" }}>
          <span style={{ fontWeight: 900, fontSize: 18 }}>FlowHub Case Review</span>
        </Link>

        <div style={{ display: "flex", gap: 10 }}>
          <NavLink to="/cases" style={linkStyle}>
            Cases
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>{children}</div>
    </div>
  );
}
