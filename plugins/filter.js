import Vue from "vue";

// حالة إذن الصرف
Vue.filter("releaseOrderStateFilter", function (value) {
  switch (value) {
    case 2:
      value = "بإنتظار الصرف";
      break;
    case 3:
      value = "مصروف";
      break;

    default:
      value = "قيد الإعداد";
      break;
  }

  return value;
});

// حالة المستند
Vue.filter("documentStateFilter", function (value) {
  switch (value) {
    case 2:
      value = "مغلق";
      break;
    case 3:
      value = "ملغى";
      break;
    default:
      value = "مفتوح";
      break;
  }
  return value;
});

// طريقة الدفع
Vue.filter("paymentMethodFilter", function (value) {
  switch (value) {
    case 2:
      value = "صك";
      break;
    case 3:
      value = "حوالة مصرفية";
      break;
    default:
      value = "نقدى";
      break;
  }
  return value;
});
