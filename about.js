
// *********** loading bar *************

const loadBar = (id, percent, duration) => {
    const bar = document.getElementById(`bar-${id}`);
    const percentageText = document.getElementById(`percent-${id}`);
    let currentPercent = 0;
  
    const interval = setInterval(() => {
      if (currentPercent <= percent) {
        bar.style.width = `${currentPercent}%`;
        percentageText.textContent = `${currentPercent}%`;
        currentPercent++;
      } else {
        clearInterval(interval);
      }
    }, duration);
  };
  
  // Load all bars
  loadBar(65, 65, 10);
  loadBar(75, 75, 10);
  loadBar(90, 90, 10);
  loadBar(100, 100, 10);