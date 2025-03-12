// Translation data
const translations = {
  en: {
    title: "Car Booking",
    pickupDateTimeLabel: "Pickup Date and Time:",
    startPlaceLabel: "Start Place:",
    customStartPlacePlaceholder: "Enter custom start place",
    endPlaceLabel: "End Place:",
    contactInfoLabel: "Contact Information:",
    carSelectLabel: "Select a Car:",
    bookNowButton: "Book Now",
    step1: "Fill the form",
    step2: "Confirm the order",
    step3: "Choose the payment",
    step4: "Complete",
  },
  ja: {
    title: "車の予約",
    pickupDateTimeLabel: "予約日時:",
    startPlaceLabel: "出発地:",
    customStartPlacePlaceholder: "出発地を入力してください",
    endPlaceLabel: "目的地:",
    contactInfoLabel: "連絡先情報:",
    carSelectLabel: "車を選択:",
    bookNowButton: "今すぐ予約",
    step1: "フォームに記入",
    step2: "注文を確認",
    step3: "支払いを選択",
    step4: "完了",
  },
  zh: {
    title: "汽车预订",
    pickupDateTimeLabel: "接送日期和时间:",
    startPlaceLabel: "出发地:",
    customStartPlacePlaceholder: "输入自定义出发地",
    endPlaceLabel: "目的地:",
    contactInfoLabel: "联系方式:",
    carSelectLabel: "选择车辆:",
    bookNowButton: "立即预订",
    step1: "填写表格",
    step2: "确认订单",
    step3: "选择支付方式",
    step4: "完成",
  },
  th: {
    title: "จองรถ",
    pickupDateTimeLabel: "วันที่และเวลารับ:",
    startPlaceLabel: "สถานที่เริ่มต้น:",
    customStartPlacePlaceholder: "ป้อนสถานที่เริ่มต้นที่กำหนดเอง",
    endPlaceLabel: "ปลายทาง:",
    contactInfoLabel: "ข้อมูลติดต่อ:",
    carSelectLabel: "เลือกประเภทรถ:",
    bookNowButton: "จองตอนนี้",
    step1: "กรอกแบบฟอร์ม",
    step2: "ยืนยันคำสั่งซื้อ",
    step3: "เลือกการชำระเงิน",
    step4: "เสร็จสิ้น",
  },
  vi: {
    title: "Đặt xe",
    pickupDateTimeLabel: "Ngày và giờ đón:",
    startPlaceLabel: "Nơi khởi hành:",
    customStartPlacePlaceholder: "Nhập nơi khởi hành tùy chỉnh",
    endPlaceLabel: "Điểm đến:",
    contactInfoLabel: "Thông tin liên hệ:",
    carSelectLabel: "Chọn loại xe:",
    bookNowButton: "Đặt ngay",
    step1: "Điền vào biểu mẫu",
    step2: "Xác nhận đơn hàng",
    step3: "Chọn phương thức thanh toán",
    step4: "Hoàn tất",
  },
};

// Function to update the page content based on the selected language
function updateLanguage(language) {
  const langData = translations[language] || translations["en"]; // Fallback to English

  // Update text content for all translatable elements
  document.getElementById("title").textContent = langData.title;
  document.getElementById("pickupDateTimeLabel").textContent = langData.pickupDateTimeLabel;
  document.getElementById("startPlaceLabel").textContent = langData.startPlaceLabel;
  document.getElementById("customStartPlace").placeholder = langData.customStartPlacePlaceholder;
  document.getElementById("endPlaceLabel").textContent = langData.endPlaceLabel;
  document.getElementById("contactInfoLabel").textContent = langData.contactInfoLabel;
  document.getElementById("carSelectLabel").textContent = langData.carSelectLabel;
  document.getElementById("bookNowButton").textContent = langData.bookNowButton;

  // Update process flow steps
  document.getElementById("step1").textContent = langData.step1;
  document.getElementById("step2").textContent = langData.step2;
  document.getElementById("step3").textContent = langData.step3;
  document.getElementById("step4").textContent = langData.step4;
}

// Event listener for the language switcher
document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateLanguage(selectedLanguage);
});

// Set default language to English on page load
updateLanguage("en");
