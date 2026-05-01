const activityList = document.getElementById("activityList");
const rosterList = document.getElementById("rosterList");
const toggleBtn = document.getElementById("toggleBtn");

let running = true;

const activities = [
  "Janhavi does not  bunk lecture",
  " Sneha do it fast the word ",
  "Dhairya submit the  assignment",
  
  " Jeet marked absent"
];

const roster = [
  { name: "Janhavi Nankade", status: "present" },
  { name: "Sneha Yadav", status: "present" },
  { name: "Dhairya Deulkar", status: "late" },

  {name: "Jeet kumar", status:"absent"}

   
];

function renderRoster() {
  rosterList.innerHTML = "";
  roster.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `${r.name} <span class="status ${r.status}">${r.status}</span>`;
    rosterList.appendChild(li);
  });
}

function addActivity() {
  if (!running) return;

  const li = document.createElement("li");
  li.textContent = activities[Math.floor(Math.random() * activities.length)];
  activityList.prepend(li);

  document.getElementById("liveUpdates").textContent++;
}

setInterval(addActivity, 2000);

toggleBtn.onclick = () => {
  running = !running;
  toggleBtn.textContent = running ? "Pause" : "Resume";
};

renderRoster();