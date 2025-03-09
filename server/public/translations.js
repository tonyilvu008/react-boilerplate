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
    adminPageTitle: "Admin Page",
    confirmOrderDetails: "Confirm the order details below:",
    proceedWithPaymentButton: "Proceed with Payment",
    paymentPageTitle: "Payment Page",
    choosePaymentMethod: "Choose your payment method:",
    completePaymentButton: "Complete Payment",
    paymentCompleteTitle: "Payment Complete",
    paymentCompleteMessage: "Thank you for your booking! Your payment has been successfully processed.",
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
    adminPageTitle: "管理ページ",
    confirmOrderDetails: "以下の注文内容を確認してください:",
    proceedWithPaymentButton: "支払いに進む",
    paymentPageTitle: "支払いページ",
    choosePaymentMethod: "支払い方法を選択してください:",
    completePaymentButton: "支払いを完了する",
    paymentCompleteTitle: "支払い完了",
    paymentCompleteMessage: "ご予約ありがとうございます！お支払いが正常に処理されました。",
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
    adminPageTitle: "管理页面",
    confirmOrderDetails: "请确认以下订单详情:",
    proceedWithPaymentButton: "继续支付",
    paymentPageTitle: "支付页面",
    choosePaymentMethod: "选择支付方式:",
    completePaymentButton: "完成支付",
    paymentCompleteTitle: "支付完成",
    paymentCompleteMessage: "感谢您的预订！您的支付已成功处理。",
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
    adminPageTitle: "หน้าผู้ดูแลระบบ",
    confirmOrderDetails: "ยืนยันรายละเอียดคำสั่งซื้อด้านล่าง:",
    proceedWithPaymentButton: "ดำเนินการชำระเงิน",
    paymentPageTitle: "หน้าชำระเงิน",
    choosePaymentMethod: "เลือกวิธีการชำระเงิน:",
    completePaymentButton: "ชำระเงินเสร็จสิ้น",
    paymentCompleteTitle: "การชำระเงินเสร็จสมบูรณ์",
    paymentCompleteMessage: "ขอบคุณสำหรับการจองของคุณ! การชำระเงินของคุณได้รับการดำเนินการเรียบร้อยแล้ว",
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
    adminPageTitle: "Trang quản trị",
    confirmOrderDetails: "Xác nhận chi tiết đơn hàng bên dưới:",
    proceedWithPaymentButton: "Tiến hành thanh toán",
    paymentPageTitle: "Trang thanh toán",
    choosePaymentMethod: "Chọn phương thức thanh toán:",
    completePaymentButton: "Hoàn tất thanh toán",
    paymentCompleteTitle: "Thanh toán hoàn tất",
    paymentCompleteMessage: "Cảm ơn bạn đã đặt xe! Thanh toán của bạn đã được xử lý thành công.",
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
    const langData = translations[language] || translations["en"]; // Fallback to English
  document.getElementById("title").textContent = langData.title || translations["en"].title;
  document.getElementById("pickupDateTimeLabel").textContent =
    langData.pickupDateTimeLabel || translations["en"].pickupDateTimeLabel;
  document.getElementById("startPlaceLabel").textContent =
    langData.startPlaceLabel || translations["en"].startPlaceLabel;
  document.getElementById("customStartPlace").placeholder =
    langData.customStartPlacePlaceholder || translations["en"].customStartPlacePlaceholder;
  document.getElementById("endPlaceLabel").textContent =
    langData.endPlaceLabel || translations["en"].endPlaceLabel;
  document.getElementById("contactInfoLabel").textContent =
    langData.contactInfoLabel || translations["en"].contactInfoLabel;
  document.getElementById("carSelectLabel").textContent =
    langData.carSelectLabel || translations["en"].carSelectLabel;
  document.getElementById("bookNowButton").textContent =
    langData.bookNowButton || translations["en"].bookNowButton;
  // Update process flow steps
  document.getElementById("step1").textContent = langData.step1 || translations["en"].step1;
  document.getElementById("step2").textContent = langData.step2 || translations["en"].step2;
  document.getElementById("step3").textContent = langData.step3 || translations["en"].step3;
  document.getElementById("step4").textContent = langData.step4 || translations["en"].step4;

}
document.getElementById("step1").textContent = translations[language].step1;
document.getElementById("step2").textContent = translations[language].step2;
document.getElementById("step3").textContent = translations[language].step3;
document.getElementById("step4").textContent = translations[language].step4;

// Event listener for the language switcher
document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateLanguage(selectedLanguage);
});

// Set default language to English
document.getElementById("languageSelect").value = "en";

