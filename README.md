<style>
  :root {
    --bg: #0f172a;
    --card: #020617;
    --accent: #38bdf8;
    --accent-soft: #0ea5e9;
    --text: #e5e7eb;
    --muted: #94a3b8;
    --border: #1e293b;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: linear-gradient(180deg, #020617, #0f172a);
    color: var(--text);
    line-height: 1.6;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  header {
    padding: 4rem 1.5rem 3rem;
    text-align: center;
    border-bottom: 1px solid var(--border);
  }

  header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #38bdf8, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  header p {
    max-width: 700px;
    margin: 0 auto;
    color: var(--muted);
    font-size: 1.1rem;
  }

  .badge {
    display: inline-block;
    margin-top: 1.2rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid var(--accent-soft);
    color: var(--accent);
    font-size: 0.9rem;
  }

  main {
    max-width: 1100px;
    margin: auto;
    padding: 3rem 1.5rem;
  }

  section {
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    border-left: 4px solid var(--accent);
    padding-left: 0.8rem;
  }

  .card {
    background: rgba(2, 6, 23, 0.8);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }

  .toc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
  }

  .toc-card {
    background: #020617;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.2rem 1.3rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .toc-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .toc-card h3 {
    margin-top: 0;
    color: var(--accent);
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin: 0.4rem 0;
    color: var(--muted);
  }

  footer {
    border-top: 1px solid var(--border);
    text-align: center;
    padding: 2.5rem 1.5rem;
    color: var(--muted);
    font-size: 0.9rem;
  }

  footer span {
    color: var(--accent);
  }
</style>

<header>
  <h1>JavaScript Course</h1>
  <p>
    A structured and progressive JavaScript course focused on
    <strong>core language concepts</strong>, problem solving,
    and real-world logic — not just web development.
  </p>
  <div class="badge">Beginner → Intermediate → Advanced</div>
</header>

<main>

<section id="about">
  <h2>About This Course</h2>
  <div class="card">
    <p>
      This course is designed to help you truly understand JavaScript
      as a programming language. You will learn how JavaScript works,
      how to think like a developer, and how to apply the language
      beyond simple use cases.
    </p>
    <ul>
      <li>Language fundamentals and mental models</li>
      <li>Logic, control flow, and data handling</li>
      <li>Modern JavaScript features</li>
      <li>Hands-on exercises and challenges</li>
    </ul>
  </div>
</section>

<section id="toc">
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

    <div class="toc-card">
      <h3>Section 4: Data Structures</h3>
      <ul>
        <li>Lesson 4.1 – [Lesson Title]</li>
        <li>Lesson 4.2 – [Lesson Title]</li>
        <li>Lesson 4.3 – [Lesson Title]</li>
      </ul>
    </div>

    <div class="toc-card">
      <h3>Section 5: Functions & Scope</h3>
      <ul>
        <li>Lesson 5.1 – [Lesson Title]</li>
        <li>Lesson 5.2 – [Lesson Title]</li>
        <li>Lesson 5.3 – [Lesson Title]</li>
      </ul>
    </div>

    <div class="toc-card">
      <h3>Section 6: Advanced Concepts</h3>
      <ul>
        <li>Lesson 6.1 – [Lesson Title]</li>
        <li>Lesson 6.2 – [Lesson Title]</li>
        <li>Lesson 6.3 – [Lesson Title]</li>
      </ul>
    </div>

  </div>
</section>

<section id="usage">
  <h2>How to Use This Repository</h2>
  <div class="card">
    <ul>
      <li>Follow the sections in order</li>
      <li>Each lesson builds on the previous one</li>
      <li>Practice by modifying the examples</li>
      <li>Focus on understanding, not memorizing</li>
    </ul>
  </div>
</section>

</main>

<footer>
  <p>Built with ❤️ by <span>Kuro</span> • JavaScript Course</p>
</footer>
