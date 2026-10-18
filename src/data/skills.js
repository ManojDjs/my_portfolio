// Role skills are sourced from LinkedIn; recent project tools come from Manoj.
export const skillCategories = [
  {
    "title": "Software Engineering",
    "tag": "DEVELOPMENT",
    "description": "FastAPI and Python backend services, developed with TDD, automated tests and iterative refactoring.",
    "skills": [
      "FastAPI",
      "Python",
      "Test-Driven Development (TDD)",
      "PyTest",
      "REST APIs",
      "Unit Testing",
      "Integration Testing",
      "Django",
      "Django REST Framework",
      "Flask",
      "Microservices",
      "JWT Authentication",
      "API Integration",
      "Code Refactoring",
      "Performance Optimisation"
    ]
  },
  {
    "title": "Generative AI Engineering",
    "tag": "CURRENT PROJECT",
    "description": "Agentic AI applications with LangGraph, retrieval-augmented generation, and MLflow on Databricks.",
    "skills": [
      "RAG",
      "LLM Chains",
      "LangGraph",
      "Agent Workflows",
      "Prompt Engineering",
      "LangChain",
      "Embeddings",
      "Databricks AI Search",
      "Model Serving",
      "MLflow",
      "Unity Catalog",
      "GenAI Evaluation"
    ]
  },
  {
    "title": "Data Engineering",
    "tag": "DATA PLATFORMS",
    "description": "Distributed processing, data pipelines, warehousing and workflow management.",
    "skills": [
      "PySpark",
      "Apache Spark",
      "SQL",
      "Big Data",
      "Data Modelling",
      "Data Warehousing",
      "Workflow Management"
    ]
  },
  {
    "title": "AI & Data Science",
    "tag": "INTELLIGENCE",
    "description": "AI workloads, predictive modelling and machine learning, supported by a Python data science toolkit.",
    "skills": [
      "Databricks AI",
      "Machine Learning",
      "Data Science",
      "Predictive Modelling",
      "Python",
      "Pandas",
      "NumPy",
      "ML Ops"
    ]
  },
  {
    "title": "Azure & Cloud Platforms",
    "tag": "CLOUD",
    "description": "Cloud data services, serverless workloads and messaging across Azure and AWS.",
    "skills": [
      "Microsoft Azure",
      "Azure Databricks",
      "Databricks",
      "Azure Data Factory",
      "Azure Data Lake",
      "Azure Synapse Analytics",
      "Azure Service Bus",
      "Serverless",
      "Azure Functions",
      "Azure AKS",
      "AWS",
      "Amazon S3",
      "AWS Lambda"
    ]
  },
  {
    "title": "Testing & Delivery",
    "tag": "DELIVERY",
    "description": "Test-driven development, automated feedback and reliable delivery of containerized applications.",
    "skills": [
      "Test-Driven Development (TDD)",
      "PyTest",
      "Unit Testing",
      "Integration Testing",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "Linux",
      "CI/CD"
    ]
  },
  {
    "title": "Analytics & Visualisation",
    "tag": "INSIGHTS",
    "description": "Analytical workflows, mining data and communicating results through reports and dashboards.",
    "skills": [
      "Data Analytics",
      "Analytics",
      "Data Mining",
      "Power BI",
      "Tableau",
      "Plotly"
    ]
  },
  {
    "title": "Web Applications",
    "tag": "INTERFACES",
    "description": "Web application experience with Vue.js and its ecosystem, alongside backend development.",
    "skills": [
      "Vue.js",
      "Vuetify",
      "Vuex",
      "JavaScript"
    ]
  },
  {
    "title": "Leadership & Ways of Working",
    "tag": "COLLABORATION",
    "description": "Technical leadership, cross-functional collaboration and delivery through Agile practices.",
    "skills": [
      "Leadership",
      "Agile Methodologies",
      "Workflow Management",
      "Mentoring",
      "Technical Communication"
    ]
  }
];

// Current project skills confirmed by Manoj. Framework mappings use the official Microsoft and Databricks guides. These are applied skills; Manoj subsequently confirmed both associated certifications as earned.
export const aiProjectSkillGroups = [
  {
    "title": "Agents & LLM Applications",
    "platform": "Databricks GenAI",
    "skills": [
      "Python",
      "LangGraph",
      "LangChain",
      "Agent Workflows",
      "Prompt Engineering",
      "LLM Chains",
      "Model Selection"
    ]
  },
  {
    "title": "Retrieval & AI Data",
    "platform": "Azure + Databricks",
    "skills": [
      "RAG",
      "Embeddings",
      "Databricks AI Search",
      "Vector Search",
      "Azure Cosmos DB",
      "Azure PostgreSQL",
      "pgvector",
      "Azure Managed Redis"
    ]
  },
  {
    "title": "Model Lifecycle & Evaluation",
    "platform": "Databricks GenAI",
    "skills": [
      "MLflow",
      "Model Serving",
      "GenAI Evaluation",
      "Model Monitoring"
    ]
  },
  {
    "title": "Containers & Hosting",
    "platform": "Azure AI-200",
    "skills": [
      "Docker",
      "Kubernetes",
      "Azure AKS",
      "Azure Container Registry",
      "Azure Container Apps",
      "Azure App Service",
      "KEDA"
    ]
  },
  {
    "title": "Services & Integration",
    "platform": "Azure AI-200",
    "skills": [
      "FastAPI",
      "Azure SDKs",
      "Azure Service Bus",
      "Azure Event Grid",
      "Azure Functions"
    ]
  },
  {
    "title": "Governance & Observability",
    "platform": "Azure + Databricks",
    "skills": [
      "Unity Catalog",
      "Azure Key Vault",
      "Azure App Configuration",
      "OpenTelemetry",
      "KQL"
    ]
  }
];

export const azureAiSource = "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200";

export const databricksGenAiSource = "https://www.databricks.com/learn/certification/genai-engineer-associate";

const displayNames = {
  'Python (Programming Language)': 'Python',
  'Pandas (Software)': 'Pandas',
  'Microsoft Power BI': 'Power BI',
  'Azure Synapse analytics': 'Azure Synapse Analytics',
  'Databricks ai': 'Databricks AI',
  'Data Modeling': 'Data Modelling',
  'Tabelaue': 'Tableau',
  'Amazon Web Services (AWS)': 'AWS',
};

export function displaySkill(skill) {
  return displayNames[skill.trim()] || skill.trim();
}
