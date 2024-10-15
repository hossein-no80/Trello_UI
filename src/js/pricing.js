// ---------------------------------------scrol page---------------------------------------------
const headerpc1 = document.getElementById("navbarPc1")
const headermb1 = document.getElementById("navbarMb1")

window.addEventListener('scroll', function () {
  // چک می‌کنیم که آیا صفحه به پایین اسکرول شده یا خیر
  if (window.scrollY > 1) {
    // اگر صفحه اسکرول شده بود، یک کلاس CSS اضافه می‌شود
    headerpc1.classList.add('highlight');
    headermb1.classList.add('highlight');
  } else {
    // اگر صفحه به جای اولش بازگشت، کلاس CSS حذف می‌شود
    headerpc1.classList.remove('highlight');
    headermb1.classList.remove('highlight');
  }
});

//----------------------------------collapse---------------------------------------------
let coll = document.getElementsByClassName("collapsible");

function handleCollapsible() {
  if (window.innerWidth <= 1024) {
    // زمانی که عرض صفحه کمتر از 1024 باشد، حالت دکمه فعال می‌شود
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  } else {
    // زمانی که عرض صفحه بیشتر از 1024 باشد، تمامی محتوا باز می‌شود
    for (let i = 0; i < coll.length; i++) {
      let content = coll[i].nextElementSibling;
      coll[i].removeEventListener("click", function () {});
      content.style.display = "block";
    }
  }
}

// هنگام بارگذاری صفحه و تغییر اندازه صفحه تابع را فراخوانی می‌کنیم
window.addEventListener('load', handleCollapsible);
window.addEventListener('resize', handleCollapsible);
// ------------------------------input range--------------------------------------------------------
const slider = document.getElementById('slider');
const sliderValueDisplay = document.getElementById('sliderValue');
const sliderValueDisplay1 = document.getElementById('sliderValue1');

// رویداد تغییر مقدار اسلایدر
slider.addEventListener('input', function() {
  const value = slider.value;

  // بروزرسانی مقدار در نمایش عدد و دکمه رادیویی
  sliderValueDisplay.textContent = value;
  sliderValueDisplay1.textContent = value;
});
// -------------------------------------------------------------------------------------------
// const collapseButton = document.querySelector('.collapse-Button');
// const collapseContent = document.querySelector('.collapse-Content');
//
// collapseButton.addEventListener('click', function () {
//   collapseContent.classList.toggle('collapsed1');
// })

let coll1 = document.getElementsByClassName("collapsible11");
for (let i = 0; i < coll1.length; i++) {
  coll1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// ---------------------------search-----------------------------------------------------------
function filterItems() {
  // گرفتن ورودی از فیلد جستجو
  let input = document.getElementById('searchInput').value.toLowerCase();

  // گرفتن لیست از آیتم‌ها
  let items = document.querySelectorAll('.itemsList div');

  // فیلتر کردن آیتم‌ها بر اساس ورودی کاربر
  items.forEach(function(item) {
    let text = item.textContent.toLowerCase();
    if (text.indexOf(input) !== -1) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}
// -----------------------------------------------------------------------------------------------
