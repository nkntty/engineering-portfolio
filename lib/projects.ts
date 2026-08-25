export type Project = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  stack: string[];
  context: string;
  problem: string;
  discovery: string;
  investigation: string;
  decisions: string[];
  solution: string[];
  contribution: string;
  results: string[];
  businessImpact: string;
  lessons: string;
  futureFeatures?: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-accounts-payable-automation",

    title: "AI-Powered Accounts Payable Automation",

    headline:
      "Building and validating an AI-assisted invoice processing workflow",

    summary:
      "Contributed to an AI-assisted Accounts Payable proof of concept that processes supplier emails and invoices, extracts structured information, validates data against ERP records, detects exceptions, and routes cases for human review.",

    stack: [
      "Python",
      "OpenAI",
      "LangGraph",
      "OCR",
      "Pydantic",
      "Pytest",
      "Git",
    ],

    context:
      "During my co-op internship, I worked on a team project to build a proof of concept for automating parts of an Accounts Payable inbox workflow. The system combined document processing, LLM-based extraction, deterministic validation, ERP/SAP data matching, case routing, response drafting, and audit logging.",

    problem:
      "Accounts Payable workflows require information from supplier emails and invoices to be extracted, checked against ERP records, validated for issues such as missing or mismatched information, and routed appropriately. The challenge was to automate useful parts of this process while keeping decisions reliable and reviewable.",

    discovery:
      "My initial responsibility focused on validation and testing. Because several upstream components were not yet available early in the project, I also built foundational pipeline components to unblock development, including document classification, OCR/text extraction, invoice field extraction, shared state, required-field checks, and an initial ERP validation implementation.",

    investigation:
      "As the team integrated its work, I traced the end-to-end pipeline across a codebase of more than 50 files. I used import chains, tests, and shared data models to understand how information moved from email intake through extraction, SAP lookup, validation, routing, response drafting, and audit logging. This helped identify integration issues that were not obvious when looking at individual modules.",

    decisions: [
      "Used LLM-based processing for tasks involving ambiguous language and document understanding, such as classification and structured field extraction.",
      "Kept deterministic checks such as required fields, ERP matching, validation rules, and routing logic in normal Python where possible.",
      "Used the test suite to understand expected system behaviour and identify gaps between individual components.",
      "Prioritized human review for uncertain or exceptional cases rather than treating the POC as a fully autonomous approval system.",
    ],

    solution: [
      "Built early components for email/document classification and PDF/image text extraction.",
      "Implemented LLM-based structured invoice field extraction.",
      "Contributed to the shared AgentState design and required-field validation.",
      "Built an initial ERP/SAP validation implementation using a dummy SAP dataset.",
      "Identified and fixed a po_reference versus po_number naming mismatch across the pipeline.",
      "Fixed unreachable logic in rule-based validation caused by an early return.",
      "Fixed a vendor-mismatch validation gap and updated outdated API test assertions.",
    ],

    contribution:
      "I started with validation and testing responsibilities, but expanded into foundational pipeline development when upstream work was not yet available. Later, I focused on integration debugging: tracing the full team codebase, identifying inconsistencies between components, fixing validation behaviour, and improving the test suite.",

    results: [
      "Improved the test state from 43 passing tests plus 1 expected failure to 44 passing tests.",
      "Converted a known vendor-validation xfail into a passing test by fixing the underlying validation gap.",
      "Resolved integration issues involving field naming, unreachable validation logic, and outdated test expectations.",
      "Helped establish foundational components that allowed the larger AP automation pipeline to be integrated and tested.",
    ],

    businessImpact:
      "The project was a proof of concept, so I do not claim a verified production cost or time reduction. Its practical value was demonstrating how document understanding, ERP validation, deterministic business rules, and human review could be combined into a testable workflow for reducing manual AP processing work.",

    lessons:
      "This project taught me how to navigate and debug a larger team codebase, use tests to understand expected behaviour, reason about shared state and import chains, and distinguish problems that benefit from LLMs from deterministic business logic that is better implemented with conventional code.",
  },

  {
    slug: "kaggle-customer-churn",

    title: "Customer Churn Prediction",

    headline:
      "🥉 Kaggle Bronze Medal — Top 15%",

    summary:
      "Built and evaluated a machine-learning pipeline for customer churn prediction, combining feature engineering, cross-validation, regularized models, gradient boosting, and ensemble optimization.",

    stack: [
      "Python",
      "XGBoost",
      "LightGBM",
      "Ridge",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Kaggle",
    ],

    context:
      "I participated in Kaggle's Playground Series customer churn prediction competition, a tabular machine-learning problem focused on predicting the probability that a customer will churn.",

    problem:
      "The goal was to produce well-generalized churn probabilities from customer attributes and service behaviour rather than simply fitting the training data. Model performance therefore depended on both useful feature representation and a validation strategy that could detect overfitting.",

    discovery:
      "I explored relationships between churn and customer characteristics such as contract type, internet service, tenure, service usage, and pricing. This led me to engineer additional features representing customer behaviour and how an individual customer's charges compared with similar customer groups.",

    investigation:
      "Instead of relying on a single model, I compared different modeling approaches using stratified cross-validation and out-of-fold predictions. I experimented with linear and tree-based models and used validation performance to decide how they should contribute to the final prediction.",

    decisions: [
      "Used stratified cross-validation to evaluate generalization more reliably.",
      "Engineered pricing and customer-group features rather than relying only on the original columns.",
      "Used regularization to help control overfitting.",
      "Combined Ridge, XGBoost, and LightGBM to capture different patterns in the data.",
      "Used out-of-fold predictions to optimize ensemble weights rather than selecting blend weights arbitrarily.",
    ],

    solution: [
      "Created customer behaviour, service-usage, contract, and pricing features.",
      "Created group-level statistical features and deviations from comparable customer groups.",
      "Used target encoding within the modeling pipeline.",
      "Trained Ridge, XGBoost, and LightGBM models.",
      "Evaluated models using stratified cross-validation and out-of-fold predictions.",
      "Optimized the final ensemble weights based on validation predictions.",
    ],

    contribution:
      "I designed and implemented the modeling workflow, including feature engineering, validation, model experimentation, regularization, and ensemble optimization.",

    results: [
      "🥉 Earned a Kaggle Bronze Medal.",
      "Finished in the Top 15% of competitors.",
      "Built an ensemble using Ridge, XGBoost, and LightGBM.",
      "Used out-of-fold evaluation to guide final model blending.",
    ],

    businessImpact:
      "This was a Kaggle competition rather than a production business deployment, so I do not claim a real-world revenue or retention impact. The project demonstrates how churn risk can be approached as a measurable prediction problem and how model decisions can be evaluated systematically.",

    lessons:
      "The competition reinforced the importance of validation strategy, feature engineering, regularization, and experimentation. I learned that improving generalization often requires understanding where a model gains signal and where complexity introduces overfitting, rather than simply increasing model complexity.",
  },



  {
  slug: "chairtime-attendance-management",

  title: "ChairTime — Client Software Project",

  headline:
    "Designing an attendance management system from a real client requirement",

  summary:
    "An in-development attendance management application for a small business in Japan. I translated an initial client request into an MVP covering employee clock-in/out, monthly attendance tracking, overtime visibility, administrator oversight, payroll-supporting summaries, and CSV export.",

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Authentication",
    "Vercel",
  ],

  context:
    "A client preparing to start an independently operated business in Japan approached me with a need for a simple way to manage employee attendance. The client wanted employees to record their attendance daily while giving administrators an easy way to review attendance, overtime, clock-out times, and monthly working days for payroll preparation. The project is currently in the requirements and development stage.",

  problem:
    "The client needs a centralized way to understand employee attendance without manually reviewing and calculating individual records at the end of each month. Employees should only need to manage and view their own attendance, while administrators need visibility across the entire staff.",

  discovery:
    "I started by translating the client's high-level request into separate employee and administrator workflows. This revealed that the product was not simply a clock-in interface: it also needed role-based access, monthly aggregation, overtime visibility, employee-level details, and payroll-supporting data export.",

  investigation:
    "I broke the request down into user roles, core workflows, required data, business rules, and open questions. I mapped the employee flow from login to clock-in, clock-out, daily records, and monthly summaries, while the administrator flow focuses on staff-wide attendance, individual employee details, monthly totals, and CSV export. I also identified payroll and attendance rules that must be confirmed with the client before implementing calculation logic.",

  decisions: [
    "Separated employee and administrator experiences because each role requires different data visibility and permissions.",
    "Defined clock-in/out, monthly attendance summaries, overtime visibility, administrator oversight, and CSV export as the core MVP scope.",
    "Designed the system around structured attendance records so monthly totals can be calculated rather than entered manually.",
    "Kept payroll calculations as an area requiring additional business-rule validation before treating them as authoritative.",
    "Prioritized a mobile-friendly web application because employees need quick access to daily clock-in and clock-out actions.",
  ],

  solution: [
    "Designed an employee dashboard for clock-in, clock-out, current work status, and recent attendance records.",
    "Designed a monthly calendar showing normal workdays, overtime days, and days off.",
    "Designed employee monthly summaries for working days, actual hours, and overtime.",
    "Designed an administrator dashboard showing staff attendance and monthly workforce information.",
    "Designed employee detail views for reviewing individual attendance and payroll-supporting information.",
    "Included CSV export in the MVP plan to make attendance data easier to use during payroll preparation.",
    "Defined role-based authorization so employees can access their own attendance while administrators can review staff-wide records.",
  ],

  contribution:
    "I am responsible for translating the client's initial business request into product requirements, defining the MVP scope, designing the user flows and data model, planning the system architecture, and developing the application. I am also identifying ambiguous business rules with the client before implementing them rather than making assumptions in the software.",

  results: [
    "Translated an informal client request into a structured MVP specification.",
    "Defined separate employee and administrator workflows and access requirements.",
    "Designed the initial attendance, monthly summary, administrator, and payroll-supporting interfaces.",
    "Identified unresolved attendance and payroll rules before implementation.",
    "Development currently in progress.",
  ],

  businessImpact:
    "The intended business value is to make monthly attendance review and payroll preparation easier by centralizing daily attendance records and automatically summarizing working days, hours, and overtime. Because the application has not yet been deployed in the client's business, no time savings or financial impact are claimed yet.",

  lessons:
    "This project is teaching me that client software development begins before implementation. A short request such as 'make attendance and payroll easier to manage' contains many hidden product and business decisions. Converting that request into user roles, workflows, permissions, data models, business rules, and a deliberately limited MVP is a core part of building useful software.",

  futureFeatures: [
  "Attendance correction requests with manager approval.",
  "Shift scheduling and paid-leave management.",
  "Multi-location support for businesses operating more than one workplace.",
  "Payroll system integration to reduce manual payroll preparation.",
  "Attendance anomaly detection and alerts for missing clock-outs, unusual overtime, or inconsistent records.",
  ],
},



];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}