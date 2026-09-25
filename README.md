# AI Use Case Hub

A runnable MVP for discovering, submitting, validating, and governing AI use cases across an organization.

## Included flows

- Homepage with portfolio signals and recommended use cases
- Chatbot-guided idea submission
- Mock AI idea shaping and similar-idea detection
- Searchable public use-case library
- Restricted project workspace with evidence, risks, and decisions
- Leadership dashboard with portfolio value and decision queue
- Responsive desktop and mobile layouts
- `AIService` adapter ready for a server-side real AI implementation

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
npm start
```

All data and AI responses in this MVP are illustrative. The extension point for a real AI provider is `lib/ai-service.ts`; secrets should only be used server-side.
