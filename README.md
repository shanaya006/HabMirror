# 🏹 HabMirror

> **Level up your life, one habit at a time!**
> HabMirror is a gamified web platform designed to solve the chronic user retention problem in traditional productivity applications through an evolving avatar feedback engine.

---

## 🚀 Product Management & Strategy (MVP Scope)

Before writing a single line of code, the product direction was defined by identifying core user friction points in the digital wellness space.

*   📄 **[Read the Full Product Requirement Document (Notion coming soon)]**
*   🎨 **[View Interactive High-Fidelity User Flows (Figma coming soon)]**

### 🧠 Product Discovery & User Insights
*   **The Problem:** Conducted **10+ user interviews** isolating a massive drop-off rate in traditional habit trackers due to "tracking fatigue" and lack of immediate visual gratification.
*   **The Framework:** Applied an **Effort-vs-Impact prioritization matrix** to determine the core Minimum Viable Product (MVP) feature set. 
*   **The Trade-off:** Intentionally deselected low-value, high-effort features (like social sharing feeds and community boards) to focus strictly on nailing the core loops: **avatar-state evolution, streaks, and real-time data visualization.**

### 📈 Success Metrics (KPIs)
*   **Primary Metric:** Day-7 (D7) and Day-30 (D30) User Retention.
*   **Secondary Metric:** Core Action Completion Rate (percentage of created habits successfully logged as "Done" per day).

---

## 🛠️ Architecture & Tech Stack

Designed a clean, decoupled system architecture to handle responsive, real-time frontend updates based on underlying metric state pipelines.

*   **Frontend & Logic:** TypeScript, React.js, Tailwind CSS
*   **State Management:** Component-level state tracking logic mapping user data directly to avatar asset nodes.
*   **Deployment:** CI/CD automated via Netlify.
*   **Backend Direction:** Transitioning into a full-stack implementation using the **MERN stack (MongoDB, Express.js, Node.js)** to enable persistent data storage and secure user authentication.

---

## 👩‍💻 Key Engineering & Product Contributions

*   **User Flow & UI Design:** Wireframed end-to-end interactive mockups to optimize user onboarding and minimize onboarding cognitive load.
*   **Avatar Evolution Engine:** Architected the conditional rendering logic that evaluates metric inputs (steps, water intake, sleep thresholds) and triggers deterministic avatar state transformations.
*   **Dynamic Data Visualization:** Implemented frontend charting components that translate raw historical logs into progress graphs, giving users immediate visual feedback.

---

## 🔮 Roadmap & Future Iterations

*   **Phase 1 (Data Persistence):** Integrate Local Storage to cache user sessions and prevent progress loss on reload.
*   **Phase 2 (Database Integration):** Connect MongoDB database pipelines to securely persist cross-device user metrics and track historical progression trends.
*   **Phase 3 (Engagement Loops):** Implement push notification triggers and personalized automated feedback scripts based on user streak thresholds.
