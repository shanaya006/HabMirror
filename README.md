# 🏹 HabMirror

> **Level up your life, one habit at a time!**
> HabMirror is a gamified habit tracker built to make daily productivity more engaging by linking your habits to an evolving visual avatar.

---

## 🚀 Product & Design Approach

Instead of just building a standard app, this project was approached by looking at why people stop using traditional habit trackers.

*   📄 **[Read the Full Product Requirement Document (Notion Link)]**
*   🎨 **[View User Flow Wireframes (Figma Link)]**

### 🧠 Concept & Feature Decisions
*   **The Core Problem:** Identified that typical habit trackers feel like a chore, leading to high user drop-off after just a few days. 
*   **The Solution:** Brainstormed with AI tools to design an MVP (Minimum Viable Product) centered on an immediate visual reward loop: an avatar that changes states based on your daily consistency.
*   **Feature Focus:** Focused strictly on tracking logic, streaks, and basic progress graphs while leaving out complex features like social feeds to keep the initial build realistic.

---

## 🛠️ Tech Stack & Structure

Built using a clean frontend structure with a clear plan for full-stack data persistence.

*   **Frontend Logic:** TypeScript, React.js, Tailwind CSS
*   **Design & Planning:** Figma (for mapping out the screens and user flow)
*   **Future Backend Plan:** Transitioning into a full-stack application using the MERN stack (MongoDB, Express.js, Node.js) to securely save user history and handle login authentication.

---

## 👩‍💻 My Actual Contributions

*   **UI/UX Mapping:** Used Figma to map out exactly how a user navigates from adding a habit to seeing their avatar change state[cite: 2].
*   **Frontend State Logic:** Wrote the conditional rendering logic in React that checks if thresholds (like water intake or steps) are met, changing the avatar asset on screen accordingly[cite: 2].
*   **Data Visualization:** Integrated progress graphs to turn raw habit logs into simple visual trends for the user[cite: 2].

---

## 🔮 Next Steps & Roadmap

*   **Short-Term:** Add Local Storage to keep user data from wiping out when the browser refreshes.
*   **Medium-Term:** Set up the MongoDB database to learn how user history is structured and stored permanently[cite: 2].
