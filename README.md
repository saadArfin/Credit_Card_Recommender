# Credit Card Recommender – Frontend (Next.js)

A modern, agent-powered web app that guides users through a personalized Q&A journey and recommends the best-fit Indian credit cards using an LLM-powered backend agent (Gemini) and a curated card database. Built with Next.js, this frontend delivers a luxury fintech experience with a conversational UI, robust data flow, and seamless integration with the backend.

---

## 🧩 Project Structure

- **Conversational Chatbot UI**: Modern, chat interface with dynamic Q&A, typing indicator, and accessible design.
- **Session-Based Data Flow**: User answers are stored per session; recommendations are fetched securely from the backend using a session ID.
- **Post-Conversation Summary**: After the chat, users see a visually rich summary of top card recommendations, with reasons and reward simulations.
- **Mobile Responsive**: Fully responsive and accessible on all devices.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend**: FastAPI (Python) with Gemini LLM agent and REST API

---

## 🗂️ Features

- **Conversational Agent**: Guides users through:
  - Monthly income
  - Spending habits (fuel, travel, groceries, dining)
  - Preferred benefits (cashback, travel points, lounge access)
  - Existing cards (optional)
  - Approx. credit score (or "unknown")
- **Card Recommendations**: Ranks and displays top 3 cards with:
  - Card name, image, and issuer
  - Key reasons for recommendation
  - Reward simulation (e.g., "You could earn Rs. 8,000/year cashback")
  - Apply link (dummy or real)
- **Restart & Compare**: Option to restart the flow or return to chat.
- **Robust Error Handling**: Graceful fallbacks for missing data or API errors.
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support.

---

## 📝 Agent Flow & Prompt Design

1. **Session Start**: User opens chat, receives a friendly greeting and first question.
2. **Dynamic Q&A**: Agent asks follow-up questions based on previous answers, storing all responses in session context.
3. **Recommendation Trigger**: When enough info is gathered, agent signals completion and triggers recommendations.
4. **Summary Screen**: Frontend fetches recommendations using the session ID and displays:
   - Card details, images, reasons, reward simulation, and apply links.
5. **Restart/Compare**: User can restart the flow or return to chat for further queries.

**Prompt Design**: The backend agent uses a system prompt to:
- Greet the user and explain the process
- Ask for all required info (income, spending, preferences, etc.)
- Store answers in session
- Only recommend cards when enough info is collected
- Provide clear, friendly, and context-aware responses

---

## 🏗️ Setup Instructions

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

Create a `.env.local` file:

```
NEXT_PUBLIC_API_BASE_URL=https://your-fastapi-backend-url
```

Set this to your deployed FastAPI backend URL.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🌐 Deployment

### Frontend (Vercel)
- Push your code to GitHub.
- Import the repo in [Vercel](https://vercel.com/), set `NEXT_PUBLIC_API_BASE_URL` in project settings.
- Deploy!

### Backend
- Deploy FastAPI to your preferred cloud provider (Render, Railway, Fly.io, etc.).
- Ensure CORS is enabled for your frontend domain.
- The backend must support `/chat` and `/recommend` endpoints with session-based logic.

---

## 📄 Documentation

- **Agent Flow**: See [Agent Flow & Prompt Design](#agent-flow--prompt-design) above.
- **Card Data**: Card database is managed in the backend ([backend repo](https://github.com/saadArfin/Credit_Card_Recommender_Backend)).
- **Frontend**: All chat and recommendation UI logic is in `src/components/ChatBox.tsx` and `src/app/recommendations/page.tsx`.

---


## 📬 Contact

For questions or feedback, open an issue or contact [@saadArfin](https://github.com/saadArfin).

---

**Credit Card Recommender** — A luxury fintech experience for smarter credit card choices.
