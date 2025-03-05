// Translation data
const translations = {
    en: {
      title: "Car Booking",
      startPlaceLabel: "Start Place:",
      endPlaceLabel: "End Place:",
      contactInfoLabel: "Contact Information:",
      carSelectLabel: "Select a Car:",
      bookNowButton: "Book Now",
    },
    ja: {
      title: "車の予約",
      startPlaceLabel: "出発地:",
      endPlaceLabel: "目的地:",
      contactInfoLabel: "連絡先情報:",
      carSelectLabel: "車を選択:",
      bookNowButton: "今すぐ予約",
    },
    zh: {
      title: "汽车预订",
      startPlaceLabel: "出发地:",
      endPlaceLabel: "目的地:",
      contactInfoLabel: "联系方式:",
      carSelectLabel: "选择车辆:",
      bookNowButton: "立即预订",
    },
    th: {
      title: "จองรถ",
      startPlaceLabel: "สถานที่เริ่มต้น:",
      endPlaceLabel: "ปลายทาง:",
      contactInfoLabel: "ข้อมูลติดต่อ:",
      carSelectLabel: "เลือกประเภทรถ:",
      bookNowButton: "จองตอนนี้",
    },
    vi: {
      title: "Đặt xe",
      startPlaceLabel: "Nơi khởi hành:",
      endPlaceLabel: "Điểm đến:",
      contactInfoLabel: "Thông tin liên hệ:",
      carSelectLabel: "Chọn loại xe:",
      bookNowButton: "Đặt ngay",
    },
  };
  
  // Function to update the page content based on the selected language
  function updateLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("startPlaceLabel").textContent = translations[language].startPlaceLabel;
    document.getElementById("endPlaceLabel").textContent = translations[language].endPlaceLabel;
    document.getElementById("contactInfoLabel").textContent = translations[language].contactInfoLabel;
    document.getElementById("carSelectLabel").textContent = translations[language].carSelectLabel;
    document.getElementById("bookNowButton").textContent = translations[language].bookNowButton;
  }
  
  // Event listener for the language switcher
  document.getElementById("languageSelect").addEventListener("change", function () {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
  });
  
  // Set default language to English
  updateLanguage("en");
  