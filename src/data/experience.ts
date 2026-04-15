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
      "Consulting for a Fortune 100 financial company to migrate a direct messaging service to AWS using Spring, Kinesis, DynamoDB, Lambda, and SQS — coordinating across 3 teams through production deployment under elevated risk",
      "Building improvements to an Agentic AI platform for a top sports league, significantly improving precision and recall through reranking and model-based evaluation",
    ],
  },
  {
    type: "work",
    title: "Software Engineer Intern",
    organization: "Publicis Sapient",
    location: "Chicago, IL",
    period: "June 2024 – August 2024",
    bullets: [
      "Collaborated on an Agile client project for a Fortune 25 company, enhancing user experiences on a healthcare app with personalized predictive analytics",
      "Trained an AI chatbot using OpenAI embeddings + LangChain; built React Native app with Python Flask backend and Azure SQL database",
      "Adhered to SOLID principles, leveraged CI/CD with Vercel, and executed Jest unit testing to meet industry quality standards",
    ],
  },
  {
    type: "work",
    title: "Software Engineer Intern",
    organization: "Sallie Mae",
    location: "Indianapolis, IN",
    period: "May 2023 – August 2023",
    bullets: [
      "Innovated a system to redirect thousands of daily SNS config messages to CloudWatch and S3 via Python Lambda functions, eliminating email clutter",
      "Authored Ansible scripts and CloudFormation templates in YAML to automate production deployment and provision Athena + Glue + S3 resources",
      "Built a Python script to automate cross-account access and subscriptions for hundreds of AWS accounts while minimizing security risks",
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
