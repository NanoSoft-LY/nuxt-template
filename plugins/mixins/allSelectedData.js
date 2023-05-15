import Vue from "vue";

const mixins = {
  data() {
    return {
      paymentMethodVSD: [
        // طريقة الدفع الاعتماد ************************xxxxxxxxxxxxxxxx
        { id: 1, title: "نقدى" },
        { id: 2, title: "صك" },
        { id: 3, title: "حوالة مصرفية" },
      ],
      paymentMethodPlusVSD: [
        // طريقة الدفع الاعتماد ************************
        { id: 4, title: "رسالة إفراج" },
        { id: 5, title: "رسالة اعتماد" },
      ],
      paymentMethodNoDefaultVSD: [
        // طريقة الدفع الاعتماد ******************************
        { id: 1, name: "نقدى" },
        { id: 2, name: "صك" },
        { id: 3, name: "حوالة مصرفية" },
        { id: 4, name: "رسالة إفراج" },
        { id: 5, name: "رسالة فتح اعتماد" },
      ],
      documentStatusVSD: [
        // حالة المستند ********************************** xxxxxxxxxxxxxxxxxxxxx
        { id: 1, title: "مفتوح " },
        { id: 2, title: "مقفل" },
        { id: 3, title: "ملغى" },
      ],
      // exchangePermitStatusVSD  سابقا
      releaseOrdersVSD: [
        // حالة إذن الصرف ********************* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        { id: 1, name: "قيد الإعداد " },
        { id: 2, name: "بإنتظار الصرف" },
        { id: 3, name: "مصروف" },
      ],
      releaseOrdersTypeVSD: [
        // نوع إذن الصرف بدون إعتماد ******************************xxxxxxxxxxxxxxxxxxxxxxxxxxxx
        { id: 0, name: "عام" },
        { id: 1, name: "مستخلص" },
        { id: 2, name: "سلفة" },
        { id: 3, name: "مرتبات" },
        { id: 6, name: "صك بديل" },
      ],
      releaseOrdersTypePlusVSD: [
        // نوع إذن الصرف مع إعتماد
        { id: 4, name: "إعتماد" },
        { id: 5, name: "مستخلص إعتماد" },
      ],
      transactionVSD: [
        //   الصك الملغى xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        { id: 0, name: 118 },
        { id: 1, name: 117 },
      ],
      confirmVSD: [
        //     إعتماد **************************
      ],
      confirmAccountVSD: [
        // حساب اعتماد **************************
      ],
      // categoryVSD: [
      //   // التصنيف
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "الإعتمادات" },
      //   { id: "2", title: "الميزانية" },
      //   { id: "3", title: "المرتبات" },
      //   { id: "4", title: "التشغيلية" },
      // ],
      typeOfAccreditationVSD: [
        // نوع الإعتماد **************************
        { id: 1, name: "فتح" },
        { id: 2, name: "تعزيز" },
        { id: 3, name: "تعلية" },
      ],
      typeOfAccreditationTwoVSD: [
        // نوع الإعتماد ****************************
        { id: 1, name: "دفع" },
        { id: 2, name: "توريد" },
      ],
      // costCenterVSD: [
      //   // مركز التكلفة
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "غير محدد" },
      // ],
      // costCenterTwoVSD: [
      //   // مركز التكلفة
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "مركز التكلفة المنطقة الغربية" },
      // ],
      // costCenterThirdVSD: [
      //     // مركز التكلفة
      //     { id: "0", title: "مركز التكلفة المنطقة الغربية" },
      // ],
      // creditorAccountVSD: [
      //   // حساب الدائن
      //   { id: 1, name: "0601 - حساب الباب الأول" },
      //   { id: 2, name: "0602 - حساب الباب الثانى" },
      //   { id: 3, name: "0603 - مصرف ليبيا المركزى - الفرع الرئيسى" },
      // ],
      // bankVSD: [
      //   // المصرف
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "0601 - حساب الباب الأول" },
      //   { id: "2", title: "0602 - حساب الباب الثانى" },
      //   { id: "3", title: "0603 - مصرف ليبيا المركزى - الفرع الرئيسى" },
      // ],
      debitAccountVSD: [
        // حساب المدين
        { id: "0", title: "غير محدد" },
        { id: "1", title: "المرتبات الأساسية", account_Number: "0101" },
        { id: "2", title: "علاوة العائلة", account_Number: "0102" },
      ],
      // debitAccountTwoVSD: [
      //   // حساب المدين
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "غير محدد" },
      // ],
      addStampVSD: [
        // إضافة دمغة مخالصة ************************ xxxxxxxxxxxxxxxxxxxx
        { id: 1, title: "إضافة دمغة مخالصة" },
        { id: 2, title: "التأمين النهائى" },
        { id: 3, title: "ضمان أعمال" },
        { id: 4, title: "دفعة مقدمة" },
      ],
      treasuryVSD: [
        // الخزينة ********************************
      ],
      // doorVSD: [
      //   // الباب
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "غير محدد" },
      //   { id: "2", title: "غير محدد" },
      //   { id: "3", title: "غير محدد" },
      // ],
      // doorTwoVSD: [
      //     // الباب
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "01 - الباب الأول - المرتبات والمهايا" },
      //     { id: "2", title: "02 - الباب الثانى - المصروفات التشغيليةوالتسييرية" },
      //     { id: "3", title: "03 - الباب الثالث - التحول" },
      //     { id: "4", title: "04 - خارج الميزانية" },
      //     { id: "5", title: "05 - الإيراد العام" },
      //     { id: "6", title: "06 - المصارف" },
      //     { id: "7", title: "07 - حساب الطوارئ" },
      //     { id: "8", title: "08 - الإعتماد" },
      // ],
      extractVSD: [
        // المستخلص
        // { id: "0", title: "غير محدد" },
        // { id: "1", title: "غير محدد" },
      ],
      advanceVSD: [
        // السلفة
        // { id: "0", title: "غير محدد" },
        // { id: "1", title: "غير محدد" },
      ],
      salariesVSD: [
        // المرتبات xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      theConditionVSD: [
        // الحالة
        { id: 1, title: "مفعل" },
        { id: 2, title: "غير مفعل" },
      ],
      conditionVSD: [
        // الحالة
        { id: "0", title: "تم تسويته" },
        { id: "1", title: "غير مسجل" },
      ],
      // subordinateToVSD: [
      //     // تابع ل
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "غير محدد" },
      // ],
      // categoryTwoVSD: [
      //     // التصنيف
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "الإيرادات السيادية" },
      //     { id: "2", title: "المصروفات العمومية" },
      //     { id: "3", title: "الميزانية التسييرية" },
      //     { id: "4", title: "خارج الميزانية" },
      //     { id: "5", title: "ميزانية التحول" },
      // ],
      // defaultCreditAccountVSD: [
      //     // الحساب الدائن الإفتراضى
      //     { id: 1, name: "0601 - حساب الباب الأول" },
      //     { id: 2, name: "0602 - حساب الباب الثانى" },
      //     { id: 3, name: "0603 - مصرف ليبيا المركزى - الفرع الرئيسى" },
      // ],
      // contractVSD: [
      //     // العقد
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "غير محدد" },
      // ],
      // employeeVSD: [
      //     // الموظف
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "غير محدد" },
      // ],
      banksVSD: [
        // المصارف
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      bankBranchVSD: [
        // فروع المصرف
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      typesOfLettersOfGuaranteeVSD: [
        // أنواع خطابات الضمان
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      sukukPortfolioVSD: [
        // حافظة بالصكوك ****************************
        { id: 0, name: "حافظة بالصكوك المسحوبة على المصرف" },
        { id: 1, name: "دفتر سجل المصرف" },
      ],
      bankOfDepositorVSD: [
        // مصرف الجهة المودعة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      bankBranchesOfDepositorVSD: [
        // فرع مصرف الجهة المودعة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      revenueAccountVSD: [
        // حساب الإيراد
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      typeVSD: [
        // النوع *************************** xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        { id: 1, name: "إيراد" },
        { id: 2, name: "صرف" },
      ],
      // typeTwoVSD: [
      //   // النوع
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "إيراد" },
      //   { id: "2", title: "صرف" },
      // ],
      actToVSD: [
        // تصرف إلى
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      depositorVSD: [
        // الجهة المودعة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      entryStateVSD: [
        // مرحل أو غير مرحل *************************************
        { id: 0, name: "غير مرحل" },
        { id: 1, name: "مرحل" },
        { id: 2, name: "ملغى" },
      ],
      rankResultsVSD: [
        // ترتيب النتائج ***********************************************
        { id: 0, name: "التاريخ" },
        { id: 1, name: "الرقم" },
      ],
      rankResultsTwoVSD: [
        // ترتيب النتائج
        { id: 0, title: "الأحدث" },
        { id: 1, title: "الأقدم" },
      ],
      arrangementTypeVSD: [
        // نوع الترتيب أو ترتيب النتائج *****************************
        { id: 0, name: "تصاعدى" },
        { id: 1, name: "تنازلى" },
      ],
      theNatureOfTheAccountVSD: [
        // نوع الترتيب ***************************
        { id: 0, name: "غير معروف" },
        { id: 1, name: "مدين" },
        { id: 2, name: "دائن" },
      ],
      accountVSD: [
        // الحساب
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      authorizationYearVSD: [
        // سنة التفويض ****************************************
        { id: 1, name: "2012" },
        { id: 2, name: "2013" },
        { id: 3, name: "2014" },
        { id: 4, name: "2015" },
        { id: 5, name: "2016" },
        { id: 6, name: "2017" },
        { id: 7, name: "2018" },
        { id: 8, name: "2019" },
        { id: 9, name: "2020" },
        { id: 10, name: "2021" },
        { id: 11, name: "2022" },
        { id: 12, name: "2023" },
        { id: 13, name: "2024" },
        { id: 14, name: "2025" },
        { id: 15, name: "2026" },
        { id: 16, name: "2027" },
        { id: 17, name: "2028" },
        { id: 18, name: "2039" },
        { id: 19, name: "2033" },
        { id: 20, name: "2031" },
      ],
      delegatedDoorVSD: [
        // الباب المفوض له
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      // hawalaAccountVSD: [
      //     // حساب الحوالة (الدائن)
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "غير محدد" },
      // ],
      reportsTwoVSD: [
        // التقارير
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      reportsTypesVSD: [
        // نوع التقارير
        { id: "0", title: "المصروفات الفعلية" },
        { id: "1", title: "الإيرادات الفعلية" },
      ],
      reportsVSD: [
        // التقارير ************************************** xxxxxxxxxxxxxxxxxxxxxxx
        { id: 0, name: "مذكرة التسوية" },
        { id: 1, name: "جدول 3 أ" },
        { id: 2, name: "كشف بالصكوك المعلقة" },
      ],
      classificationTypeVSD: [
        // نوع التصنيف ********************************
        { id: 1, title: "حسابات دائمة" },
        { id: 0, title: "حسابات مؤقتة" },
      ],
      accountingBankVSD: [
        // المصرف
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      groupVSD: [
        // المجموعة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      // userVSD: [
      //     // المستخدم
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "غير محدد" },
      // ],
      currencyTypeVSD: [
        // المستخدم ***************
        { id: 0, name: "غير محدد" },
        { id: 1, name: "دولار" },
        { id: 2, name: "يورو" },
      ],
      underProcedureVSD: [
        // المستخدم ***************
        { id: 0, name: "تحت الاجراء" },
        { id: 1, name: "مستمر" },
        { id: 2, name: "مكتمل" },
      ],
      operationTypeVSD: [
        // نوع العملية ***************
        { id: "Create", title: "إضافة" },
        { id: "Update", title: "تعديل" },
        { id: "Delete", title: "حذف" },
        { id: "Confirm", title: "اعتماد" },
        { id: "Unconfirm", title: "إلغاء الاعتماد" },
        { id: "Close", title: "إغلاق" },
        { id: "Reopen", title: "فتح" },
        { id: "Other ", title: "أخرى" },
      ],
      stateVSD: [
        // نوع العملية *************************
        { id: 0, name: "تم تسويته" },
        { id: 1, name: "غير مسجل" },
        { id: 2, name: "صك ملغى" },
      ],
      // interfaceVSD: [
      //     // الواجهة
      //     { id: "0", title: "غير محدد" },
      //     { id: "1", title: "غير محدد" },
      // ],
      // contractNameVSD: [
      //   // اسم العقد
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "غير محدد" },
      // ],
      capTypeVSD: [
        // نوع الغطاء ****************************
        { id: 1, name: "كامل" },
        { id: 2, name: "جزئى" },
      ],
      canBeCancelledVSD: [
        // قابل للإلغاء ************************
        { id: 1, name: "قابل للإلغاء" },
        { id: 2, name: "غير قابل للإلغاء" },
      ],
      natureOfAccreditationVSD: [
        // طبيعة الإعتماد ****************************
        { id: 1, name: "محلى" },
        { id: 2, name: "خارجى" },
      ],
      sortByVSD: [
        // ترتيب حسب *************************
        { id: 1, name: "رقم الإعتماد المستندى" },
        { id: 2, name: "تاريخ فتح الإعتماد" },
        { id: 3, name: "اسم العقد" },
      ],
      sortByTwoVSD: [
        // ترتيب حسب
        { id: "0", title: "الرقم التسلسلى" },
        { id: "1", title: "التاريخ" },
      ],
      accreditationStatusVSD: [
        // حالةالإعتماد ******************************
        { id: 0, name: "غير معروف" },
        { id: 1, name: "معتمد" },
        { id: 2, name: "غير معتمد" },
      ],
      // contractNameVSD: [
      //   // اسم العقد
      //   { id: "0", title: "غير محدد" },
      //   { id: "1", title: "غير محدد" },
      // ],
      transferredFromVSD: [
        // منقول من
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      typeOfLetterOfGuaranteeVSD: [
        // نوع خطاب الضمان
        { id: "0", title: "غير محدد" },
        { id: "1", title: "دفعة مقدمة" },
        { id: "2", title: "تأمين نهائى" },
        { id: "3", title: "ضمان حسن التنفيذ" },
        { id: "4", title: "تأمين نهائى (أوامر تعديلية)" },
        { id: "5", title: "تأمين إبتدائى" },
      ],

      //----------------------*****----------------------
      defaultLanguageVSD: [
        // اللغة الإفتراضية
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      bankAccountVSD: [
        // حساب المصارف
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      salaryCalculationVSD: [
        // حساب المرتبات
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      lockersAccountVSD: [
        // حساب الخزائن
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      covenantAccountVSD: [
        // حساب العهد
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      expenseAccountVSD: [
        // حساب المصروفات
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      appropriationAccountVSD: [
        // حساب الإعتمادات
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      contractAccountVSD: [
        // حساب العقود
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      revenueAccountVSD: [
        // حساب الإيرادات
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      clearanceStampAccountVSD: [
        // حساب دمغة المخالصة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      profitLossAccountVSD: [
        // حساب الأرباح والخسائر
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      finalInsuranceVSD: [
        // التأمين النهائى
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      businessAssuranceVSD: [
        // ضمان أعمال
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      advancePaymentVSD: [
        // دفعة مقدمة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      legalAlimonyAccountVSD: [
        // حساب النفقة الشرعية
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
      enterpriseRatingVSD: [
        // تصنيف المؤسسة
        { id: "0", title: "غير محدد" },
        { id: "1", title: "غير محدد" },
      ],
    };
  },
  computed: {},

  methods: {},
};

Vue.mixin(mixins);
