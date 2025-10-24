document.addEventListener("DOMContentLoaded", () => {
  console.log("Main JS loaded.");

  const btn = document.getElementById("clickBtn");
  const counter = document.getElementById("counter");
  let count = 0;

  if (btn && counter) {
    btn.addEventListener("click", () => {
      count++;
      counter.textContent = count;
    });
  }

  async function loadData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  loadData();
});
