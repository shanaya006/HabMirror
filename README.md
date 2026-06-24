# 🏹 HabMirror

> **Level up your life, one habit at a time!**
> HabMirror is a gamified habit tracker built to make daily productivity more engaging by linking your habits to an evolving visual avatar.

---

## 🚀 Product & Design Approach

Instead of just building a standard app, this project was approached by looking at why people stop using traditional habit trackers.

*   📄 **[PRD](https://docs.google.com/document/d/1lBQhh2pf00JTIBxClwaByqJloKnN0SwgpQmG7an7tDM/edit?usp=sharing)**
*   🎨 **[View User Flow Wireframes (Figma Link)]**

### 🧠 Concept & Feature Decisions
*   **The Core Problem:** Identified that typical habit trackers feel like a chore, leading to high user drop-off after just a few days. 
*   **The Solution:** Brainstormed and designed an MVP (Minimum Viable Product) centered on an immediate visual reward loop: an avatar that changes states based on your daily consistency.
*   **Feature Focus:** Prioritized core logging functionality, streaks, and basic progress graphs to establish a solid foundational user experience first.

---

## 🛠️ Tech Stack & Structure

Built using a clean frontend structure with a clear plan for full-stack data persistence.

*   **Frontend Logic:** TypeScript, React.js, Tailwind CSS
*   **Design & Planning:** Figma (for mapping out the screens and user flow)
*   **Future Backend Plan:** Transitioning into a full-stack application using the MERN stack (MongoDB, Express.js, Node.js) to securely save user history and handle login authentication.

---

## 👩‍💻 Key Contributions & Implementation

*   **UI/UX Mapping:** Used Figma to map out exactly how a user navigates from adding a habit to seeing their avatar change state.
*   **Frontend State Logic:** Wrote the conditional rendering logic in React that checks if thresholds (like water intake or steps) are met, changing the avatar asset on screen accordingly.
*   **Data Visualization:** Integrated progress graphs to turn raw habit logs into simple visual trends for the user.

---

## 🔮 Next Steps & Roadmap

*   **Short-Term:** Add Local Storage to keep user data from wiping out when the browser refreshes.
*   **Medium-Term:** Set up the MongoDB database to learn how user history is structured and stored permanently.
