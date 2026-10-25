const $ = (selector) => document.querySelector(selector);

const mentors = [
  {
    id: "maya",
    name: "Maya Chen",
    role: "Neuroscience student",
    icon: "🧠",
    interests: ["science", "psychology"],
    goals: ["learn", "research", "career"],
    support: ["academic", "guidance"],
    availability: ["weekly", "flexible"],
    bio: "Maya enjoys making brain science approachable and helping students turn questions about the mind into research ideas.",
    skills: ["Neuroscience", "Research", "Study strategies"],
    projects: ["A beginner's guide to the brain", "An introduction to cognitive science"],
    score: 0,
    feedback: 0
  },
  {
    id: "jordan",
    name: "Jordan Rivera",
    role: "Software developer",
    icon: "💻",
    interests: ["technology", "community"],
    goals: ["project", "learn", "career"],
    support: ["hands-on", "guidance"],
    availability: ["weekly", "flexible"],
    bio: "Jordan likes building beginner-friendly apps and helping students turn everyday problems into useful digital tools.",
    skills: ["HTML, CSS & JavaScript", "App design", "Problem-solving"],
    projects: ["A student resource finder", "A simple community website"],
    score: 0,
    feedback: 0
  },
  {
    id: "amira",
    name: "Amira Williams",
    role: "Writer and humanities researcher",
    icon: "✍️",
    interests: ["humanities", "psychology", "community"],
    goals: ["learn", "research", "service"],
    support: ["creative", "academic", "guidance"],
    availability: ["occasional", "flexible"],
    bio: "Amira loves stories, cultural history, and thoughtful reporting. She helps students develop their voice and investigate meaningful questions.",
    skills: ["Writing", "Interviewing", "Research"],
    projects: ["An oral-history collection", "A student-led digital magazine"],
    score: 0,
    feedback: 0
  },
  {
    id: "leo",
    name: "Leo Patel",
    role: "Engineering student",
    icon: "🔬",
    interests: ["science", "technology"],
    goals: ["project", "research", "career"],
    support: ["hands-on", "academic"],
    availability: ["weekly", "occasional"],
    bio: "Leo enjoys experimentation, engineering challenges, and helping beginners learn by building and testing things.",
    skills: ["STEM projects", "Engineering", "Experiment design"],
    projects: ["A low-cost science demonstration", "A beginner coding project"],
    score: 0,
    feedback: 0
  },
  {
    id: "nia",
    name: "Nia Brooks",
    role: "Community arts organizer",
    icon: "🎨",
    interests: ["art", "humanities", "community"],
    goals: ["project", "service", "career"],
    support: ["creative", "hands-on", "guidance"],
    availability: ["occasional", "weekly"],
    bio: "Nia combines creativity and community engagement. She helps students plan projects that make room for self-expression and collaboration.",
    skills: ["Visual storytelling", "Design", "Community projects"],
    projects: ["A neighborhood art showcase", "A student creativity journal"],
    score: 0,
    feedback: 0
  },
  {
    id: "sam",
    name: "Sam Okafor",
    role: "Youth program volunteer",
    icon: "🌱",
    interests: ["community", "psychology", "humanities"],
    goals: ["service", "career", "learn"],
    support: ["guidance", "creative"],
    availability: ["flexible", "occasional"],
    bio: "Sam is interested in youth development and community service. They enjoy helping students find manageable ways to contribute to causes they care about.",
    skills: ["Volunteer planning", "Communication", "Youth leadership"],
    projects: ["A community resource guide", "A student volunteering directory"],
    score: 0,
    feedback: 0
  }
];

