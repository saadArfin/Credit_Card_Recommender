# Credit Card Recommender

A modern, luxury-themed credit card recommendation web app powered by Next.js (React) and FastAPI. Users interact with a conversational AI chatbot to receive personalized credit card recommendations, with a premium, accessible, and visually appealing user experience.

## Features

- **Conversational Chatbot UI**: Modern, luxury-inspired design with dark gradients, gold/teal/blue accents, bold fonts, and smooth animations.
- **Personalized Recommendations**: AI-driven suggestions based on user input, fetched securely from a FastAPI backend using session-based logic.
- **Robust Data Flow**: Recommendations are fetched using a session ID, not URL params, for security and reliability.
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support.
- **Branding & UX**: Custom logo, responsive layout, "Start Over" button, typing indicator, and error handling.
- **Modern Tech Stack**: Next.js (React), TypeScript, FastAPI, Tailwind CSS, React Icons.

## Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend**: FastAPI (Python)
- **Deployment**: Vercel (frontend), Render/Fly.io/Railway (backend)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saadArfin/Credit_Card_Recommender.git
cd Credit_Card_Recommender/credit_card_recommender
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the `credit_card_recommender` directory:

```
NEXT_PUBLIC_API_BASE_URL=https://your-fastapi-backend-url
```

Replace with your deployed FastAPI backend URL.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Backend Setup

- The FastAPI backend should be deployed separately (e.g., Render, Railway, Fly.io).
- Ensure CORS is enabled for your frontend domain.
- The backend must support `/chat` and `/recommend` endpoints with session-based logic.

## Deployment

### Frontend (Vercel)
- Push your code to GitHub.
- Import the repo in [Vercel](https://vercel.com/), set `NEXT_PUBLIC_API_BASE_URL` in project settings.
- Deploy!

### Backend
- Deploy FastAPI to your preferred cloud provider.
- Update the frontend `.env.local` and Vercel environment variable to point to the backend URL.

## Accessibility & UX
- Fully keyboard accessible
- ARIA labels and roles
- Responsive and mobile-friendly
- Error handling and fallback UI

## License

MIT

---

**Credit Card Recommender** — A luxury fintech experience for smarter credit card choices.
