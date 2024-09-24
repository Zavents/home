
AOS.init({
})
window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //make clock a 12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of all months in  a year
    const monthList = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Augustus",
      "September",
      "oktober",
      "November",
      "Desember"
    ];

    //get current date and time
    const date = monthList[month] + " " + day + ", " + year;
    const time = hourTime + ":" + minute + ":" + second + ampm;

    //combine current date and time
    const dateTime = date + "  " + time;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});


document.getElementById('youtubeButton').addEventListener('click', function() {
  Swal.fire({
    title: 'Navigation',
    html: `
      <ul style="list-style-type: none; padding-left: 0; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <li style="flex-basis: 100%;">
          <a href="../index.html" class="nav-btn full-width">Home</a>
        </li>
        <li style="flex-basis: calc(50% - 10px);">
          <a href="../about.html" class="nav-btn">About Me</a>
        </li>
        <li style="flex-basis: calc(50% - 10px);">
          <a href="#social" class="nav-btn">Social Stuff</a>
        </li>
        <li style="flex-basis: calc(50% - 10px);">
          <a href="#portfolio" class="nav-btn">Website</a>
        </li>
        <li style="flex-basis: calc(50% - 10px);">
          <a href="#team" class="nav-btn">Photo</a>
        </li>
        <li style="flex-basis: calc(50% - 10px);">
          <a href="#blog" class="nav-btn">Video</a>
        </li>
        <li style="flex-basis: calc(50% - 10px);">
          <a href="#contact" class="nav-btn">Vents</a>
        </li>
      </ul>
    `,
    confirmButtonText: 'Close',
    customClass: {
      popup: 'fullscreen-popup'
    },
    width: '80%',
    padding: '0',
    showConfirmButton: true,
    backdrop: `
      rgba(0,0,0,0.8)
    `
  });
});
