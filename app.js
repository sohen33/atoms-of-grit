// Atoms of Grit - Core Logic and UI Controller

// 1. DEFAULT PRESEEDED DATA (Based on User's Actual Documents)
const DEFAULT_MISSION_HTML = `
  <p class="font-serif" style="font-size: 1.25rem; font-style: italic; text-align: center; color: var(--color-spiritual); margin-bottom: 2rem;">
    "The main thing is to keep the main thing the main thing. What matters most is what lasts the longest. Don't compromise values for any reason."
  </p>

  <div class="mission-blockquote font-serif">
    <strong>My Center:</strong> A changeless, unmovable, and unfailing core centered on correct principles. "People cannot live with change if there's not a changeless core inside them. The key to the ability to change is a changeless sense of who you are, what you are about, and what you value."
  </div>

  <h3 class="mission-section-title">Incongruencies I Am Rising Above</h3>
  <ul class="mission-principles-list">
    <li><strong>External Validation:</strong> Moving away from gaining self-value from reputation, comparisons, smartness, or approvals. Cultivating a deep inner scorecard.</li>
    <li><strong>Motives of Action:</strong> Doing the right things with the right motives (e.g., teaching to lift and bless others, rather than to look competent).</li>
    <li><strong>Emotional Subordination:</strong> Acting as an agent of change, not a victim of circumstance. Subordinating temporary feelings and emotions to deep commitments and principles.</li>
  </ul>

  <h3 class="mission-section-title">Core Principles of Character</h3>
  <ul class="mission-principles-list">
    <li><strong>Be Honest, Solid, Simple, and True:</strong> Put one another ahead of self; welcome interruptions of other people's needs; forget about credit; embrace those violating principles graciously.</li>
    <li><strong>People First (I-Thou):</strong> Never treat another human being as an object or obstacle. Prioritize deep relationships and Quadrant 2 activities.</li>
    <li><strong>Build Up Others:</strong> Recognize that deals and accomplishments do not yield the deep rewards that come from building up and teaching people.</li>
    <li><strong>Constructive Response:</strong> Fear only the absence of creative, constructive responses to mistakes. There is only one failure: giving up.</li>
    <li><strong>Meekness and Grace:</strong> Keep a light touch—don't take myself too seriously. Seek and merit help from my Father in Heaven.</li>
    <li><strong>Discipline Over Motivation:</strong> Follow through on commitments and promises to myself and God. Do the hard things in the now out of love for my future self. Aim higher—"There is no absolution from mediocrity."</li>
  </ul>
`;