// These are illustrative examples, not verified active opportunities.
const opportunities = [
  {
    id: "o1",
    type: "Community",
    title: "Explore youth volunteering",
    icon: "🤝",
    interests: ["community", "psychology"],
    location: "Local or virtual",
    description: "Research youth-serving nonprofits and find out whether they offer age-appropriate volunteering, advocacy, or community projects.",
    tags: ["Volunteering", "Leadership"],
    url: "https://www.volunteermatch.org/"
  },
  {
    id: "o2",
    type: "Competition",
    title: "Congressional App Challenge",
    icon: "🏆",
    interests: ["technology", "community"],
    location: "Participating congressional districts",
    description: "Explore the student app competition and check official rules, eligibility, and deadlines for your district.",
    tags: ["Coding", "Innovation"],
    url: "https://www.congressionalappchallenge.us/"
  },
  {
    id: "o3",
    type: "Learning resource",
    title: "Start exploring neuroscience",
    icon: "📚",
    interests: ["science", "psychology"],
    location: "Online",
    description: "Begin with introductory learning materials and build your understanding of the brain, behavior, and cognition.",
    tags: ["Science", "Self-paced"],
    url: "https://www.khanacademy.org/"
  },
  {
    id: "o4",
    type: "Project idea",
    title: "Build a community resource guide",
    icon: "💡",
    interests: ["technology", "community", "humanities"],
    location: "Local or virtual",
    description: "Create a beginner-friendly guide to useful student resources, organizations, or opportunities in a subject you care about.",
    tags: ["Beginner-friendly", "Community"],
    url: "https://www.freecodecamp.org/"
  },
  {
    id: "o5",
    type: "Competition",
    title: "Explore student writing contests",
    icon: "✍️",
    interests: ["humanities", "psychology"],
    location: "Online opportunities vary",
    description: "Research essay contests and student publications. Check the current submission rules and deadlines before committing.",
    tags: ["Writing", "Critical thinking"],
    url: "https://www.poetryfoundation.org/"
  },
  {
    id: "o6",
    type: "Learning resource",
    title: "Learn the basics of coding",
    icon: "💻",
    interests: ["technology"],
    location: "Online",
    description: "Practice building simple web pages and gradually work toward a small project of your own.",
    tags: ["HTML", "JavaScript"],
    url: "https://www.freecodecamp.org/"
  },
  {
    id: "o7",
    type: "Project idea",
    title: "Create a visual storytelling project",
    icon: "🎨",
    interests: ["art", "humanities"],
    location: "Local or virtual",
    description: "Combine images, interviews, and short writing to tell a story about a topic or community that matters to you.",
    tags: ["Creativity", "Storytelling"],
    url: "https://www.canva.com/"
  },
  {
    id: "o8",
    type: "Community",
    title: "Explore mental health advocacy",
    icon: "💚",
    interests: ["psychology", "community"],
    location: "Local or virtual",
    description: "Learn about established youth mental health organizations and explore supervised advocacy or educational initiatives.",
    tags: ["Wellbeing", "Advocacy"],
    url: "https://www.nami.org/"
  },
  {
    id: "o9",
    type: "Learning resource",
    title: "Explore design and visual arts",
    icon: "🖌️",
    interests: ["art"],
    location: "Online",
    description: "Experiment with color, layout, visual communication, and creative projects at your own pace.",
    tags: ["Design", "Creative skills"],
    url: "https://www.khanacademy.org/"
  },
  {
    id: "o10",
    type: "Competition",
    title: "Explore STEM competitions",
    icon: "🔬",
    interests: ["science", "technology"],
    location: "Eligibility varies",
    description: "Discover science and engineering challenges, then check each program's current eligibility and registration details.",
    tags: ["STEM", "Problem-solving"],
    url: "https://www.societyforscience.org/"
  }
];

const state = {
  answers: null,
  projects: [],
  feedback: {},
  activeProfile: null
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function safeExternalURL(url) {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : "#";
  } catch {
    return "#";
  }
}

function interestLabel(value) {
  const labels = {
    science: "Science & Neuroscience",
    technology: "Technology & Coding",
    humanities: "Writing & Humanities",
    psychology: "Psychology & Mental Health",
    art: "Art, Design & Fashion",
    community: "Community Service & Leadership"
  };
  return labels[value] || value;
}

function tagHTML(tags) {
  return tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("");
}

function calculateScore(mentor, answers) {
  const interest = mentor.interests.includes(answers.interest) ? 35 : 0;
  const goal = mentor.goals.includes(answers.goal) ? 30 : 0;
  const support = mentor.support.includes(answers.support) ? 20 : 0;
  const availability = mentor.availability.includes(answers.availability) ? 15 : 0;
  return interest + goal + support + availability;
}

function getRankedMentors() {
  if (!state.answers) return [];

  return mentors.map(mentor => {
    const baseScore = calculateScore(mentor, state.answers);
    const feedback = state.feedback[mentor.id] || 0;
    return {
      ...mentor,
      score: baseScore,
      adjustedScore: Math.max(0, Math.min(100, baseScore + feedback))
    };
  }).sort((a, b) => b.adjustedScore - a.adjustedScore);
}

