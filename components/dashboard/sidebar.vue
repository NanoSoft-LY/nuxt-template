<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow menu-light"
    :class="{
      expanded: makeLayoutCollapsed || true,
      expanded: hover,
    }"
    @mouseenter="hoverSidebar"
    @mouseleave="hoverSidebar"
  >
    <div class="navbar-header expanded">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <nuxt-link to="/" class="navbar-brand router-link-active">
            <span class="brand-logo">
              <img :src="logo" alt="logo" />
            </span>
            <h2 class="brand-text logo-name">{{ appTitle }}</h2>
          </nuxt-link>
        </li>
        <li class="nav-item nav-toggle">
          <nuxt-link
            @click.native="hideSidebar"
            to=""
            class="nav-link modern-nav-toggle"
          >
            <x-icon
              v-if="width <= 1200"
              size="1.5x"
              class="custom-class"
            ></x-icon>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div
      class="ps-container mt-1 main-menu-content scroll-area ps ps--active-y"
    >
      <ul class="navigation navigation-main">
        <MainSidebarLink name="لوحة التحكم" route="" icon="fa-house" />
        <MainSidebarGroupLink
          page="الإعدادات الرئيسية"
          :child="mainSettingsChild"
          icon="fa-gears"
        />
        <MainSidebarGroupLink
          page="تعريفات محاسبية"
          :child="accountingDefinitionsChild"
          icon="fa-receipt"
        />
        <MainSidebarGroupLink
          page="إدارة التفويضات"
          :child="authorizationsManagementChild"
          icon="fa-bars-progress"
        />
        <MainSidebarGroupLink
          page="العمليات"
          :child="processesChild"
          icon="fa-chalkboard-user"
        />
        <MainSidebarGroupLink
          page="التسوية والكشوفات المصرفية"
          :child="levelingChild"
          icon="fa-building-columns"
        />
        <MainSidebarGroupLink
          page="خطابات الضمان"
          :child="lettersOfGuaranteeChild"
          icon="fa-envelope-open-text"
        />
        <MainSidebarLink
          name="الإعتمادات"
          route="accreditations"
          icon="fa-credit-card"
        />
        <MainSidebarGroupLink
          page="التقارير"
          :child="reportsChild"
          icon="fa-print"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import {
  DiscIcon,
  CircleIcon,
  MoreHorizontalIcon,
  HomeIcon,
  MailIcon,
  XIcon,
} from "vue-feather-icons";

