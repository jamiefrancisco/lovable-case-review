export type Risk = "Low" | "Medium" | "High";

export type Case = {
  id: string;
  title: string;
  risk: Risk;
  customerName: string;
  workspaceId: string;
  appVersion: string;
  environment: string;
  authMode: string;
  lastPublished: string;
  lovableUrl: string;
  reportedProblem: string;
  customerGoal: string;
  whatWeChecked: string[];
  findings: string;
  resolutionNow: string[];
  resolutionNext: string[];
  customerMessageDraft: string;
  internalNotes: string[];
  tags: string[];
};

const LOVABLE_URL = "https://workflow-palace-app.lovable.app/";

export const cases: Case[] = [
  {
    id: "case-001",
    title: "App feels off-brand — adoption stalling after launch",
    risk: "Medium",
    customerName: "Example Customer 1",
    workspaceId: "flowhub-demo-001",
    appVersion: "v0.1",
    environment: "Production",
    authMode: "Workspace Admin",
    lastPublished: "Jan 20, 2024",
    lovableUrl: LOVABLE_URL,
    reportedProblem:
      "“We shipped quickly, but the app doesn’t feel like us. People don’t trust it yet.”",
    customerGoal:
      "Roll this out internally to multiple teams and have it feel consistent with their brand/design system.",
    whatWeChecked: [
      "Theme token / color consistency across pages",
      "Component styling differences (cards, buttons, status pills)",
      "Where default styles are still leaking in",
      "Whether the issue is cosmetic vs functional",
    ],
    findings:
      "The app is functional, but theming is only partially applied. A few components still look default, which makes the experience feel inconsistent and reduces confidence during rollout.",
    resolutionNow: [
      "Standardize the primary/secondary colors across screens",
      "Align status pill styles (Active/Pending/Completed) to the same palette rules",
      "Make button styles consistent (size, radius, hover)",
    ],
    resolutionNext: [
      "Create a lightweight Theme Checklist for new workspaces",
      "Document what’s customizable vs what’s “system default”",
    ],
    customerMessageDraft:
      "Totally makes sense — the app is working, but the visual system is only partially applied right now, which makes it feel less “official.” The fastest win here is to standardize a few key components (buttons + status pills + headers) so the experience feels consistent across screens. Once that’s in place, teams usually feel much more confident adopting it.",
    internalNotes: [
      "Not a bug — design-system alignment / expectation issue.",
      "Add a theme baseline step to onboarding for internal rollouts.",
      "Opportunity: publish a simple best-practices guide for brand consistency.",
    ],
    tags: ["Theming", "Adoption"],
  },
  {
    id: "case-002",
    title: "Works for the owner, but rollout to the team is failing",
    risk: "High",
    customerName: "Example Customer 2",
    workspaceId: "flowhub-demo-001",
    appVersion: "v0.1",
    environment: "Production",
    authMode: "Workspace Admin",
    lastPublished: "Jan 20, 2024",
    lovableUrl: LOVABLE_URL,
    reportedProblem:
      "“It works for me, but my team isn’t using it / can’t complete workflows.”",
    customerGoal:
      "Enable team-wide adoption with clear expectations around access and who can do what.",
    whatWeChecked: [
      "Auth mode and whether key actions are admin-only",
      "Where team members would get blocked or confused",
      "Whether the UI explains role expectations",
      "Whether this is a product issue vs rollout issue",
    ],
    findings:
      "The current experience assumes admin-level access for key actions. Team members likely encounter missing actions or unclear permissions, which reads as ‘it’s broken’ even if nothing is technically failing.",
    resolutionNow: [
      "Clarify which actions are admin setup vs day-to-day team usage",
      "Add a simple rollout note: owner configures → team uses workflows",
      "Introduce a lightweight checklist for inviting/enablement",
    ],
    resolutionNext: [
      "Define roles (Admin / Editor / Viewer) and map them to workflow actions",
      "Add a small in-product permissions explainer for enterprise workspaces",
    ],
    customerMessageDraft:
      "This makes sense — the workspace is currently set up in an admin-first mode, so your team may not see the same actions you do (or may hit confusing blockers). The quick fix is to separate ‘admin setup’ from ‘day-to-day team usage’ and make expectations explicit. If you want, I can send a short rollout checklist so the team can get to value without friction.",
    internalNotes: [
      "Classic rollout + permissions expectation mismatch.",
      "Playbook: add a rollout checkpoint before expansion conversations.",
      "Product idea: basic role visibility / permissions guidance in-app.",
    ],
    tags: ["Rollout", "Permissions"],
  },
  {
    id: "case-003",
    title: "Customer isn’t seeing value yet — risk of churn",
    risk: "High",
    customerName: "Example Customer 3",
    workspaceId: "flowhub-demo-001",
    appVersion: "v0.1",
    environment: "Production",
    authMode: "Workspace Admin",
    lastPublished: "Jan 20, 2024",
    lovableUrl: LOVABLE_URL,
    reportedProblem:
      "“We’re two weeks in and not sure this is worth rolling out further.”",
    customerGoal:
      "Reach a clear time-to-value moment and tie usage to a real workflow outcome.",
    whatWeChecked: [
      "What the app is replacing (current workflow baseline)",
      "Whether the dashboard answers a daily question (“what needs attention?”)",
      "Whether users have a clear next action",
      "Whether the issue is product capability vs success plan",
    ],
    findings:
      "The app works, but it doesn’t create a strong daily value moment. Users can view workflows, but it’s not obvious what to do next or how this improves their current process.",
    resolutionNow: [
      "Define one clear value moment (create → assign → move status → complete)",
      "Add a ‘Needs attention’ / ‘Next actions’ section to the dashboard",
      "Run a narrow pilot: 1 team + 1 workflow type for 2 weeks",
    ],
    resolutionNext: [
      "Create a simple success plan with metrics (cycle time, completion rate, adoption)",
      "Add enablement cadence for new teams (15-min kickoff + office hours)",
    ],
    customerMessageDraft:
      "I hear you — the app is working, but the value isn’t obvious yet. The fastest path is to narrow to one workflow that matters, define a clear ‘value moment,’ and run a short pilot with one team so we can measure impact (cycle time, completion rate, time saved). Once we see that baseline improvement, rollout becomes much easier to justify.",
    internalNotes: [
      "Not a technical issue — success plan / workflow alignment problem.",
      "Playbook: require a defined value moment + pilot scope during onboarding.",
      "CS motion: a 2-week pilot template for new accounts.",
    ],
    tags: ["Time-to-Value", "Churn Risk"],
  },
];