function renderMentors() {
  const results = $("#results");
  const status = $("#matchStatus");
  const ranked = getRankedMentors();

  if (!ranked.length) {
    results.innerHTML = "";
    return;
  }

  status.textContent = `Here are your ${Math.min(4, ranked.length)} suggested matches. These scores reflect your selected preferences, not a guarantee of compatibility.`;

  results.innerHTML = ranked.slice(0, 4).map(mentor => `
    <article class="mentor-card">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${mentor.icon}</div>
        <div>
          <h3>${escapeHTML(mentor.name)}</h3>
          <p>${escapeHTML(mentor.role)}</p>
        </div>
        <span class="match-score">${mentor.score}% fit</span>
      </div>
      <p class="card-description">${escapeHTML(mentor.bio)}</p>
      <div class="tag-row">${tagHTML(mentor.skills.slice(0, 3))}</div>
      <p class="opportunity-meta">Illustrative fictional mentor profile</p>
      <div class="card-actions">
        <button class="small-button dark" data-profile="${mentor.id}">View profile</button>
        <button class="small-button" data-feedback="helpful" data-mentor="${mentor.id}">Helpful ♡</button>
        <button class="small-button" data-feedback="notfit" data-mentor="${mentor.id}">Not for me</button>
      </div>
    </article>
  `).join("");
}

function showProfile(id) {
  const mentor = mentors.find(item => item.id === id);
  if (!mentor) return;

  state.activeProfile = id;
  $("#profileName").textContent = mentor.name;
  $("#profileRole").textContent = mentor.role;

  $("#profileDetails").innerHTML = `
    <div class="card-top">
      <div class="avatar" aria-hidden="true">${mentor.icon}</div>
      <div>
        <h3>${escapeHTML(mentor.name)}</h3>
        <p>${escapeHTML(mentor.role)}</p>
        <p class="opportunity-meta">Fictional profile for prototype demonstration</p>
      </div>
    </div>
    <h3>About</h3>
    <p>${escapeHTML(mentor.bio)}</p>
    <h3>Areas of experience</h3>
    <div class="tag-row">${tagHTML(mentor.skills)}</div>
    <h3>Example projects</h3>
    <ul>${mentor.projects.map(project => `<li>${escapeHTML(project)}</li>`).join("")}</ul>
    <p class="prototype-note">This is sample content. No real mentor account or contact connection is available in this demo.</p>
    <div class="profile-actions">
      <button class="primary-button" data-feedback="helpful" data-mentor="${mentor.id}">This mentor seems helpful ♡</button>
      <button class="secondary-button" id="profileReturn">← Back to matches</button>
    </div>
  `;

  $("#mentors").hidden = true;
  $("#profile").hidden = false;
  $("#profile").scrollIntoView({ behavior: "smooth" });
}

function closeProfile() {
  $("#profile").hidden = true;
  $("#mentors").hidden = false;
  $("#mentors").scrollIntoView({ behavior: "smooth" });
}

function getSelectedInterest() {
  return $("#opportunityInterest").value;
}

function renderOpportunities() {
  const selected = getSelectedInterest();
  let list = opportunities.filter(opportunity =>
    selected === "all" || opportunity.interests.includes(selected)
  );

  if (state.answers && selected === "all") {
    list.sort((a, b) => {
      const aMatch = a.interests.includes(state.answers.interest) ? 1 : 0;
      const bMatch = b.interests.includes(state.answers.interest) ? 1 : 0;
      return bMatch - aMatch;
    });
  }

  if (!list.length) {
    $("#opportunityGrid").innerHTML = `
      <div class="opportunity-card">
        <h3>No recommendations in this category yet</h3>
        <p>Try another interest to explore more examples.</p>
      </div>`;
    return;
  }

  $("#opportunityGrid").innerHTML = list.map(opportunity => `
    <article class="opportunity-card">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${opportunity.icon}</div>
        <span class="opportunity-type">${escapeHTML(opportunity.type)}</span>
      </div>
      <h3>${escapeHTML(opportunity.title)}</h3>
      <div class="opportunity-meta">⌖ ${escapeHTML(opportunity.location)}</div>
      <p>${escapeHTML(opportunity.description)}</p>
      <div class="tag-row">${tagHTML(opportunity.tags)}</div>
      <a class="small-button" href="${escapeHTML(safeExternalURL(opportunity.url))}" target="_blank" rel="noopener noreferrer">Explore resource ↗</a>
    </article>
  `).join("");
}

