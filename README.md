# Netflix-GPT

> A Netflix UI clone with movie recommender built with GPT and TMDB.

---

## 🚀 Project Summary

Netflix-GPT is a React + Tailwind web app that helps users discover movies using a conversational AI powered by the OpenAI GPT API and movie data from The Movie Database (TMDB). Users can sign in via Firebase Authentication, ask natural-language questions or prompts (e.g., “Recommend feel-good romcoms from the 2000s”), and get curated movie suggestions with metadata and links to TMDB.

## ✨ Key Features

* GPT-powered natural language movie recommendations (use prompts like "movies like Inception" or "light comedies for a weekend").
* Movie details and posters fetched from TMDB API.
* Firebase Authentication (email/password, optionally social providers) for personalizing the experience.
* Responsive UI built with Tailwind CSS.
* Simple, clean Netflix-like layout for browsing results.

## 🧰 Tech Stack

* **Frontend:** React (Vite) + Tailwind CSS
* **AI:** OpenAI GPT API (for natural-language recommendation logic)
* **Movie Data:** The Movie Database (TMDB) API
* **Auth:** Firebase Authentication
* **Deployment:** (Any static host — Vercel / Netlify / Firebase Hosting recommended)


## 🧭 Run Locally (development)

1. Clone the repo:

```bash
git clone <your-repo-url>
cd netflix-gpt/frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the dev server:

```bash
npm run dev
# or
yarn dev
```

4. Open `http://localhost:5173` (or the URL shown in your terminal).

## 🧩 How It Works (high level)

1. User types a natural-language prompt into the recommendation input.
2. Frontend sends that prompt to a small serverless endpoint (or directly to OpenAI if you accept embedding the key client-side) which:

   * Optionally enriches the prompt (e.g., adds system instructions to the GPT model to behave like a movie recommender).
   * Calls the OpenAI GPT API and receives a structured recommendation response.
3. The app extracts movie names/queries from GPT's response and fetches detailed metadata (poster, overview, release date) from TMDB.
4. The frontend renders a list/grid of movie cards with images and short descriptions.

## 🛡️ Security / Production Notes

* **Never** push API keys into public repos. Use serverless functions, Netlify/Vercel serverless endpoints, or a small backend to keep OpenAI and TMDB keys secret.
* Sanitize and validate user input if you store prompts or user data.
* Use Firebase rules to protect any database/storage you add later.


## 🧪 Example prompts to try

* `Recommend 5 sci-fi thrillers like Interstellar with short explanations.`
* `Top feel-good comedies from the 1990s for family viewing.`
* `Give me dark psychological thrillers released after 2015.`


## 📦 Deployment

* Build: `npm run build`
* Deploy the `dist/` to a static host (Vercel, Netlify, Firebase Hosting). If you used serverless functions for the OpenAI proxy, deploy those with the same provider (Netlify Functions, Vercel Serverless, or Firebase Cloud Functions).