const INITIAL_GOALS_DATA = [
  // --- SPIRITUAL DOMAIN ---
  {
    id: "spirit-top-1",
    tier: "top",
    domain: "Spiritual",
    title: "Put God & Family First, and Live a Life of Absolute Integrity",
    desc: "Anchor my personal center in God, family unity, and unshakeable principle-centered character."
  },
  {
    id: "spirit-mid-1",
    tier: "mid",
    domain: "Spiritual",
    parentId: "spirit-top-1",
    title: "Build your foundation on Jesus Christ",
    desc: "Build a persistent, changeless sense of who I am on the foundation of Christ's covenants."
  },
  {
    id: "spirit-low-1",
    tier: "low",
    domain: "Spiritual",
    parentId: "spirit-mid-1",
    title: "Read the Book of Mormon daily first thing in the morning",
    timeOfDay: "morning",
    reminder: "07:00",
    repeat: [0, 1, 2, 3, 4, 5, 6], // All days
    streak: 0,
    history: {}
  },
  {
    id: "spirit-low-2",
    tier: "low",
    domain: "Spiritual",
    parentId: "spirit-mid-1",
    title: "Go to the temple weekly (Tuesday mornings)",
    timeOfDay: "morning",
    reminder: "06:00",
    repeat: [2], // Tuesday
    streak: 0,
    history: {}
  },
  {
    id: "spirit-low-3",
    tier: "low",
    domain: "Spiritual",
    parentId: "spirit-mid-1",
    title: "Take a minute to listen in every prayer",
    timeOfDay: "evening",
    reminder: "22:00",
    repeat: [0, 1, 2, 3, 4, 5, 6],
    streak: 0,
    history: {}
  },

  // --- FAMILY DOMAIN ---
  {
    id: "fam-top-1",
    tier: "top",
    domain: "Family",
    title: "Be fully present and put first things first in relationships",
    desc: "Prioritize my relationship with my Wife, parents, siblings, cousins, and friends with an I-Thou mindset."
  },
  {
    id: "fam-mid-1",
    tier: "mid",
    domain: "Family",
    parentId: "fam-top-1",
    title: "Have a changeless core based off principles",
    desc: "Ensure everyday actions and decisions remain in alignment with core commitments."
  },
  {
    id: "fam-mid-2",
    tier: "mid",
    domain: "Family",
    parentId: "fam-top-1",
    title: "Live with integrity and honor commitments to self and God",
    desc: "Refuse to let temporary feelings dictate permanent actions or compromise character."
  },
  {
    id: "fam-low-1",
    tier: "low",
    domain: "Family",
    parentId: "fam-mid-1",
    title: "Subordinate temporary feelings; do not make permanent decisions based on recent moods",
    timeOfDay: "evening",
    reminder: "21:30",
    repeat: [0, 1, 2, 3, 4, 5, 6],
    streak: 0,
    history: {}
  },
  {
    id: "fam-low-2",
    tier: "low",
    domain: "Family",
    parentId: "fam-mid-2",
    title: "Go out to dinner or connect with a cousin at least once a week",
    timeOfDay: "evening",
    reminder: "18:30",
    repeat: [5], // Friday
    streak: 0,
    history: {}
  },

  // --- PROFESSIONAL & ACADEMIC DOMAIN ---
  {
    id: "acad-top-1",
    tier: "top",
    domain: "Academic",
    title: "Become a highly successful businessman, economist, or mathematician",
    desc: "Stretch my brain, always seek growth (not grades or reassurance of intelligence), and become my own boss."
  },
  {
    id: "acad-mid-1",
    tier: "mid",
    domain: "Academic",
    parentId: "acad-top-1",
    title: "Excel in Math & Economics BS to prepare for an Econ PHD",
    desc: "Conquer Econ 388, Linear Algebra, CS 111, and maintain rigorous academic excellence."
  },
  {
    id: "acad-mid-2",
    tier: "mid",
    domain: "Academic",
    parentId: "acad-top-1",
    title: "Build premium experience (Internships, Research, Teaching)",
    desc: "Assist professors with research, pitch stocks, plan MTC lessons ahead, and commit to professional excellence."
  },
  {
    id: "acad-low-1",
    tier: "low",
    domain: "Academic",
    parentId: "acad-mid-1",
    title: "Go to bed by 11pm and get 8 hours of sleep tous les jours",
    timeOfDay: "evening",
    reminder: "22:45",
    repeat: [0, 1, 2, 3, 4], // Weekdays
    streak: 0,
    history: {}
  },
  {
    id: "acad-low-2",
    tier: "low",
    domain: "Academic",
    parentId: "acad-mid-2",
    title: "Maintain deep work tally sheets and detail weekly deep work plans",
    timeOfDay: "morning",
    reminder: "08:30",
    repeat: [1, 2, 3, 4, 5],
    streak: 0,
    history: {}
  },
  {
    id: "acad-low-3",
    tier: "low",
    domain: "Academic",
    parentId: "acad-mid-1",
    title: "Set an hour timer and force yourself to get homework done in that block",
    timeOfDay: "afternoon",
    reminder: "14:00",
    repeat: [1, 2, 3, 4, 5],
    streak: 0,
    history: {}
  },
  {
    id: "acad-low-4",
    tier: "low",
    domain: "Academic",
    parentId: "acad-mid-1",
    title: "Make one walk a day to or from appointments a meditation walk",
    timeOfDay: "afternoon",
    reminder: "12:00",
    repeat: [1, 2, 3, 4, 5],
    streak: 0,
    history: {}
  },
  {
    id: "acad-low-5",
    tier: "low",
    domain: "Academic",
    parentId: "acad-mid-2",
    title: "Be intentional with AI: try solving alone for 15 minutes first",
    timeOfDay: "afternoon",
    reminder: "15:00",
    repeat: [1, 2, 3, 4, 5],
    streak: 0,
    history: {}
  },
  {
    id: "acad-low-6",
    tier: "low",
    domain: "Academic",
    parentId: "acad-mid-2",
    title: "Create and adhere to a strict school deep/shallow work ratio",
    timeOfDay: "morning",
    reminder: "09:00",
    repeat: [1, 2, 3, 4, 5],
    streak: 0,
    history: {}
  },

  // --- HOBBY & EXTRACURRICULAR DOMAIN ---
  {
    id: "hobby-top-1",
    tier: "top",
    domain: "Hobby",
    title: "Maximize the musical gifts God has given me & have fun with it all",
    desc: "Develop advanced skills in singing, guitar, and piano to uplift others."
  },
  {
    id: "hobby-top-2",
    tier: "top",
    domain: "Hobby",
    title: "Forge a powerful, highly disciplined physical standard and skills",
    desc: "Build my ideal physique, master advanced snowboarding tricks, and dominate in pickleball."
  },
  {
    id: "hobby-mid-1",
    tier: "mid",
    domain: "Hobby",
    parentId: "hobby-top-1",
    title: "Master music theory, book synthesis, and memory cards",
    desc: "Synthesize key insights of read books and memorize a full deck of cards."
  },
  {
    id: "hobby-mid-2",
    tier: "mid",
    domain: "Hobby",
    parentId: "hobby-top-2",
    title: "Hit 315 on Bench/Squat & Converse comfortably in French",
    desc: "Apply progressive gym overload, meal prep, and commit to comfortable French fluency."
  },
  {
    id: "hobby-low-1",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-2",
    title: "15 minutes of French practice daily (pause and focus)",
    timeOfDay: "afternoon",
    reminder: "16:00",
    repeat: [0, 1, 2, 3, 4, 5, 6],
    streak: 0,
    history: {}
  },
  {
    id: "hobby-low-2",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-2",
    title: "Go to the gym 4 days a week (progressive overload, meal prep, no skipping leg day)",
    timeOfDay: "afternoon",
    reminder: "17:00",
    repeat: [1, 3, 4, 6], // Mon, Wed, Thu, Sat
    streak: 0,
    history: {}
  },
  {
    id: "hobby-low-3",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-2",
    title: "Go snowboarding and deliberately push tricks (goofy feet, rails, butters)",
    timeOfDay: "morning",
    reminder: "08:00",
    repeat: [6], // Saturday
    streak: 0,
    history: {}
  },
  {
    id: "hobby-low-4",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-2",
    title: "Play pickleball and consciously diagnose and drill shots",
    timeOfDay: "afternoon",
    reminder: "15:30",
    repeat: [5], // Friday
    streak: 0,
    history: {}
  },
  {
    id: "hobby-low-5",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-1",
    title: "Read recreational books during the semester and take offline time to read",
    timeOfDay: "evening",
    reminder: "21:30",
    repeat: [0, 1, 2, 3, 4, 5, 6],
    streak: 0,
    history: {}
  },
  {
    id: "hobby-low-6",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-1",
    title: "Synthesize insights and map book connections (7 Habits -> Bonds -> Deep Work -> Atomic -> Grit)",
    timeOfDay: "evening",
    reminder: "20:00",
    repeat: [1, 4], // Monday, Thursday
    streak: 0,
    history: {}
  },
  {
    id: "hobby-low-7",
    tier: "low",
    domain: "Hobby",
    parentId: "hobby-mid-1",
    title: "Practice memorizing a full deck of cards",
    timeOfDay: "evening",
    reminder: "20:30",
    repeat: [2, 5], // Tue, Fri
    streak: 0,
    history: {}
  }
];

// 2. STATE MANAGER
class StateManager {
  constructor() {
    this.state = {
      goals: [],
      likedQuotes: [],
      selectedDate: this.getTodayDateString(),
      currentView: "view-today",
      activeDomainFilter: "Spiritual",
      notifiedCache: {} // date -> [habitIds]
    };
    this.loadState();
  }

  getTodayDateString() {
    const today = new Date();
    return this.formatDate(today);
  }

  formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  loadState() {
    const saved = localStorage.getItem("grit_goals_state");
    if (saved) {
      try {
        this.state = JSON.parse(saved);
        // Ensure selectedDate defaults to today on load
        this.state.selectedDate = this.getTodayDateString();
      } catch (e) {
        console.error("Error parsing saved state. Reverting to default.", e);
        this.resetToDefaults();
      }
    } else {
      this.resetToDefaults();
    }
  }

