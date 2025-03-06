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
  },
};

// Function to update the page content based on the selected language
function updateLanguage(language) {
  document.getElementById("title").textContent = translations[language].title;
  document.getElementById("pickupDateTime").previousElementSibling.textContent =
    translations[language].pickupDateTimeLabel;
  document.getElementById("startPlaceLabel").textContent =
    translations[language].startPlaceLabel;
  document.getElementById("customStartPlace").placeholder =
    translations[language].customStartPlacePlaceholder;
  document.getElementById("endPlaceLabel").textContent =
    translations[language].endPlaceLabel;
  document.getElementById("contactInfoLabel").textContent =
    translations[language].contactInfoLabel;
  document.getElementById("carSelectLabel").textContent =
    translations[language].carSelectLabel;
  document.getElementById("bookNowButton").textContent =
    translations[language].bookNowButton;
}

// Event listener for the language switcher
document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateLanguage(selectedLanguage);
});

// Set default language to English
updateLanguage("en");
