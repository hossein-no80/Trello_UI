// -----------------------------------------------------------------------------------------------------------
// navbar even
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu-button");
  const menus = document.querySelectorAll(".menu-content");
  const overlay = document.querySelector(".overlay");
  const shadowbox = document.querySelector(".shadow11");

  // تابع برای بستن تمام منوها و مخفی کردن overlay
  function closeAllMenus() {
    buttons.forEach(btn => btn.classList.remove("active"));
    menus.forEach(menu => menu.classList.remove("show"));
    overlay.style.display = "none"; // مخفی کردن overlay
    document.body.classList.remove("no-scroll");
    shadowbox.classList.remove("active");
  }

  // اضافه کردن رویداد کلیک به هر دکمه
  buttons.forEach(button => {
    button.addEventListener("click", function (event) {
      // جلوگیری از بسته شدن منوها با کلیک روی دکمه‌ها
      event.stopPropagation();
      const targetMenu = document.getElementById(this.getAttribute("data-target"));
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        targetMenu.classList.remove("active");
        shadowbox.classList.remove("active");
        overlay.style.display = "none";
        closeAllMenus();


      }else {
        // بستن تمام منوها
        closeAllMenus();

        // فعال‌سازی دکمه کلیک شده و نمایش منوی مربوطه
        this.classList.add("active");
        targetMenu.classList.add("show");
        shadowbox.classList.add("active");

        // نمایش overlay
        overlay.style.display = "block";
        // غیرفعال کردن اسکرول صفحه
        document.body.classList.add("no-scroll");
      }
    });
  });

  menus.forEach(menu => {
    menu.addEventListener("click", function (event) {
      event.stopPropagation();

    });
  });

  // بستن تمام منوها با کلیک در خارج از آن‌ها
  document.addEventListener("click", function () {
    closeAllMenus();
  });

  // بستن منوها با کلیک روی overlay
  overlay.addEventListener("click", function () {
    closeAllMenus();
  });
});


// ------------------------------------------------------------------------------------------------
// nav burger responsive mb
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  // const navLinks = document.querySelectorAll(".nav-links a");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
    if (nav.classList.contains("nav-active")) {
      document.body.style.overflow = "hidden";
      document.querySelector("#navbarMb1").classList.remove("highlight")
    } else {
      document.body.style.overflow = "auto";
      document.querySelector("#navbarMb1").classList.add("highlight")
      closeMenu()
    }
  });
  //
};

navSlide();

// --------------------------------------------------------------------------------------------------------------------
function toggleMenu(menusId) {
  // ابتدا همه منوهای باز را می‌بندیم
  closeMenu();
  // منوی مورد نظر را باز می‌کنیم
  let menu = document.getElementById(menusId);
  let logosAT1 = document.getElementById("logo11")
  let logosAT2 = document.getElementById("logo12")
  if (menu) {
    menu.classList.add('open');
    logosAT1.style.display = "none";
    logosAT2.style.display = "flex";


  }
}

// تابع برای بستن همه منوها
function closeMenu() {
  let menus = document.querySelectorAll('.side-menu');
  let logosAT1 = document.getElementById("logo11")
  let logosAT2 = document.getElementById("logo12")
  menus.forEach(function (menu) {
    menu.classList.remove('open');
    logosAT1.style.display = "flex";
    logosAT2.style.display = "none";
    // if (menu.classList.contains('open')){
    //   logosAT1.style.display = "block";
    //   logosAT2.style.display = "none";
    // }
  });
}
// ------------------------------------------------------------------------------------------------------------
// change color when hover on card navbar


// hex random
function getRandomLightColor() {
  const r = Math.floor(Math.random() * 20 + 235);
  const g = Math.floor(Math.random() * 20 + 235);
  const b = Math.floor(Math.random() * 20 + 235);
  return `rgb(${r}, ${g}, ${b})`;
}

const cards = document.querySelectorAll(".hoverElement");
cards.forEach(cards => {
  let colorChanged = false;
  cards.addEventListener("mouseover", function (event) {
    if (!colorChanged) {
      cards.style.backgroundColor = getRandomLightColor();
      colorChanged = true;
    }
  });
  cards.addEventListener("mouseout", function (event) {
    cards.style.backgroundColor = "white";
    colorChanged = false;
  })
});




// ---------------main1-----------------------------------------------------------------------------------------------------


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav',
  infinite: false,
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  infinite: false,
});
// ---------------------main2-----------------------------------------------------------------------------------------------
$('.cardsMain2').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
});

$('.main6slider').slick({
  infinite: false,
  dots: true,
  centerMode: false,
  slidesToShow: 1,
  appendArrows:$("#navigations_arrows"),
  appendDots: $("#navigations_dots"),
});
// ---------------------------scroll Page----------------------------------------
let navbarpc1 = document.getElementById("navbarPc");

window.addEventListener('scroll', function() {
  // بررسی اینکه آیا کاربر به پایین اسکرول می‌کند
  if (window.scrollY > 0) {
      navbarpc1.classList.add("scrolled")
  } else {
    // وقتی کاربر به بالای صفحه برگشت
      navbarpc1.classList.remove("scrolled")
  }
});
// ------------------scroll page---------------------------------------------------------

const headerpc = document.getElementById("navbarPc")
const headermb = document.getElementById("navbarMb")

window.addEventListener('scroll', function () {

  // چک می‌کنیم که آیا صفحه به پایین اسکرول شده یا خیر
  if (window.scrollY > 0) {
    // اگر صفحه اسکرول شده بود، یک کلاس CSS اضافه می‌شود
    headerpc.classList.add('highlight');
    headermb.classList.add('highlight');
  } else {
    // اگر صفحه به جای اولش بازگشت، کلاس CSS حذف می‌شود
    headerpc.classList.remove('highlight');
    headermb.classList.remove('highlight');
  }
});
// -------------------------------------------------------------------------------------------------