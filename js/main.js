document.getElementById('youtubeButton').addEventListener('click', function() {
  Swal.fire({
    title: 'Where to Go ?',
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
AOS.init({
})


