import './App.css'

function App() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">AI</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="eyebrow">MACHINE LEARNING • DATA SCIENCE</p>

        <h1>I use machine learning to turn data into clear, evidence-based decisions.
          
        </h1>

        <p className="intro">
          I’m Aliza Iqbal, a data science student building practical
          machine learning projects and turning data into useful insights.
        </p>

        <a href="#contact" className="button">
          Get in Touch
        </a>
      </section>

      <section className="work" id="work">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>Case Studies & Projects</h2>

        <div className="project-grid">

          <article className="project-card">
            <p className="project-number">01</p>
            <h3>Content Decline / Signal Audit</h3>
            <p>
              Analyzed content performance data to identify patterns
              behind declining search impressions and uncover useful
              signals for content decisions.
            </p>
            <span>Machine Learning • Data Analysis</span>
          </article>

          <article className="project-card">
            <p className="project-number">02</p>
            <h3>Decision Tree vs Hand-Rule Baseline</h3>
            <p>
              Compared a simple hand-crafted rule with a decision tree
              baseline to evaluate how machine learning performs against
              a straightforward benchmark.
            </p>
            <span>Scikit-learn • Classification</span>
          </article>

          <article className="project-card">
            <p className="project-number">03</p>
            <h3>Smart Tourism Guide API</h3>
            <p>
              Built a backend API concept for a smart tourism guide,
              designed to organize and serve useful tourism information.
            </p>
            <span>Python • Django REST Framework</span>
          </article>

        </div>
      </section>
      <section className="about" id="about">
  <div className="about-header">
    <p className="eyebrow">ABOUT ME</p>
    <h2>Turning data into practical solutions.</h2>
  </div>

  <div className="about-content">
    <div>
      <h3>Background</h3>
      <p>
        I’m Aliza Iqbal, a data science student interested in machine
        learning, data analysis, and building practical technology
        solutions.
      </p>
    </div>

    <div>
      <h3>My Approach</h3>
      <p>
        I focus on understanding the data first, testing simple
        baselines, and using evidence to make clear and useful decisions.
      </p>
    </div>

    <div>
      <h3>Skills & Tools</h3>
      <p>
        Python • Pandas • NumPy • Matplotlib • Scikit-learn •
        Django REST Framework • SQL
      </p>
    </div>

    <div>
      <h3>Career Direction</h3>
      <p>
        I’m building my skills in machine learning and data science
        through practical projects and real-world problem solving.
      </p>
    </div>
  </div>
</section>
    </main>
  )
}

export default App