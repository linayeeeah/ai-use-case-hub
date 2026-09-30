# AI Use Case Hub 2.0

A portable Next.js application for discovering, submitting, validating, and governing AI use cases across an organization.

## Included flows

- Homepage with portfolio signals and recommended use cases
- Chatbot-guided idea submission
- Switchable Mock and Live AI modes
- Live conversational idea shaping through the OpenAI Responses API
- Similar-idea detection and complete scripted demo journeys
- Searchable public use-case library
- Restricted project workspace with evidence, risks, and decisions
- Manager review queue with feedback, approve/request-changes decisions, and AI-assisted exploration
- Leadership dashboard with portfolio value and decision queue
- Responsive desktop and mobile layouts
- Server-side AI endpoint; the API key is never exposed to the browser

## Requirements

- Node.js 22.13 or newer
- npm
- An OpenAI API key only when using Live mode

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Mock mode works without external services. To enable Live mode, copy the environment template and add an OpenAI API key:

```bash
cp .env.example .env.local
# Edit .env.local and set OPENAI_API_KEY
npm run dev
```

Never commit `.env.local`; it is ignored by Git.

## Production build

```bash
npm run build
npm start
```

The project is platform-independent and can run anywhere that supports a standard Next.js Node deployment. Configure `OPENAI_API_KEY` as a secret in the destination environment for Live mode. The default model is `gpt-5-mini`; override it with `OPENAI_MODEL` if required.

Portfolio records remain illustrative in both modes. Mock mode uses scripted AI responses for reliable demonstrations; Live mode calls the OpenAI API for Idea Copilot and Manager Copilot interactions.
