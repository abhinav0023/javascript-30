function updateClock() {
    const now = new Date();
  
    // Get the current time
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    // Calculate the rotation angles
    const secondAngle = seconds * 6; // 360 / 60
    const minuteAngle = minutes * 6 + seconds * 0.1; // 360 / 60 + 0.1 degrees per second
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 + 0.5 degrees per minute
  
    // Apply rotations
    document.getElementById('sec').style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
    document.getElementById('min').style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
    document.getElementById('hour').style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
  }

  // Call updateClock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to set the time immediately
  