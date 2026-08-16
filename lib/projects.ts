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
};

export const projects: Project[] = [
  {
    slug: "example-performance-improvement",
    title: "Performance Improvement",
    headline: "Reduced a critical workflow from 8.2s to 1.6s",
    summary: "Identified bottlenecks in a high-traffic workflow, evaluated multiple approaches, and redesigned the processing path for faster and more reliable execution.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "AWS"],
    context: "Example placeholder. Replace this with the product, team, and business context without exposing confidential information.",
    problem: "Customers were experiencing slow response times in a critical workflow, especially when processing larger datasets.",
    discovery: "I reviewed latency metrics and support reports and found that a specific request path was responsible for a large share of slow requests.",
    investigation: "I profiled the request flow and isolated repeated database work, synchronous expensive processing, and missing reuse of frequently requested data.",
    decisions: [
      "Compared query optimization, caching, and asynchronous processing.",
      "Prioritized changes that reduced latency without creating excessive operational complexity.",
      "Avoided caching highly volatile response data because invalidation would be difficult to reason about."
    ],
    solution: [
      "Removed repeated database queries.",
      "Moved expensive work out of the synchronous request path.",
      "Added targeted caching for stable intermediate results.",
      "Added monitoring around processing latency and failures."
    ],
    contribution: "I led the investigation, proposed the approach, and implemented the backend changes. Replace this sentence with your actual contribution.",
    results: ["P95 latency: 8.2s → 1.6s", "Fewer timeout-related failures", "Improved observability for the workflow"],
    businessImpact: "Replace this with a verified business outcome: for example fewer support tickets, better conversion, reduced operating cost, or faster internal operations. Do not invent metrics.",
    lessons: "Explain what you would do differently next time and what this project taught you about system design, product trade-offs, or working across teams."
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