function renderProjects() {
  const showcase = $("#projectShowcase");

  const userProjects = state.projects.map(project => `
    <article class="project-card">
      <span class="opportunity-type">Your project</span>
      <h3>${escapeHTML(project.name)}</h3>
      <div class="tag-row">${tagHTML([interestLabel(project.interest)])}</div>
      <p>${escapeHTML(project.description)}</p>
      <button class="small-button" data-project-mentors="${project.id}" aria-expanded="false">Find relevant mentors ↓</button>
      <div id="projectMentors${project.id}" hidden>
        <h3>Potentially relevant mentors</h3>
        ${mentors.filter(mentor => mentor.interests.includes(project.interest)).map(mentor => `
          <p>🐾 <strong>${escapeHTML(mentor.name)}</strong> — ${escapeHTML(mentor.role)}
          <button class="small-button" data-profile="${mentor.id}">View profile</button></p>
        `).join("") || "<p>No matching sample mentors yet.</p>"}
      </div>
    </article>
  `).join("");

  const starterProjects = `
    <article class="project-card">
      <span class="opportunity-type">Idea starter</span>
      <h3>Create a student resource guide</h3>
      <p>Gather useful resources for students exploring a subject you care about.</p>
      <div class="tag-row">${tagHTML(["Research", "Community", "Beginner-friendly"])}</div>
    </article>
    <article class="project-card">
      <span class="opportunity-type">Idea starter</span>
      <h3>Interview someone about their work</h3>
      <p>Prepare thoughtful questions and create a short written or visual story. Ask permission before publishing anyone's words or images.</p>
      <div class="tag-row">${tagHTML(["Writing", "Curiosity", "Storytelling"])}</div>
    </article>`;

  showcase.innerHTML = userProjects + starterProjects;
}

// Submit mentor questionnaire
$("#matchForm").addEventListener("submit", event => {
  event.preventDefault();

  state.answers = {
    interest: $("#interest").value,
    goal: $("#goal").value,
    support: $("#support").value,
    availability: $("#availability").value
  };

  renderMentors();
  $("#opportunityInterest").value = state.answers.interest;
  renderOpportunities();

  $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
});

// Mentor profile and feedback buttons
$("#results").addEventListener("click", event => {
  const profileButton = event.target.closest("[data-profile]");
  if (profileButton) {
    showProfile(profileButton.dataset.profile);
    return;
  }

  const feedbackButton = event.target.closest("[data-feedback]");
  if (!feedbackButton) return;

  const id = feedbackButton.dataset.mentor;
  const kind = feedbackButton.dataset.feedback;
  state.feedback[id] = (state.feedback[id] || 0) + (kind === "helpful" ? 8 : -12);

  renderMentors();
  $("#matchStatus").textContent = kind === "helpful"
    ? "Thanks! We'll prioritize similar mentor profiles in this demo."
    : "Got it! We'll lower similar mentor recommendations in this demo.";
});

$("#profileDetails").addEventListener("click", event => {
  if (event.target.closest("#profileReturn")) {
    closeProfile();
    return;
  }

  const feedbackButton = event.target.closest("[data-feedback]");
  if (!feedbackButton) return;

  const id = feedbackButton.dataset.mentor;
  state.feedback[id] = (state.feedback[id] || 0) + 8;
  closeProfile();
  renderMentors();
  $("#matchStatus").textContent = "Thanks for the feedback! Your match ranking has been updated.";
});

$("#backToMatches").addEventListener("click", closeProfile);

// Opportunity filter
$("#opportunityInterest").addEventListener("change", renderOpportunities);

// Project submission
$("#projectForm").addEventListener("submit", event => {
  event.preventDefault();

  const project = {
    id: Date.now().toString(36),
    name: $("#projectName").value.trim(),
    interest: $("#projectInterest").value,
    description: $("#projectDescription").value.trim()
  };

  if (!project.name || !project.interest || !project.description) return;

  state.projects.unshift(project);
  renderProjects();
  $("#projectForm").reset();
  $("#projectShowcase").scrollIntoView({ behavior: "smooth", block: "start" });
});

// Project cards: toggle mentor suggestions or open mentor profile
$("#projectShowcase").addEventListener("click", event => {
  const profileButton = event.target.closest("[data-profile]");
  if (profileButton) {
    showProfile(profileButton.dataset.profile);
    return;
  }

  const toggleButton = event.target.closest("[data-project-mentors]");
  if (!toggleButton) return;

  const panel = document.getElementById("projectMentors" + toggleButton.dataset.projectMentors);
  if (!panel) return;

  panel.hidden = !panel.hidden;
  toggleButton.setAttribute("aria-expanded", String(!panel.hidden));
  toggleButton.textContent = panel.hidden ? "Find relevant mentors ↓" : "Hide mentor suggestions ↑";
});

// Safety information
$("#safetyToggle").addEventListener("click", event => {
  event.preventDefault();
  const details = $("#safetyDetails");
  details.hidden = !details.hidden;
  $("#safetyToggle").setAttribute("aria-expanded", String(!details.hidden));
  $("#safetyToggle").textContent = details.hidden
    ? "Our safety commitments +"
    : "Our safety commitments −";
});

// Mobile navigation
$("#menuButton").addEventListener("click", () => {
  $("#sidebar").classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    $("#sidebar").classList.remove("open");
  });
});

// Initial view
renderOpportunities();
renderProjects();
