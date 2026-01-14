<style>
  :root {
    --accent: #38bdf8;
    --accent-soft: #0ea5e9;
    --text: #e5e7eb;
    --muted: #94a3b8;
    --border: #1e293b;
    --card: #020617;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--text);
  }

  .header {
    text-align: center;
    padding: 3rem 1rem;
    border-bottom: 1px solid var(--border);
  }

  .header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #38bdf8, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .header p {
    max-width: 700px;
    margin: auto;
    color: var(--muted);
  }

  .badge {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--accent-soft);
    color: var(--accent);
    font-size: 0.9rem;
  }

  .section {
    max-width: 1100px;
    margin: 3rem auto;
    padding: 0 1.5rem;
  }

  h2 {
    border-left: 4px solid var(--accent);
    padding-left: 0.7rem;
  }

  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.5rem;
    margin-top: 1rem;
  }

  .toc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
  }

  .toc-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.2rem;
  }

  .toc-card h3 {
    color: var(--accent);
    margin-top: 0;
  }

  ul {
    padding-left: 1.2rem;
    color: var(--muted);
  }

  footer {
    text-align: center;
    margin: 4rem 0 2rem;
    color: var(--muted);
    font-size: 0.9rem;
  }

  footer span {
    color: var(--accent);
  }
</style>

<div class="header">
  <h1>JavaScript Course</h1>
  <p>
    A structured and progressive JavaScript course focused on
    <strong>core language concepts</strong>, problem solving,
    and real-world logic — not just web development.
  </p>
  <div class="badge">Beginner → Intermediate → Advanced</div>
</div>

<div class="section">
  <h2>About This Course</h2>
  <div class="card">
    <p>
      This course is designed to help you truly understand JavaScript
      as a programming language and build strong foundations.
    </p>
    <ul>
      <li>Language fundamentals and mental models</li>
      <li>Logic, control flow, and data handling</li>
      <li>Modern JavaScript features</li>
      <li>Hands-on exercises and challenges</li>
    </ul>
  </div>
</div>

<div class="section">
  <h2>Course Index</h2>

  <div class="toc-grid">

    <div class="toc-card">
      <h3>Section 1: Introduction</h3>
      <ul>
        <li>Lesson 1.1 – [Lesson Title]</li>
        <li>Lesson 1.2 – [Lesson Title]</li>
        <li>Lesson 1.3 – [Lesson Title]</li>
      </ul>
    </div>

    <div class="toc-card">
      <h3>Section 2: JavaScript Basics</h3>
      <ul>
        <li>Lesson 2.1 – [Lesson Title]</li>
        <li>Lesson 2.2 – [Lesson Title]</li>
        <li>Lesson 2.3 – [Lesson Title]</li>
      </ul>
    </div>

    <div class="toc-card">
      <h3>Section 3: Control Flow & Logic</h3>
      <ul>
        <li>Lesson 3.1 – [Lesson Title]</li>
        <li>Lesson 3.2 – [Lesson Title]</li>
        <li>Lesson 3.3 – [Lesson Title]</li>
      </ul>
    </div>

  </div>
</div>

<div class="section">
  <h2>How to Use This Repository</h2>
  <div class="card">
    <ul>
      <li>Follow the sections in order</li>
      <li>Each lesson builds on the previous one</li>
      <li>Practice by modifying the examples</li>
      <li>Focus on understanding, not memorizing</li>
    </ul>
  </div>
</div>

<footer>
  Built with ❤️ by <span>Kuro</span> • JavaScript Course
</footer>
