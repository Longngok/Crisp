//toogle
document.addEventListener('DOMContentLoaded', function() {
  var slide = document.querySelector('.slide-menu');
  var openButton = document.querySelector('.btn-toggle.open');
  var closeButton = document.querySelector('.btn-toggle.close');

  openButton.addEventListener('click', function() {
    slide.classList.add('active');
    openButton.classList.remove('d-block');
    openButton.classList.add('d-none');
    closeButton.classList.remove('d-none');
    closeButton.classList.add('d-block');
  });

  closeButton.addEventListener('click', function() {
    closeButton.classList.add('rotate');

    setTimeout(function() {
    slide.classList.remove('active');
    openButton.classList.remove('d-none');
    openButton.classList.add('d-block');
    closeButton.classList.remove('d-block');
    closeButton.classList.add('d-none');
    closeButton.classList.remove('rotate');
    }, 500);
  });
});

//submenu
document.addEventListener('DOMContentLoaded', function() {
  var openButtons = document.querySelectorAll('.open-child');
  var menuChildren = document.querySelectorAll('.js-menu-child');

  openButtons.forEach(function(openButton, index) {
    openButton.addEventListener('click', function(event) {
      var childMenu = menuChildren[index];
      var isActive = childMenu.classList.contains('active');
      menuChildren[index].classList.remove('active');
      openButtons.forEach(function(button) {
        button.classList.remove('active');
      });

      if (!isActive) {
        childMenu.classList.add('active');
        openButton.classList.add('active'); 
      }
      event.stopPropagation();
    });
  });
  document.addEventListener('click', function() {
    menuChildren.forEach(function(menuChild) {
      menuChild.classList.remove('active');
    });
    openButtons.forEach(function(button) {
      button.classList.remove('active');
    });
  });
});

//search
function toggleSearchInput() {
  var searchInput = document.getElementById('searchInput');
  var inputContainer = document.querySelector('.p-absolute');

  if (inputContainer.classList.contains('active')) {
    inputContainer.classList.remove('active');
  } else {
    inputContainer.classList.add('active');
  }
}

//slideshow
const imageWidth = 100;
let bannerImages = document.querySelector(".js-banner-images");
function showSlide(index) {
  currentPosition = index * imageWidth;
  bannerImages.style.transform = `translateX(-${currentPosition}%)`;
}
document.addEventListener("DOMContentLoaded", function() {
  const prevButtons = document.querySelectorAll(".btn-prev");
  const nextButtons = document.querySelectorAll(".btn-next");
  let currentPosition = 0;
  const dots = document.querySelectorAll(".btn__dot");
  function removeActiveClass() {
    dots.forEach(function(dot) {
      dot.classList.remove("active");
    });
  }
  dots[0].classList.add("active");
  prevButtons.forEach(function(prevButton) {
    prevButton.addEventListener("click", () => {
      currentPosition -= imageWidth;
      if (currentPosition < 0) {
        currentPosition = imageWidth * (bannerImages.childElementCount - 1);
      }
      showSlide(currentPosition / imageWidth);
      removeActiveClass();
      dots[currentPosition / imageWidth].classList.add("active"); 
    });
  });
  nextButtons.forEach(function(nextButton) {
    nextButton.addEventListener("click", () => {
      currentPosition += imageWidth;
      if (currentPosition > imageWidth * (bannerImages.childElementCount - 1)) {
        currentPosition = 0;
      }
      showSlide(currentPosition / imageWidth);
      removeActiveClass(); 
      dots[currentPosition / imageWidth].classList.add("active"); 
    });
  });
  dots.forEach(function(dot, index) {
    dot.addEventListener("click", () => {
      showSlide(index);
      removeActiveClass();
      dot.classList.add("active"); 
    });
  });
});


//Filter
document.addEventListener('DOMContentLoaded', function() {
  // Lấy danh sách các checkbox và divs
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  const tabContents = document.querySelectorAll('.tabcontent');

  // Kiểm tra checkbox của tab đầu tiên mặc định
  const defaultCheckbox = checkboxes[0];
  defaultCheckbox.checked = true;

  // Hiển thị div tab đầu tiên mặc định
  const defaultTabContent = tabContents[0];
  defaultTabContent.style.display = 'grid';

  // Thêm sự kiện 'click' cho từng checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function(event) {
      // Kiểm tra xem checkbox đã được kiểm tra (checked) hay không
      const isChecked = this.checked;

      if (!isChecked) {
        // Nếu checkbox đã kiểm tra, hủy sự kiện click và không cho bỏ chọn
        event.preventDefault();
      } else {
        // Lấy giá trị của checkbox và tìm div tương ứng
        const collectionHandle = this.getAttribute('data-collection-handle');
        const tabContent = document.getElementById(collectionHandle);

        // Ẩn tất cả các divs
        tabContents.forEach((content) => {
          content.style.display = 'none';
        });

        // Hiển thị div tương ứng nếu checkbox được chọn
        tabContent.style.display = 'grid';

        // Bỏ chọn tất cả các checkbox ngoại trừ checkbox hiện tại
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
});








