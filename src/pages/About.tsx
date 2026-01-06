import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 style={{ fontSize: 28 }}>About this project</h1>

      <p>
        I built this as a small, hands-on way to practice how I'd approach real customer issues in a customer-facing technical role.
      </p>

      <h3>What this is</h3>
      <p>
        FlowHub is a simple demo workspace I put together using Lovable to stand in for a real customer product. The Case Review tool walks through a realistic scenario — a customer reports low adoption, I dig into what's happening, and document how I'd think about it and respond.
      </p>

      <h3>Why I built it this way</h3>
      <p>
        The goal here isn't to show expertise or a perfect solution. It's to show how I approach problems: starting with the customer's goal, investigating carefully, communicating clearly, and turning one-off issues into something repeatable.
      </p>

      <h3>How this maps to my background</h3>
      <p>
        My background is in frontend engineering and SaaS sales, with a long stint as a professional poker player. That mix has shaped how I work — staying calm, asking good questions, and making decisions with incomplete information.
      </p>

      <h3>Who this is for</h3>
      <p>
        This project is intentionally small. It's just meant to give a quick sense of how I think and work in customer success, technical support, or similar roles that sit between product, engineering, and customers.
      </p>
    </Layout>
  );
}