  saveState() {
    localStorage.setItem("grit_goals_state", JSON.stringify(this.state));
  }

  resetToDefaults() {
    this.state.goals = JSON.parse(JSON.stringify(INITIAL_GOALS_DATA));
    this.state.likedQuotes = [];
    this.state.selectedDate = this.getTodayDateString();
    this.state.currentView = "view-today";
    this.state.activeDomainFilter = "Spiritual";
    this.state.notifiedCache = {};
    this.saveState();
  }

  // Completing a Low-Level habit
  toggleHabit(id, dateStr) {
    const habit = this.state.goals.find(g => g.id === id && g.tier === "low");
    if (!habit) return;

    if (!habit.history) habit.history = {};

    if (habit.history[dateStr]) {
      delete habit.history[dateStr];
    } else {
      habit.history[dateStr] = true;
    }

    this.recalculateStreaks(habit);
    this.saveState();
  }

  // Scanning history backwards to compute continuous streaks
  recalculateStreaks(habit) {
    if (!habit.history) {
      habit.streak = 0;
      return;
    }

    let currentStreak = 0;
    let maxStreak = habit.maxStreak || 0;
    
    // Scan backward from today
    let checkDate = new Date();
    let keepScanning = true;

    while (keepScanning) {
      const dateStr = this.formatDate(checkDate);
      const dayOfWeek = checkDate.getDay();
      
      // Is this habit scheduled for this weekday?
      if (!habit.repeat || habit.repeat.includes(dayOfWeek)) {
        if (habit.history[dateStr]) {
          currentStreak++;
        } else {
          // If checking "today", we don't break the streak immediately if they haven't completed it YET
          if (dateStr === this.getTodayDateString()) {
            // Simply skip breaking the streak for today; check yesterday
          } else {
            keepScanning = false;
          }
        }
      }
      
      // Go back one day
      checkDate.setDate(checkDate.getDate() - 1);
      
      // Cap scanning to prevent infinite loop (max 1000 days history scan)
      if (currentStreak > 1000) {
        keepScanning = false;
      }
    }

    habit.streak = currentStreak;
    if (currentStreak > maxStreak) {
      habit.maxStreak = currentStreak;
    }
    
    this.saveState();
  }

  // Get active items scheduled for a specific date
  getScheduledHabitsForDate(dateStr) {
    const date = new Date(dateStr + "T00:00:00");
    const dayOfWeek = date.getDay();
    
    return this.state.goals.filter(g => {
      return g.tier === "low" && (!g.repeat || g.repeat.includes(dayOfWeek));
    });
  }

  // Calculate mid-level goal completion percentage
  getMidLevelProgress(midGoalId) {
    // Find all low-level child habits supporting this mid-level goal
    const childHabits = this.state.goals.filter(g => g.tier === "low" && g.parentId === midGoalId);
    if (childHabits.length === 0) return 0;
    
    // We compute the percentage of completions in the past 30 days or general history completion rate
    // Let's compute based on the last 7 days for real-time progress indicators:
    let totalScheduledOccurrences = 0;
    let completedOccurrences = 0;

    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const checkDate = new Date();
      checkDate.setDate(today.getDate() - i);
      const dateStr = this.formatDate(checkDate);
      const dayOfWeek = checkDate.getDay();

      childHabits.forEach(habit => {
        if (!habit.repeat || habit.repeat.includes(dayOfWeek)) {
          totalScheduledOccurrences++;
          if (habit.history && habit.history[dateStr]) {
            completedOccurrences++;
          }
        }
      });
    }

    if (totalScheduledOccurrences === 0) return 0;
    return Math.round((completedOccurrences / totalScheduledOccurrences) * 100);
  }

  // Global stats calculations
  getGlobalStats() {
    const lowGoals = this.state.state ? this.state.state.goals : this.state.goals.filter(g => g.tier === "low");
    let totalCompletions = 0;
    let activeStreak = 0;
    let bestStreak = 0;

    lowGoals.forEach(g => {
      if (g.history) {
        totalCompletions += Object.keys(g.history).length;
      }
      if (g.streak && g.streak > activeStreak) activeStreak = g.streak;
      if (g.maxStreak && g.maxStreak > bestStreak) bestStreak = g.maxStreak;
    });

    // Compute general Grit Alignment: completions of scheduled habits over the last 30 days
    let totalScheduled = 0;
    let totalCompleted = 0;
    const today = new Date();

    for (let i = 0; i < 30; i++) {
      const checkDate = new Date();
      checkDate.setDate(today.getDate() - i);
      const dateStr = this.formatDate(checkDate);
      const dayOfWeek = checkDate.getDay();

      lowGoals.forEach(g => {
        if (!g.repeat || g.repeat.includes(dayOfWeek)) {
          totalScheduled++;
          if (g.history && g.history[dateStr]) {
            totalCompleted++;
          }
        }
      });
    }

    const alignment = totalScheduled === 0 ? 0 : Math.round((totalCompleted / totalScheduled) * 100);

    return {
      totalCompletions,
      activeStreak,
      bestStreak,
      alignment
    };
  }
}

const store = new StateManager();

// 3. UI RENDERING ENGINE
class UIEngine {
  constructor() {
    this.activeQuote = null;
    this.initEventListeners();
    this.initQuotes();
    this.buildCalendarBar();
    this.renderActiveView();
    this.initNotifications();
  }

