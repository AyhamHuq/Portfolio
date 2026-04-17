export interface ExperienceEntry {
  type: "work" | "education" | "certification" | "hackathon";
  title: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    type: "work",
    title: "Associate Software Consultant",
    organization: "CapTech Ventures",
    location: "Chicago, IL",
    period: "July 2025 – Present",
    bullets: [
      "Consulted for a client team from a Fortune 100 financial company to migrate a direct messaging service to AWS and maestro using various Spring APIs, Kinesis, DynamoDB, Lambda, and SQS",
      "Operated across 3 teams to seamlessly incorporate changes and coordinated production deployment during a period of elevated risk",
      "Reported to a top sports league to make improvements to an Agentic AI platform fullstack",
      "Drastically improved precision and recall of the model with reranking and model-based evaluation",
    ],
  },
  {
    type: "work",
    title: "Software Engineer Intern",
    organization: "Publicis Sapient",
    location: "Chicago, IL",
    period: "June 2024 – August 2024",
    bullets: [
      "Collaborated on an Agile-focused client project for a Fortune 25 company to enhance user experiences on a healthcare app by using personalized predictive healthcare analytics",
      "Trained an AI model and chat bot using an OpenAI embeddings model with LangChain",
      "Hosted React Native app on an emulator with a Python Flask and Azure SQL database backend",
      "Adhered to SOLID principles, leveraged CI/CD using Vercel, and executed Jest unit testing to ensure code quality meets industry standards",
    ],
  },
  {
    type: "work",
    title: "Software Engineer Intern",
    organization: "Sallie Mae",
    location: "Indianapolis, IN",
    period: "May 2023 – August 2023",
    bullets: [
      "Employed scaled Agile framework with Azure DevOps and Git to complete projects across 7 sprints",
      "Innovated a system to redirect thousands of daily config SNS messages across to CloudWatch Logs and S3 using Lambda functions written in Python AWS SDK to reduce email clutter for users",
      "Wrote an Ansible script and a Cloud Formation template in YAML to automate code deployment in production as well as deploy resources such as Athena SQL queries with Glue and S3",
      "Built a Python script to automate cross account access and subscriptions for hundreds of current AWS accounts while simultaneously minimizing security risks",
    ],
  },
  {
    type: "education",
    title: "B.S. Computer Science and Engineering",
    organization: "The Ohio State University",
    location: "Columbus, OH",
    period: "Graduated May 2025",
    bullets: ["Cumulative GPA: 3.95"],
  },
  {
    type: "certification",
    title: "AWS Certifications",
    organization: "Amazon Web Services",
    location: "",
    period: "",
    bullets: [
      "AWS Certified Solutions Architect – Associate",
      "AWS Certified AI Practitioner – Associate",
    ],
  },
  {
    type: "hackathon",
    title: "HackOHI/O 2024 — 2nd Place",
    organization: "AEP Challenge",
    location: "Columbus, OH",
    period: "October 2024",
    bullets: [
      "Won 2nd place out of 17 teams in a 24-hour hackathon with 800+ participants",
      "Trained an AI safety classification model using FAISS with preprocessing including lemmatization and stopword removal on 20,000+ rows of user responses",
      "Integrated a cross-platform app enabling real-time feedback on safety reports in the field",
    ],
  },
];
