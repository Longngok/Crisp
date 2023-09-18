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
//Hàm hiển thị collection và ẩn các collection khác
function showCollection(collectionHandle) {
  var i;
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(collectionHandle).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Mặc định hiển thị tab đầu tiên khi trang được tải
document.getElementsByClassName("tablink")[0].click();


// Hàm hiển thị collection và ẩn các collection khác
// function showCollection(collectionHandle) {
//   var i;
//   var tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   var tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }

//   document.getElementById(collectionHandle).style.display = "block";
//   var activeTablink = document.querySelector("input.tablink:checked + label");
//   activeTablink.classList.add("active");
// }

// // Mặc định hiển thị tab đầu tiên khi trang được tải
// document.querySelector("input.tablink:checked + label").click();






