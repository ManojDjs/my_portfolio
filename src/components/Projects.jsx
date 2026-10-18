const projectsData = [
  {
    "title": "FastAPI Docker Boilerplate",
    "category": "Python API Development",
    "description": "A Python API boilerplate packaged with Docker.",
    "tags": [
      "Python",
      "FastAPI",
      "Docker"
    ],
    "label": "PROJECT 01",
    "url": "https://github.com/ManojDjs/fast_api_docker_boilerplate"
  },
  {
    "title": "FastAPI End-to-End",
    "category": "Backend Architecture",
    "description": "A FastAPI project with architecture and testing, Docker, Celery, Redis and SQL.",
    "tags": [
      "Python",
      "FastAPI",
      "Celery",
      "Redis"
    ],
    "label": "PROJECT 02",
    "url": "https://github.com/ManojDjs/fastapi_e2e"
  },
  {
    "title": "Dynamic CV",
    "category": "Frontend Development",
    "description": "A Vue portfolio that loads its content dynamically from JSON using PrimeVue.",
    "tags": [
      "Vue.js",
      "JSON",
      "PrimeVue"
    ],
    "label": "PROJECT 03",
    "url": "https://github.com/ManojDjs/Dynamic_CV"
  },
  {
    "title": "Flask API & Authentication",
    "category": "API Development",
    "description": "A Flask application with basic authentication and SQLAlchemy database integration.",
    "tags": [
      "Python",
      "Flask",
      "SQLAlchemy"
    ],
    "label": "PROJECT 04",
    "url": "https://github.com/ManojDjs/Flask_Basic_App"
  },
  {
    "title": "AI Learning Notes",
    "category": "Artificial Intelligence",
    "description": "Personal projects and learning notes covering AI concepts programmed in Python.",
    "tags": [
      "Python",
      "AI",
      "Jupyter"
    ],
    "label": "PROJECT 05",
    "url": "https://github.com/ManojDjs/AI_PROGS"
  },
  {
    "title": "Classroom Frontend",
    "category": "E-Learning Platform",
    "description": "A containerized Vue frontend communicating with a Django REST Framework backend.",
    "tags": [
      "Vue.js",
      "Django DRF",
      "Docker"
    ],
    "label": "PROJECT 06",
    "url": "https://github.com/ManojDjs/ClassRoomForntend"
  },
  {
    "title": "Django CI/CD",
    "category": "DevOps & Delivery",
    "description": "A continuous integration and delivery pipeline for a Django API.",
    "tags": [
      "Python",
      "Django",
      "CI/CD"
    ],
    "label": "PROJECT 07",
    "url": "https://github.com/ManojDjs/DjangoCI-CD"
  },
  {
    "title": "Computer Vision API",
    "category": "Computer Vision",
    "description": "Authentication and OpenCV REST APIs for heart rate variability predictions.",
    "tags": [
      "Python",
      "OpenCV",
      "REST APIs"
    ],
    "label": "PROJECT 08",
    "url": "https://github.com/ManojDjs/Backend_HRv"
  }
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-y border-white/10 bg-[#0b0b0b] px-6 py-20 text-white md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-mono uppercase tracking-widest text-red-400">Selected work</p>
        <h2 id="projects-title" className="text-4xl font-black tracking-tight md:text-5xl">Projects you can explore.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">Python APIs, data and AI experiments, and web applications. Explore the repositories for the code and implementation details.</p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map(project => (
            <article key={project.url} className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 transition-colors hover:border-red-500/60">
              <p className="mb-5 text-[11px] font-mono uppercase tracking-wider text-red-400">{project.category}</p>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mb-6 mt-3 text-base leading-relaxed text-white/75">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.tags.map(tag => <li key={tag} className="rounded border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80">{tag}</li>)}
              </ul>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="mt-5 inline-flex min-h-11 items-center self-start font-semibold text-red-400 hover:text-white">View code on GitHub <span aria-hidden="true" className="ml-2">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
