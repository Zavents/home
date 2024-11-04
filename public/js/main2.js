


function showProject2() {
  const imageUrl = "assets/img/jam.jpg"; // Replace with the actual image URL
  const img = new Image();
  img.src = imageUrl;

  img.onload = function() {
    Swal.fire({
      title: 'Digital Clock',
      html: `
        <img src="${imageUrl}" alt="Digital Clock" class="mb-2" style="width:100%; max-height:300px; object-fit:cover;">
        <p>This project is a digital clock that uses an ESP32 module to retrieve time data from the internet. It displays the time and date in real-time with high precision, synchronized with a global time server via Wi-Fi.</p>
      `,
      confirmButtonText: 'Close',
      width: `${img.width + 40}px`, // Adjust width to fit image + padding
      padding: '20px',
      customClass: {
        popup: 'swal-custom-popup', // Custom class for further CSS styling if needed
      },
    });
  };
}

function showProject3() {
  const imageUrl = "assets/sampah.gif"; // Replace with the actual image URL
  const img = new Image();
  img.src = imageUrl;

  img.onload = function() {
    Swal.fire({
      title: 'Smart Trash Bin',
      html: `
        <img src="${imageUrl}" alt="Smart Trash Bin" class="mb-2" style="width:100%; max-height:300px; object-fit:cover;">
        <p>This project is a smart trash bin that uses Arduino Uno to control servo motors. The lid opens and closes automatically when it detects an object nearby, improving hygiene and convenience.</p>
      `,
      confirmButtonText: 'Close',
      width: `${img.width + 40}px`, // Adjust width to fit image + padding
      padding: '20px',
      customClass: {
        popup: 'swal-custom-popup', // Custom class for further CSS styling if needed
      },
    });
  };
}