  initEventListeners() {
    // SPA Tab Navigation
    document.querySelectorAll(".nav-item").forEach(button => {
      button.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const targetView = btn.dataset.target;
        store.state.currentView = targetView;
        store.saveState();
        this.renderActiveView();
      });
    });

    // Domain filters in Goals view
    document.querySelectorAll(".domain-tab").forEach(tab => {
      tab.addEventListener("click", (e) => {
        document.querySelectorAll(".domain-tab").forEach(t => t.classList.remove("active"));
        e.currentTarget.classList.add("active");
        store.state.activeDomainFilter = e.currentTarget.dataset.domain;
        store.saveState();
        this.renderGritTree();
      });
    });

    // Favorite Quote button
    document.getElementById("favorite-quote-btn").addEventListener("click", () => {
      this.toggleFavoriteQuote();
    });

    // Next Quote button
    document.getElementById("next-quote-btn").addEventListener("click", () => {
      this.revealNextQuote();
    });

    // Modal Control Links
    document.getElementById("global-add-btn").addEventListener("click", () => this.openGoalModal());
    document.getElementById("modal-close-btn").addEventListener("click", () => this.closeGoalModal());
    document.getElementById("modal-cancel-btn").addEventListener("click", () => this.closeGoalModal());
    document.getElementById("goal-form").addEventListener("submit", (e) => this.handleGoalFormSubmit(e));
    
    // Modal Tier Selector Listener to show/hide dynamic fields
    document.getElementById("form-item-tier").addEventListener("change", (e) => {
      this.updateModalFieldsByTier(e.target.value);
      this.populateParentGoalDropdown();
    });

    // Modal Domain Selector Listener to update parent connections
    document.getElementById("form-item-domain").addEventListener("change", () => {
      this.populateParentGoalDropdown();
    });

    // Weekday Picker inside Modal
    document.querySelectorAll(".weekday-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active");
      });
    });
  }

  // --- CORE VIEW CONTROLLER ---
  renderActiveView() {
    // Hide all view panels
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    
    // Show active panel
    const activePanel = document.getElementById(store.state.currentView);
    if (activePanel) activePanel.classList.add("active");

    // Hide or show calendar/quote bar depending on Today view
    const calendarBar = document.getElementById("calendar-bar");
    const quoteSection = document.getElementById("quote-section");
    const globalAddBtn = document.getElementById("global-add-btn");

    if (store.state.currentView === "view-today") {
      calendarBar.style.display = "flex";
      quoteSection.style.display = "block";
      globalAddBtn.style.display = "flex";
      this.renderTodayChecklist();
    } else {
      calendarBar.style.display = "none";
      quoteSection.style.display = "none";
      if (store.state.currentView === "view-goals") {
        globalAddBtn.style.display = "flex";
        this.renderGritTree();
      } else if (store.state.currentView === "view-mission") {
        globalAddBtn.style.display = "none";
        this.renderMissionStatement();
      } else if (store.state.currentView === "view-analytics") {
        globalAddBtn.style.display = "none";
        this.renderAnalytics();
      }
    }

    // Refresh circular progress ring
    this.updateDailyProgressRing();
  }

  // --- 1. TODAY VIEW (CHECKLIST) ---
  buildCalendarBar() {
    const calendarBar = document.getElementById("calendar-bar");
    calendarBar.innerHTML = "";

    const daysOfWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();

    // Render a sliding calendar of 7 days centered on today
    for (let i = -3; i <= 3; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dateStr = store.formatDate(d);
      
      const dayCard = document.createElement("div");
      dayCard.className = `calendar-day ${dateStr === store.state.selectedDate ? 'active' : ''} ${dateStr === store.getTodayDateString() ? 'today' : ''}`;
      dayCard.dataset.date = dateStr;

      dayCard.innerHTML = `
        <span class="day-name">${daysOfWeekNames[d.getDay()]}</span>
        <span class="day-num">${d.getDate()}</span>
      `;

      dayCard.addEventListener("click", () => {
        document.querySelectorAll(".calendar-day").forEach(c => c.classList.remove("active"));
        dayCard.classList.add("active");
        store.state.selectedDate = dateStr;
        store.saveState();
        this.renderTodayChecklist();
        this.updateDailyProgressRing();
      });

      calendarBar.appendChild(dayCard);
    }
  }

  renderTodayChecklist() {
    const habitsForDate = store.getScheduledHabitsForDate(store.state.selectedDate);

    const categories = {
      morning: { container: document.getElementById("habits-morning-container"), countEl: document.getElementById("morning-count"), list: [] },
      afternoon: { container: document.getElementById("habits-afternoon-container"), countEl: document.getElementById("afternoon-count"), list: [] },
      evening: { container: document.getElementById("habits-evening-container"), countEl: document.getElementById("evening-count"), list: [] }
    };

    // Group habits by Time of Day
    habitsForDate.forEach(habit => {
      const tod = habit.timeOfDay || "morning";
      if (categories[tod]) {
        categories[tod].list.push(habit);
      }
    });

    // Render each group
    Object.keys(categories).forEach(key => {
      const cat = categories[key];
      cat.container.innerHTML = "";
      
      const totalCount = cat.list.length;
      let completedCount = 0;

      if (totalCount === 0) {
        cat.container.innerHTML = `
          <div class="glass" style="grid-column: 1/-1; padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
            No actions scheduled for this time
          </div>
        `;
        cat.countEl.textContent = "0 / 0";
        return;
      }

      cat.list.forEach(habit => {
        const isCompleted = habit.history && habit.history[store.state.selectedDate];
        if (isCompleted) completedCount++;

        const card = document.createElement("div");
        card.className = `habit-card glass glass-interactive domain-${habit.domain.toLowerCase()} ${isCompleted ? 'completed' : ''}`;
        
        // Match icon based on category/title
        let iconName = "check-circle";
        const titleL = habit.title.toLowerCase();
        if (titleL.includes("read") || titleL.includes("bom") || titleL.includes("scriptures")) iconName = "book-open";
        else if (titleL.includes("temple") || titleL.includes("prayer") || titleL.includes("god") || titleL.includes("listen")) iconName = "heart-handshake";
        else if (titleL.includes("gym") || titleL.includes("squat") || titleL.includes("overload") || titleL.includes("bench")) iconName = "dumbell";
        else if (titleL.includes("french") || titleL.includes("converse")) iconName = "languages";
        else if (titleL.includes("snowboard")) iconName = "snowflake";
        else if (titleL.includes("pickleball")) iconName = "circle-dot";
        else if (titleL.includes("deep work") || titleL.includes("tally") || titleL.includes("timer")) iconName = "award";
        else if (titleL.includes("walk") || titleL.includes("meditation")) iconName = "footprints";
        else if (titleL.includes("sleep") || titleL.includes("bed")) iconName = "moon";

        card.innerHTML = `
          <div class="habit-card-left">
            <div class="habit-icon-wrapper">
              <i data-lucide="${iconName}"></i>
            </div>
            <div class="habit-info">
              <span class="habit-name">${habit.title}</span>
              <div class="habit-meta">
                <span>${habit.domain}</span>
                <span class="dot"></span>
                <span>${habit.reminder ? habit.reminder : 'No Reminder'}</span>
                ${habit.streak > 0 ? `
                  <span class="dot"></span>
                  <span class="streak-tag">
                    <svg viewBox="0 0 24 24" width="12" height="12"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/></svg>
                    ${habit.streak}d streak
                  </span>
                ` : ''}
              </div>
            </div>
          </div>
          <button class="complete-btn" aria-label="Mark Complete">
            <i data-lucide="check"></i>
          </button>
        `;

        // Click card to edit habit
        card.addEventListener("click", () => {
          this.openGoalModal(habit.id);
        });

        // Checkbox click listener
        card.querySelector(".complete-btn").addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent the card click from opening the edit modal
          this.triggerCompletionToggle(habit.id, card);
        });

        cat.container.appendChild(card);
      });

      cat.countEl.textContent = `${completedCount} / ${totalCount}`;
    });

    lucide.createIcons();
  }

  triggerCompletionToggle(habitId, cardEl) {
    const isNowCompleted = !cardEl.classList.contains("completed");
    
    // Trigger pop micro-animation on complete button
    const btn = cardEl.querySelector(".complete-btn");
    btn.style.transform = "scale(0.8)";
    
    setTimeout(() => {
      btn.style.transform = "scale(1.2)";
      setTimeout(() => {
        btn.style.transform = "";
        
        // Perform toggle in database
        store.toggleHabit(habitId, store.state.selectedDate);
        
        // Refresh display
        this.renderTodayChecklist();
        this.updateDailyProgressRing();
        
        // Confetti alert on 100% daily completion!
        if (isNowCompleted && this.isDayFullyComplete()) {
          this.triggerConfetti();
          this.showToast("Day Fully Aligned!", "You completed all scheduled low-level actions for today. Keep up the Grit!", "Spiritual");
        }
      }, 150);
    }, 100);
  }

  isDayFullyComplete() {
    const habits = store.getScheduledHabitsForDate(store.state.selectedDate);
    if (habits.length === 0) return false;
    return habits.every(h => h.history && h.history[store.state.selectedDate]);
  }

  updateDailyProgressRing() {
    const circle = document.getElementById("progress-ring-circle");
    const text = document.getElementById("progress-percentage");
    if (!circle || !text) return;

    const habits = store.getScheduledHabitsForDate(store.state.selectedDate);
    const total = habits.length;
    
    if (total === 0) {
      circle.style.strokeDashoffset = "125.66";
      text.textContent = "0%";
      return;
    }

    const completed = habits.filter(h => h.history && h.history[store.state.selectedDate]).length;
    const percentage = Math.round((completed / total) * 100);
    
    // Circular calculations (r=20 -> circumference = 2 * PI * r = 125.66)
    const offset = 125.66 - (percentage / 100) * 125.66;
    circle.style.strokeDashoffset = offset;
    text.textContent = `${percentage}%`;
  }

  // --- 2. GRIT GOALS VIEW (3-TIER TREE VISUALIZATION) ---
  renderGritTree() {
    const activeDomain = store.state.activeDomainFilter;
    
    const topContainer = document.getElementById("tree-top-container");
    const midContainer = document.getElementById("tree-mid-container");
    const lowContainer = document.getElementById("tree-low-container");

    topContainer.innerHTML = "";
    midContainer.innerHTML = "";
    lowContainer.innerHTML = "";

    // 1. Get Top-Level goals
    const topGoals = store.state.goals.filter(g => g.tier === "top" && g.domain === activeDomain);
    
    // 2. Get Mid-Level goals
    const midGoals = store.state.goals.filter(g => g.tier === "mid" && g.domain === activeDomain);

    // 3. Get Low-Level habits
    const lowGoals = store.state.goals.filter(g => g.tier === "low" && g.domain === activeDomain);

    // --- Render Top level ---
    if (topGoals.length === 0) {
      topContainer.innerHTML = this.getEmptyTreeCardPlaceholder("top", activeDomain);
    } else {
      topGoals.forEach(goal => {
        const card = document.createElement("div");
        card.className = `top-level-card glass ${activeDomain.toLowerCase()}`;
        card.innerHTML = `
          <div class="goal-card-header">
            <div>
              <div class="tier-badge">Ultimate Compass</div>
              <h4 class="goal-title" style="margin-top:0.4rem;">${goal.title}</h4>
            </div>
            <div class="tree-card-actions">
              <button class="edit-btn" onclick="ui.openGoalModal('${goal.id}')" title="Edit Goal">
                <i data-lucide="edit-3"></i>
              </button>
              <button class="delete-btn" onclick="ui.handleDeleteGoal('${goal.id}')" title="Delete Goal">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
          <p class="goal-desc">${goal.desc || 'Supports your overarching character vision.'}</p>
        `;
        topContainer.appendChild(card);
      });
    }

    // --- Render Mid level ---
    if (midGoals.length === 0) {
      const card = document.createElement("div");
      card.className = "add-goal-card";
      card.addEventListener("click", () => this.openGoalModal(null, "mid", activeDomain));
      card.innerHTML = `
        <i data-lucide="plus-circle"></i>
        <span>Add Mid-Level Milestone</span>
      `;
      midContainer.appendChild(card);
    } else {
      midGoals.forEach(goal => {
        const progress = store.getMidLevelProgress(goal.id);
        const card = document.createElement("div");
        card.className = "mid-level-card glass";
        card.innerHTML = `
          <div class="goal-card-header">
            <div>
              <div class="tier-badge">Milestone</div>
              <h4 class="goal-title" style="margin-top:0.4rem; font-size:1.05rem;">${goal.title}</h4>
            </div>
            <div class="tree-card-actions">
              <button class="edit-btn" onclick="ui.openGoalModal('${goal.id}')" title="Edit Milestone">
                <i data-lucide="edit-3"></i>
              </button>
              <button class="delete-btn" onclick="ui.handleDeleteGoal('${goal.id}')" title="Delete Milestone">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
          <p class="goal-desc" style="font-size:0.85rem;">${goal.desc || ''}</p>
          <div class="goal-progress-container ${activeDomain.toLowerCase()}">
            <div class="goal-progress-header">
              <span>Weekly Momentum</span>
              <span>${progress}%</span>
            </div>
            <div class="goal-progress-bar">
              <div class="goal-progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>
        `;
        midContainer.appendChild(card);
      });

      // Add "Create Mid" card trigger
      const addTrigger = document.createElement("div");
      addTrigger.className = "add-goal-card";
      addTrigger.addEventListener("click", () => this.openGoalModal(null, "mid", activeDomain));
      addTrigger.innerHTML = `
        <i data-lucide="plus-circle"></i>
        <span>Add Milestone</span>
      `;
      midContainer.appendChild(addTrigger);
    }

    // --- Render Low level ---
    if (lowGoals.length === 0) {
      const card = document.createElement("div");
      card.className = "add-goal-card";
      card.style.gridColumn = "1/-1";
      card.addEventListener("click", () => this.openGoalModal(null, "low", activeDomain));
      card.innerHTML = `
        <i data-lucide="plus-circle"></i>
        <span>Add Low-Level Daily Action</span>
      `;
      lowContainer.appendChild(card);
    } else {
      lowGoals.forEach(goal => {
        const card = document.createElement("div");
        card.className = `habit-card glass domain-${activeDomain.toLowerCase()}`;
        
        // Find parent mid-goal title
        const parentGoal = store.state.goals.find(g => g.id === goal.parentId);
        const parentTitle = parentGoal ? parentGoal.title : "Standalone Action";

        // Generate schedule labels
        let daysStr = "Everyday";
        if (goal.repeat && goal.repeat.length < 7) {
          const names = ["S", "M", "T", "W", "T", "F", "S"];
          daysStr = goal.repeat.map(d => names[d]).join(" ");
        }

        card.innerHTML = `
          <div class="habit-card-left">
            <div class="habit-info">
              <span class="habit-name" style="font-size:0.95rem;">${goal.title}</span>
              <div class="habit-meta" style="flex-wrap:wrap;">
                <span>Time: ${goal.timeOfDay.toUpperCase()}</span>
                <span class="dot"></span>
                <span>Days: ${daysStr}</span>
                <span class="dot"></span>
                <span style="color:var(--text-muted);">Supports: "${parentTitle}"</span>
              </div>
            </div>
          </div>
          <div class="tree-card-actions">
            <button class="edit-btn" onclick="ui.openGoalModal('${goal.id}')" title="Edit Action">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="delete-btn" onclick="ui.handleDeleteGoal('${goal.id}')" title="Delete Action">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        `;
        lowContainer.appendChild(card);
      });

      // Add "Create Low" card trigger
      const addTrigger = document.createElement("div");
      addTrigger.className = "add-goal-card";
      addTrigger.addEventListener("click", () => this.openGoalModal(null, "low", activeDomain));
      addTrigger.innerHTML = `
        <i data-lucide="plus-circle"></i>
        <span>Add Daily Action</span>
      `;
      lowContainer.appendChild(addTrigger);
    }

    lucide.createIcons();
  }

  getEmptyTreeCardPlaceholder(tier, domain) {
    return `
      <div class="add-goal-card" onclick="ui.openGoalModal(null, '${tier}', '${domain}')">
        <i data-lucide="plus-circle"></i>
        <span>Define Top-Level Goal</span>
      </div>
    `;
  }

  handleDeleteGoal(id) {
    if (confirm("Are you sure you want to delete this goal? Deleting a parent goal will turn children into standalone goals.")) {
      store.state.goals = store.state.goals.filter(g => g.id !== id);
      
      // Orphan check: If deleted mid-goal, reset parentId of low-goals
      store.state.goals.forEach(g => {
        if (g.parentId === id) {
          g.parentId = "";
        }
      });

      store.saveState();
      this.renderGritTree();
      this.showToast("Goal Deleted", "Successfully removed from Grit hierarchy.", "Family");
    }
  }

  // --- 3. MISSION STATEMENT VIEW ---
  renderMissionStatement() {
    document.getElementById("mission-body").innerHTML = DEFAULT_MISSION_HTML;
  }

  // --- 4. PROGRESS ANALYTICS VIEW ---
  renderAnalytics() {
    const stats = store.getGlobalStats();

    document.getElementById("stat-active-streak").textContent = stats.activeStreak;
    document.getElementById("stat-best-streak").textContent = stats.bestStreak;
    document.getElementById("stat-completions").textContent = stats.totalCompletions;
    document.getElementById("stat-alignment").textContent = `${stats.alignment}%`;

    this.renderHeatmap();
    this.renderLikedQuotes();
  }

  renderHeatmap() {
    const grid = document.getElementById("heatmap-grid");
    grid.innerHTML = "";

    const daysOfWeekLetters = ["S", "M", "T", "W", "T", "F", "S"];
    
    // 1. Render day of week header letters
    daysOfWeekLetters.forEach(letter => {
      const header = document.createElement("div");
      header.className = "heatmap-day-label";
      header.textContent = letter;
      grid.appendChild(header);
    });

    // 2. Render last 28 days cells
    const today = new Date();
    // Offset to start grid from the correct day of week relative to 28 days ago
    const startDate = new Date();
    startDate.setDate(today.getDate() - 27);
    
    // Adjust startDate to align to a Sunday if possible, or just print a rolling 28 days:
    for (let i = 0; i < 28; i++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(startDate.getDate() + i);
      
      const dateStr = store.formatDate(cellDate);
      const habits = store.getScheduledHabitsForDate(dateStr);
      
      const cell = document.createElement("div");
      cell.className = "heatmap-cell";
      cell.title = `${cellDate.toLocaleDateString()}: No scheduled items`;

      if (habits.length > 0) {
        const completed = habits.filter(h => h.history && h.history[dateStr]).length;
        const ratio = completed / habits.length;

        cell.title = `${cellDate.toLocaleDateString()}: Completed ${completed} / ${habits.length} (${Math.round(ratio*100)}%)`;

        if (ratio === 1.0) cell.classList.add("level-4");
        else if (ratio >= 0.6) cell.classList.add("level-3");
        else if (ratio >= 0.3) cell.classList.add("level-2");
        else if (ratio > 0) cell.classList.add("level-1");
      }

      grid.appendChild(cell);
    }
  }

  renderLikedQuotes() {
    const container = document.getElementById("liked-quotes-container");
    const group = document.getElementById("liked-quotes-group");
    
    container.innerHTML = "";

    if (store.state.likedQuotes.length === 0) {
      group.style.display = "none";
      return;
    }

    group.style.display = "block";
    store.state.likedQuotes.forEach((quote, index) => {
      const card = document.createElement("div");
      card.className = "quote-card glass font-serif";
      card.style.padding = "1rem 1.5rem";
      
      card.innerHTML = `
        <p class="quote-text" style="font-size:0.95rem; margin-bottom:0.4rem;">"${quote.text}"</p>
        <div class="quote-meta">
          <span class="quote-author" style="font-size:0.75rem;">${quote.author}</span>
          <button class="quote-btn liked" title="Unlike Quote" onclick="ui.handleRemoveFavorite(${index})" style="width:24px; height:24px;">
            <i data-lucide="heart" style="width:12px; height:12px;"></i>
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    lucide.createIcons();
  }

  handleRemoveFavorite(index) {
    store.state.likedQuotes.splice(index, 1);
    store.saveState();
    this.renderLikedQuotes();
    this.showToast("Quote Unfavorited", "Successfully removed from favorites.", "Family");
    
    // Also toggle the active heart state if we are currently looking at this quote
    if (this.activeQuote && store.state.likedQuotes.every(q => q.text !== this.activeQuote.text)) {
      document.getElementById("favorite-quote-btn").classList.remove("liked");
    }
  }


  // --- DAILY QUOTES ENGINE ---
  initQuotes() {
    // Select initial Quote of the Day
    this.activeQuote = getQuoteOfTheDay();
    this.renderActiveQuote();
  }

  renderActiveQuote() {
    document.getElementById("quote-text").textContent = `"${this.activeQuote.text}"`;
    document.getElementById("quote-author").textContent = this.activeQuote.author;

    // Check if liked
    const favBtn = document.getElementById("favorite-quote-btn");
    const isLiked = store.state.likedQuotes.some(q => q.text === this.activeQuote.text);
    
    if (isLiked) {
      favBtn.classList.add("liked");
    } else {
      favBtn.classList.remove("liked");
    }
  }

  toggleFavoriteQuote() {
    const isLiked = store.state.likedQuotes.some(q => q.text === this.activeQuote.text);
    const favBtn = document.getElementById("favorite-quote-btn");

    if (isLiked) {
      store.state.likedQuotes = store.state.likedQuotes.filter(q => q.text !== this.activeQuote.text);
      favBtn.classList.remove("liked");
      this.showToast("Removed from Favorites", "Quote successfully unfavorited.", "Family");
    } else {
      store.state.likedQuotes.push(this.activeQuote);
      favBtn.classList.add("liked");
      this.showToast("Added to Favorites", "Check the Analytics tab to view saved quotes.", "Spiritual");
    }
    
    store.saveState();
    this.renderLikedQuotes();
  }

  revealNextQuote() {
    const textEl = document.getElementById("quote-text");
    const authEl = document.getElementById("quote-author");
    
    textEl.style.opacity = 0;
    authEl.style.opacity = 0;

    setTimeout(() => {
      this.activeQuote = getRandomQuote();
      this.renderActiveQuote();
      textEl.style.opacity = 1;
      authEl.style.opacity = 1;
    }, 200);
  }


  // --- CREATION & EDIT MODAL ---
  openGoalModal(editingId = null, defaultTier = "low", defaultDomain = "Spiritual") {
    const overlay = document.getElementById("goal-modal");
    const title = document.getElementById("modal-title");
    
    overlay.classList.add("active");

    if (editingId) {
      // Edit Mode
      const item = store.state.goals.find(g => g.id === editingId);
      if (!item) return;

      title.textContent = `Edit ${item.tier.toUpperCase()}-Level Goal`;
      
      document.getElementById("form-item-id").value = item.id;
      document.getElementById("form-item-tier").value = item.tier;
      document.getElementById("form-item-tier").disabled = true; // Lock tier on editing
      
      document.getElementById("form-item-domain").value = item.domain;
      document.getElementById("form-item-title").value = item.title;

      this.updateModalFieldsByTier(item.tier);
      this.populateParentGoalDropdown(item.parentId);

      if (item.tier === "low") {
        document.getElementById("form-item-timeofday").value = item.timeOfDay;
        document.getElementById("form-item-reminder").value = item.reminder || "";
        
        // Days
        document.querySelectorAll(".weekday-btn").forEach(btn => {
          const dVal = parseInt(btn.dataset.day);
          if (item.repeat && item.repeat.includes(dVal)) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    } else {
      // Create Mode
      title.textContent = "Define Grit Goal / Action";
      
      document.getElementById("form-item-id").value = "";
      document.getElementById("form-item-tier").value = defaultTier;
      document.getElementById("form-item-tier").disabled = false;
      
      document.getElementById("form-item-domain").value = defaultDomain;
      document.getElementById("form-item-title").value = "";
      document.getElementById("form-item-reminder").value = "";
      
      this.updateModalFieldsByTier(defaultTier);
      this.populateParentGoalDropdown();

      // Reset weekdays to fully active
      document.querySelectorAll(".weekday-btn").forEach(btn => btn.classList.add("active"));
    }
  }

  closeGoalModal() {
    document.getElementById("goal-modal").classList.remove("active");
  }

  updateModalFieldsByTier(tier) {
    const parentGroup = document.getElementById("parent-connector-group");
    const lowDetails = document.getElementById("low-level-details-group");
    const labelTitle = document.getElementById("label-title");
    const labelParent = document.getElementById("label-parent");

    if (tier === "top") {
      parentGroup.style.display = "none";
      lowDetails.style.display = "none";
      labelTitle.textContent = "Ultimate Compass Goal Name";
    } else if (tier === "mid") {
      parentGroup.style.display = "block";
      lowDetails.style.display = "none";
      labelTitle.textContent = "Mid-Level Milestone Name";
      labelParent.textContent = "Supports Top-Level Compass";
    } else {
      parentGroup.style.display = "block";
      lowDetails.style.display = "block";
      labelTitle.textContent = "Daily Action / Habit Name";
      labelParent.textContent = "Supports Mid-Level Milestone";
    }
  }

  populateParentGoalDropdown(selectedParentId = null) {
    const tier = document.getElementById("form-item-tier").value;
    const domain = document.getElementById("form-item-domain").value;
    const dropdown = document.getElementById("form-item-parent");

    dropdown.innerHTML = "";

    let parentTier = "mid";
    if (tier === "mid") parentTier = "top";

    const parents = store.state.goals.filter(g => g.tier === parentTier && g.domain === domain);

    if (parents.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = `No ${parentTier}-level goals defined yet in ${domain}`;
      dropdown.appendChild(option);
    } else {
      parents.forEach(p => {
        const option = document.createElement("option");
        option.value = p.id;
        option.textContent = p.title;
        if (p.id === selectedParentId) option.selected = true;
        dropdown.appendChild(option);
      });
    }
  }

  handleGoalFormSubmit(e) {
    const id = document.getElementById("form-item-id").value;
    const tier = document.getElementById("form-item-tier").value;
    const domain = document.getElementById("form-item-domain").value;
    const title = document.getElementById("form-item-title").value.trim();
    const parentId = document.getElementById("form-item-parent").value;

    if (!title) return;

    if (id) {
      // Update Goal
      const item = store.state.goals.find(g => g.id === id);
      if (item) {
        item.domain = domain;
        item.title = title;
        item.parentId = parentId;

        if (tier === "low") {
          item.timeOfDay = document.getElementById("form-item-timeofday").value;
          item.reminder = document.getElementById("form-item-reminder").value || "";
          
          // Days
          const repeat = [];
          document.querySelectorAll(".weekday-btn").forEach(btn => {
            if (btn.classList.contains("active")) {
              repeat.push(parseInt(btn.dataset.day));
            }
          });
          item.repeat = repeat;
          store.recalculateStreaks(item);
        }
      }
      this.showToast("Action Saved", `Successfully updated your ${tier}-level goal.`, domain);
    } else {
      // Create Goal
      const newId = `${domain.toLowerCase()}-${tier}-${Date.now()}`;
      const newGoal = {
        id: newId,
        tier,
        domain,
        title,
        parentId
      };

      if (tier === "low") {
        newGoal.timeOfDay = document.getElementById("form-item-timeofday").value;
        newGoal.reminder = document.getElementById("form-item-reminder").value || "";
        newGoal.streak = 0;
        newGoal.history = {};

        // Days
        const repeat = [];
        document.querySelectorAll(".weekday-btn").forEach(btn => {
          if (btn.classList.contains("active")) {
            repeat.push(parseInt(btn.dataset.day));
          }
        });
        newGoal.repeat = repeat;
      } else {
        newGoal.desc = `Created to support your overarching Grit compass in ${domain}.`;
      }

      store.state.goals.push(newGoal);
      this.showToast("Goal Created", `New ${tier}-level goal added successfully!`, domain);
    }

    store.saveState();
    this.closeGoalModal();
    this.renderActiveView();
  }


  // --- PHYSICS CONFETTI ENGINE ---
  triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#10b981", "#fbbf24", "#f43f5e"];
    const particles = [];

    // Create 120 particles
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height + 20,
        vx: (Math.random() - 0.5) * 15,
        vy: -Math.random() * 20 - 10,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }

    const animate = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // Gravity
        p.vx *= 0.99; // Air friction
        p.rotation += p.rotSpeed;

        // Render particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        // Remove offscreen particles
        if (p.y > canvas.height + 30 || p.x < -30 || p.x > canvas.width + 30) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }


  // --- VISUAL TOASTS ---
  showToast(title, desc, domain) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    
    // Choose correct domain color
    const dClass = domain.toLowerCase();
    toast.className = `toast glass domain-${dClass}`;

    let iconName = "award";
    if (dClass === "spiritual") iconName = "church";
    else if (dClass === "family") iconName = "heart";
    else if (dClass === "academic") iconName = "graduation-cap";
    else if (dClass === "hobby") iconName = "activity";

    toast.innerHTML = `
      <div class="toast-icon">
        <i data-lucide="${iconName}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-desc">${desc}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <i data-lucide="x"></i>
      </button>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    // Auto-remove after 4 seconds
    setTimeout(() => {
      toast.classList.add("removing");
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }


  // --- TIMED NOTIFICATIONS & BACKGROUND CHECKS ---
  initNotifications() {
    if ("Notification" in window) {
      if (Notification.permission === "default") {
        // Request on user click anywhere to be compliant with modern browsers
        document.body.addEventListener("click", function requestPerm() {
          Notification.requestPermission();
          document.body.removeEventListener("click", requestPerm);
        }, { once: true });
      }
    }

    // Schedule background minute checker
    setInterval(() => this.checkScheduledHabitsForReminders(), 20000); // Check every 20 seconds
    
    // Immediate initial check
    setTimeout(() => this.checkScheduledHabitsForReminders(), 3000);
  }

  checkScheduledHabitsForReminders() {
    const now = new Date();
    const todayStr = store.getTodayDateString();
    
    // Format current local time "HH:MM"
    const currentHrs = String(now.getHours()).padStart(2, '0');
    const currentMins = String(now.getMinutes()).padStart(2, '0');
    const currentHHMM = `${currentHrs}:${currentMins}`;
    
    const habits = store.getScheduledHabitsForDate(todayStr);

    // Initialize date array in cache
    if (!store.state.notifiedCache[todayStr]) {
      store.state.notifiedCache[todayStr] = [];
    }

    habits.forEach(habit => {
      // Does it match the time, have a reminder, and not already notified today?
      if (habit.reminder && habit.reminder === currentHHMM) {
        if (!store.state.notifiedCache[todayStr].includes(habit.id)) {
          
          // Add to notified list
          store.state.notifiedCache[todayStr].push(habit.id);
          store.saveState();

          // Play synth notification chime (tactile sensory audio feedback)
          this.playAudioReminderChime();

          // 1. Show in-app visual toast
          this.showToast("Habit Reminder!", `It's time to: "${habit.title}"`, habit.domain);

          // 2. Trigger native OS/Browser push notification
          if ("Notification" in window && Notification.permission === "granted") {
            const options = {
              body: `Time for your daily ${habit.domain} action: ${habit.title}`,
              icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b5cf6' stroke-width='2'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/></svg>"
            };
            new Notification("Atoms of Grit", options);
          }
        }
      }
    });
  }

  playAudioReminderChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      const playTone = (freq, type, duration, startTime) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);
        
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      const now = audioCtx.currentTime;
      // Arpeggio chime
      playTone(523.25, "sine", 0.15, now);       // C5
      playTone(659.25, "sine", 0.15, now + 0.1); // E5
      playTone(783.99, "sine", 0.25, now + 0.2); // G5
      playTone(1046.50, "sine", 0.35, now + 0.3); // C6
    } catch (e) {
      console.warn("Audio Context blocked by browser audio auto-play policy.", e);
    }
  }
}

// Instantiate UI engine globally
let ui;
window.addEventListener("DOMContentLoaded", () => {
  ui = new UIEngine();
  window.ui = ui; // Expose to global scope for HTML inline calls
});
