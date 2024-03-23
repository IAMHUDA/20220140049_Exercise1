
///////////////////////////////////
/ <-- javascript by si ganteng -->/
///////////////////////////////////





// Ambil elemen-elemen yang diperlukan
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Tentukan tema saat ini (menggunakan local storage)
const currentTheme = localStorage.getItem('theme') || 'dark';

// Atur tema berdasarkan nilai saat ini
if (currentTheme === 'light') {
  htmlElement.setAttribute('data-bs-theme', 'light');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun'); // Ganti dengan ikon bulan jika tema terang
} else {
  htmlElement.setAttribute('data-bs-theme', 'dark');
}

// Tambahkan event listener untuk klik tombol toggle
themeToggleBtn.addEventListener('click', () => {
  // Toggle tema antara light dan dark
  if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun'); // Ganti dengan ikon bulan saat tema terang
    localStorage.setItem('theme', 'light'); // Simpan tema ke local storage
  } else {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon'); // Ganti dengan ikon matahari saat tema gelap
    localStorage.setItem('theme', 'dark'); // Simpan tema ke local storage
  }

  // Tambahkan class "clicked" untuk animasi tombol diklik
  themeToggleBtn.classList.add('clicked');

  // Set timeout untuk menghapus class "clicked" setelah animasi selesai
  setTimeout(() => {
    themeToggleBtn.classList.remove('clicked');
  }, 300); // Sesuaikan dengan durasi animasi tombol (dalam milidetik)
});




function sweetalert() {
  Swal.fire("javascript di gunakan untuk meng generate html jadi line html lebih sedikit");
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var navbar = document.getElementById("myNavbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  });


  function updateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Formatting to add leading zeros if needed
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
  
    var dateDisplay = document.getElementById('date');
    dateDisplay.textContent = day + '/' + month + '/' + year;
  
    var timeDisplay = document.getElementById('time');
    timeDisplay.textContent = hours + ':' + minutes + ':' + seconds;
  
    setTimeout(updateTime, 1000); // Update every second
  }
  
  updateTime();



const carouselImages = ['./images/pixel.gif', './images/coding.gif', './images/starboy.gif']; // Ganti dengan daftar gambar carousel Anda

let currentIndex = 0;
const banner = document.querySelector(".banner");

const generateImg = () => {
    // Hapus gambar sebelumnya (jika ada)
    while (banner.firstChild) {
        banner.removeChild(banner.firstChild);
    }
    
    const addImg = document.createElement("img");
    addImg.src = carouselImages[currentIndex];
    addImg.alt = "Background";
    banner.appendChild(addImg);
}

const nextImage = () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    generateImg();
}

const prevImage = () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    generateImg();
}

// Panggil generateImg untuk memulai carousel
generateImg();

// Saat user berinteraksi dengan tombol next, pindah ke gambar berikutnya
const nextButton = document.querySelector(".next-button");
nextButton.addEventListener('click', nextImage);

// Saat user berinteraksi dengan tombol prev, pindah ke gambar sebelumnya
const prevButton = document.querySelector(".prev-button");
prevButton.addEventListener('click', prevImage);

// add course

const listcourseHTML = document.querySelector(".card-course");

const listcourse = [
    {
        img: "./images/cyber.jpeg",
        h3: "keamanan siber",
        h6: ""
    },
    {
        img: "./images/jaringan.jpg",
        h3: "networking",
        h6: ""
    },
    {
        img: "./images/mysql.png",
        h3: "database",
        h6: ""
    },
    {
        img: "./images/web.jpeg",
        h3: "pengembangan web",
        h6: ""
    },
    {
        img: "./images/softwaretesting.jpeg",
        h3: "STQA",
        h6: ""
    },
    {
        img: "./images/statistika.jpg",
        h3: "probabilitas& statistika",
        h6: ""
    }
];

const addlistcourse = () => {
    listcourseHTML.innerHTML = "";
    if (listcourse.length > 0) {
        listcourse.forEach(course => {
            const newcourse = document.createElement("div");
            newcourse.classList.add("itemcourse");
            newcourse.innerHTML = `
            <img src="${course.img}" alt="Foto course" />
            <h3>${course.h3}</h3>
            <h6>${course.h6}</h6>
            `;
            listcourseHTML.appendChild(newcourse);
        });
    }
}

addlistcourse();