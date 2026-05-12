export const faq = [
  {
    "id": "faq-1",
    "question": "What is this placeholder content for?",
    "answer": "Placeholder content is used to test layout, spacing, routing, SEO structure, and component behavior before real content is ready. It is not final copy.",
    "category": "General"
  },
  {
    "id": "faq-2",
    "question": "How do I replace this with real content?",
    "answer": "Update the JSON files in _content/placeholders/ with real data, then run the generate-content script to regenerate the TypeScript output files.",
    "category": "General"
  },
  {
    "id": "faq-3",
    "question": "Is this content visible to users?",
    "answer": "Only in development or staging environments. Never ship placeholder content to production without replacing it first.",
    "category": "Usage"
  },
  {
    "id": "faq-4",
    "question": "Can I add more FAQ entries?",
    "answer": "Yes. Add new objects to this array following the same shape, then re-run the generator.",
    "category": "Usage"
  }
] as const;
