const expertiseData = [
  {
    "number": "01",
    "title": "Data & Cloud Engineering",
    "text": "Building and maintaining data pipelines with PySpark, Pandas, SQL, Azure and Databricks.",
    "tag": "DATA & CLOUD",
    "gradient": "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]"
  },
  {
    "number": "02",
    "title": "Software Engineering & APIs",
    "text": "Building FastAPI and Python services with test-driven development, unit and integration tests, and iterative refactoring, alongside experience with Django REST Framework and Flask.",
    "tag": "SOFTWARE & APIs",
    "gradient": "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]"
  },
  {
    "number": "03",
    "title": "Agentic AI & Generative AI",
    "text": "Building AI agents with LangGraph and MLflow on Azure and Databricks, combining RAG, model serving, Unity Catalog and evaluation.",
    "tag": "AI & DATA SCIENCE",
    "gradient": "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]"
  },
  {
    "number": "04",
    "title": "Technical Leadership & Delivery",
    "text": "Leading development and delivery across the software lifecycle, with recent work using Azure DevOps, Docker and Kubernetes.",
    "tag": "LEADERSHIP & DELIVERY",
    "gradient": "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="bg-[#050505] px-6 py-20 text-white md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-mono uppercase tracking-widest text-red-400">Core capabilities</p>
        <h2 id="expertise-title" className="mb-10 text-4xl font-black tracking-tight md:text-5xl">Engineering expertise.</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {expertiseData.map(item => (
            <article key={item.number} className="rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8">
              <p className="mb-5 text-[11px] font-mono uppercase tracking-widest text-red-400">{item.tag}</p>
              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
              <p className="text-base leading-relaxed text-white/75">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
