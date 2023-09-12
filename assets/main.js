//toogle
document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.nav-menu');
  var openButton = document.querySelector('.btn-toggle.open');
  var closeButton = document.querySelector('.btn-toggle.close');

  openButton.addEventListener('click', function() {
    dropdown.classList.add('active');
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    dropdown.classList.remove('active');
    closeButton.style.display = 'none';
    openButton.style.display = 'block';
  });
});

//search
function toggleSearchInput() {
  var searchInput = document.getElementById('searchInput');
  var inputContainer = document.querySelector('.lg-p-absolute');

  if (inputContainer.classList.contains('active')) {
    inputContainer.classList.remove('active');
  } else {
    inputContainer.classList.add('active');
  }
}

//slideshow
const imageWidth = 100;

let bannerImages = document.querySelector(".banner-images");

function showSlide(index) {
  currentPosition = index * imageWidth;
  bannerImages.style.transform = `translateX(-${currentPosition}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
  const prevButtons = document.querySelectorAll(".btn-prev");
  const nextButtons = document.querySelectorAll(".btn-next");
  let currentPosition = 0;
  const dots = document.querySelectorAll(".btn__dot");

  // Định nghĩa một hàm để loại bỏ class "active" từ tất cả các dots
  function removeActiveClass() {
    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });
  }

  // Thiết lập trạng thái "active" cho dot đầu tiên khi trang được tải
  dots[0].classList.add("active");

  prevButtons.forEach(function(prevButton) {
    prevButton.addEventListener("click", () => {
      currentPosition -= imageWidth;
      if (currentPosition < 0) {
        currentPosition = imageWidth * (bannerImages.childElementCount - 1);
      }
      showSlide(currentPosition / imageWidth);
      removeActiveClass(); // Loại bỏ class "active" từ tất cả các dots
      dots[currentPosition / imageWidth].classList.add("active"); // Thêm class "active" vào dot tương ứng
    });
  });

  nextButtons.forEach(function(nextButton) {
    nextButton.addEventListener("click", () => {
      currentPosition += imageWidth;
      if (currentPosition > imageWidth * (bannerImages.childElementCount - 1)) {
        currentPosition = 0;
      }
      showSlide(currentPosition / imageWidth);
      removeActiveClass(); // Loại bỏ class "active" từ tất cả các dots
      dots[currentPosition / imageWidth].classList.add("active"); // Thêm class "active" vào dot tương ứng
    });
  });

  dots.forEach(function(dot, index) {
    dot.addEventListener("click", () => {
      showSlide(index);
      removeActiveClass(); // Loại bỏ class "active" từ tất cả các dots
      dot.classList.add("active"); // Thêm class "active" vào dot được click
    });
  });
});






