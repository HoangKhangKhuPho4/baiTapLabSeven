//Hook up the tweet display

$(document).ready(function () {
  $(".countdown").countdown(
    {
      date: "8 July 2048 18:30:00",
      format: "on",
    },

    function () {
      // callback function
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");

  function focusAndClickSearchInput() {
    searchInput.focus();

    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    searchInput.dispatchEvent(clickEvent);
  }

  setTimeout(focusAndClickSearchInput, 1000);
});

// document.addEventListener("DOMContentLoaded", function () {
//   var currentStep = 0;
//   var steps = [
//     { element: "#navbarNav", text: "Đây là menu chính của website" },
//     { element: "#services-section", text: "Xem các dịch vụ của chúng tôi" },
//     { element: "#testimonial-section", text: "Đọc đánh giá của khách hàng" },
//     { element: "#contact-form", text: "Điền form để đặt dịch vụ" },
//   ];

//   function showStep(step) {
//     var stepInfo = steps[step];
//     var el = document.querySelector(stepInfo.element);
//     var rect = el.getBoundingClientRect();
//     var tooltip = document.getElementById("guidedActionTooltip");
//     tooltip.style.top = rect.top + window.scrollY + "px";
//     tooltip.style.left = rect.left + "px";
//     document.getElementById("guidedActionText").textContent = stepInfo.text;
//     document.getElementById("guidedActionOverlay").style.display = "block";
//   }

//   document
//     .getElementById("guidedActionNextBtn")
//     .addEventListener("click", function () {
//       currentStep++;
//       if (currentStep < steps.length) {
//         showStep(currentStep);
//       } else {
//         document.getElementById("guidedActionOverlay").style.display = "none";
//         currentStep = 0; // Quay lại bước đầu nếu cần
//       }
//     });

//   // Hiển thị bước đầu tiên
//   showStep(currentStep);
// });

document.getElementById("backToTopBtn").addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
document.getElementById("backToTopBtn").addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
// Hàm kiểm tra định dạng email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Hàm kiểm tra định dạng số điện thoại
function isValidPhoneNumber(phone) {
  const phoneRegex = /^[0-9]{10,15}$/; // Số điện thoại từ 10 đến 15 chữ số
  return phoneRegex.test(phone);
}

// Hàm kiểm tra xem tất cả các trường trong form đã được điền chưa và có hợp lệ không
function validateForm(form) {
  let isValid = true;
  let message = "";

  Array.from(form.elements).forEach((input) => {
    if (input.required && input.value.trim() === "") {
      isValid = false;
      message += `Trường ${input.name} đang trống.\n`;
    }

    if (input.type === "email" && !isValidEmail(input.value)) {
      isValid = false;
      message += `Email không hợp lệ.\n`;
    }

    if (input.name === "phone" && !isValidPhoneNumber(input.value)) {
      isValid = false;
      message += `Số điện thoại không hợp lệ.\n`;
    }

    // Thêm các kiểm tra khác nếu cần
  });

  return { isValid, message };
}

// Hàm xử lý khi submit form
function handleSubmit(event) {
  event.preventDefault();

  // Kiểm tra xem tất cả trường đã được điền và hợp lệ hay chưa
  const { isValid, message } = validateForm(contactForm);

  if (isValid) {
    // Lấy dữ liệu từ form
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("contactFormData", JSON.stringify(data));

    // Tạo đường link mailto
    let mailtoLink = `mailto:22130116@st.hcmuaf.edu.vn?subject=Thông tin đặt dịch vụ&body=${encodeURIComponent(
      JSON.stringify(data)
    )}`;

    // Chuyển hướng người dùng tới email
    window.location.href = mailtoLink;
  } else {
    alert("Có lỗi xảy ra:\n" + message);
  }
}

// Thêm event listener cho form
contactForm.addEventListener("submit", handleSubmit);

function formDataToString(formData) {
  const entries = formData.entries();
  let text = "Thông tin đặt dịch vụ:\n\n";
  for (let [key, value] of entries) {
    text += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
  }
  return text;
}
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  const text = formDataToString(formData);

  localStorage.setItem("contactFormData", text);

  const mailtoLink = `mailto:22130116@st.hcmuaf.edu.vn?subject=Thông tin đặt dịch vụ&body=${encodeURIComponent(
    text
  )}`;
  window.location.href = mailtoLink;
}
document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử của thanh tìm kiếm và nút tìm kiếm
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  // Xử lý sự kiện click cho nút tìm kiếm
  searchButton.addEventListener("click", function () {
    // Lấy giá trị nhập vào từ thanh tìm kiếm
    const searchTerm = searchInput.value.toLowerCase();

    // Kiểm tra xem nếu giá trị nhập vào là 'office cleaning' (không phân biệt hoa thường)
    if (searchTerm === "office cleaning") {
      // Chuyển hướng đến trang services-detail.html
      window.location.href = "services-detail.html";
    } else {
      // Hiển thị thông báo hoặc xử lý khác nếu từ khóa không phù hợp
      alert("Không tìm thấy kết quả phù hợp!");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử liên kết 'Learn More' trong 'Kitchen Cleaning'
  const kitchenCleaningLink = document
    .querySelector(".services-thumb")
    .querySelector('a[href="services-detail.html"]');

  // Kiểm tra nếu phần tử tồn tại
  if (kitchenCleaningLink) {
    // Thêm sự kiện click cho liên kết
    kitchenCleaningLink.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
      // Chuyển hướng đến trang kitchen-detail.html
      window.location.href = "kitchen-detail.html";
    });
  }
});

var modal = document.getElementById("modalHuongDan");
var btn = document.getElementById("getStartedBtn"); // Đảm bảo nút này có trong HTML
var closeSpan = document.getElementsByClassName("close")[0];
var nextBtn = document.getElementById("nextBtn");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var currentStep = 1;

btn.onclick = function () {
  modal.style.display = "block";
  step1.style.display = "block";
  step2.style.display = "none";
  currentStep = 1;
};

closeSpan.onclick = function () {
  modal.style.display = "none";
};

nextBtn.onclick = function () {
  if (currentStep === 1) {
    step1.style.display = "none";
    step2.style.display = "block";
    currentStep = 2;
  } else if (currentStep === 2) {
    // Xử lý cho các bước tiếp theo hoặc đóng modal
  }
  // Thêm các điều kiện cho các bước tiếp theo
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modalHuongDan");
  var btn = document.getElementById("getStartedBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