export default {
  props: ["width"],
  data() {
    return {
      hover: false,
      data: [
        {
          id: "edb39b3d-1905-4d30-d1af-08daa9ec1e2e",
          transactionId: "1f56d7a1-7001-4785-00e4-08da4ad52abd",
          wrongCheckId: null,
          number: "112",
          beneficiary: "تست 2",
          date: "2022-06-09T00:00:00",
          value: 189000,
          creditorAccount: "4e05bb10-ae85-4f59-63e4-08d9c5f6d4a6",
          creditor: 189000,
          debtor: 0,
          debtorAccount: "a2a98334-a94d-430d-d57f-08da36653471",
          recordedAt: "2022-07-20T00:00:00",
          serialNumber: 4,
          state: 1,
          method: 2,
          methodString: "صك",
        },
        {
          id: "8a72c36a-ace4-420a-d1b0-08daa9ec1e2e",
          transactionId: "33f2eb41-3421-4976-74ad-08da5b56ccb7",
          wrongCheckId: null,
          number: "578",
          beneficiary: "علي الهربادي",
          date: "2022-07-01T00:00:00",
          value: 1000,
          creditorAccount: "4e05bb10-ae85-4f59-63e4-08d9c5f6d4a6",
          creditor: 1000,
          debtor: 0,
          debtorAccount: "3588ee86-fded-47b6-639f-08d9c5f6d4a6",
          recordedAt: null,
          serialNumber: 12,
          state: 0,
          method: 2,
          methodString: "صك",
        },
      ],
      mainSettingsChild: [
        {
          name: "الصلاحيات",
          route: "main-settings/permissions",
        },
        {
          name: "المستخدمين",
          route: "main-settings/users",
        },
        {
          name: "أنشطة المستخدمين",
          route: "main-settings/activities",
        },
        {
          name: "إعدادات النظام",
          route: "main-settings/system-configuration",
        },
      ],
      processesChild: [
        {
          name: "أذونات الصرف",
          route: "processes/payment--voucher",
        },
        {
          name: "أذونات الصرف التحول",
          route: "processes/shift-payment-voucher",
        },
        {
          name: "أذونات صرف صك بديل",
          route: "processes/instrument-payment-voucher",
        },
        {
          name: "أذونات صرف مرتبات",
          route: "processes/salaries-payment-voucher",
        },
        {
          name: "أذونات الصرف إعتمادات",
          route: "processes/credit-payment-voucher",
        },
        {
          name: "الحركات المالية",
          route: "processes/transactions",
        },
        {
          name: "القيود",
          route: "processes/entries",
        },
      ],
      accountingDefinitionsChild: [
        {
          name: "السنوات المالية",
          route: "accounting/fiscal-years",
        },
        {
          name: "المستويات المحاسبية",
          route: "accounting/accounting-levels",
        },
        {
          name: "تصنيف الحسابات",
          route: "accounting/account-categories",
        },
        {
          name: "التصنيفات",
          route: "accounting/classifications",
        },
        {
          name: "الدليل المحاسبى",
          route: "accounting/accounts",
        },
        {
          name: "مراكز التكلفة",
          route: "accounting/cost-centers",
        },
        {
          name: "المصارف",
          route: "accounting/banks",
        },
        {
          name: "فروع المصارف",
          route: "accounting/bank-branches",
        },
      ],
      authorizationsManagementChild: [
        { name: "التفويضات", route: "authorization-management/authorizations" },
        { name: "المناقلات", route: "authorization-management/carriers" },
      ],
      levelingChild: [
        { name: "التسوية المصرفية", route: "leveling/bank-reconciliation" },
        {
          name: "إدارة الصكوك",
          route: "leveling/checks-manage",
        },
      ],
      lettersOfGuaranteeChild: [
        { name: "خطابات الضمان", route: "letters/letters-of-guarantee" },
        {
          name: "أنواع خطابات الضمان",
          route: "letters/types-of-letters-of-guarantee",
        },
      ],
      reportsChild: [
        { name: "ميزان المراجعة", route: "reports/balance-sheet" },
        {
          name: "دفتر الإستاذ",
          route: "reports/ledger",
        },
        {
          name: "كشف حركة الحساب",
          route: "reports/account-statement",
        },
        {
          name: "الكشف الختامى",
          route: "reports/final-reveal",
        },
        {
          name: "المصروفات والإيرادات الفعلية",
          route: "reports/actual-expenses-and-revenues",
        },
        {
          name: "الحركة المالية",
          route: "reports/financial-movement",
        },
        {
          name: "دفتر الصندوق",
          route: "reports/cash-book",
        },
        {
          name: "قسيمة تبويب المصروفات والإيرادات",
          route: "reports/expenses-and-income-tab-voucher",
        },
        {
          name: "حركة البنود",
          route: "reports/movement-of-items",
        },
      ],
      isOpen: false,
    };
  },
  components: {
    DiscIcon,
    CircleIcon,
    MoreHorizontalIcon,
    HomeIcon,
    MailIcon,
    XIcon,
  },
  computed: {
    appTitle() {
      return process.env.APP_TITLE;
    },
    logo() {
      return `/${process.env.LOGO}.png`;
    },
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch("hideSidebar");
    },
    hoverSidebar() {
      if (this.width > 1200) {
        this.hover = this.hover ? false : true;
      }
    },
  },

  watch: {},
};
</script>

<style lang="scss">
@import "/@core/scss/base/core/menu/menu-types/vertical-menu.scss";

.menu-hide .main-menu {
  width: 0 !important;
}
.menu-hide.menu-open .main-menu {
  width: 260px !important;
}

.logo-name {
  font-size: 18px !important;
}
</style>
