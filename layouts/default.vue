<template>
  <div class="pb-1">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
      rel="stylesheet"
    />
    <div
      v-show="loading"
      class="vertical-layout h-100 vertical-menu-modern navbar-static footer-static"
      :class="{
        'menu-expanded': makeLayoutCollapsed,
        'menu-collapsed': !makeLayoutCollapsed,
        'menu-hide': window.width <= 1200,
        'menu-open': toggleSidebar,
      }"
    >
      <DashboardNavbar :width="window.width" />
      <DashboardSidebar :width="window.width" />
      <div class="sidenav-overlay"></div>
      <Nuxt />
      <!-- <DashboardFooter /> -->
    </div>
    <div v-show="!loading" class="flower-spinner">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { FlowerSpinner } from "epic-spinners";
export default {
  // transition: "home",
  name: "default",
  middleware: ["mode", "lang", "authentication"],
  async beforeMount() {
    // Banks
    const banks_url = "/api/accounts/get_account_by_paymentmethod?method=2";
    const { data } = await this.$axios.$get(banks_url);
    this.$store.dispatch("global/getBanksDataFromApi", data);

    // Doors
    const doors_url =
      "/api/accounts/get_account_by_paymentmethod?accountType=3";
    const doors = await this.$axios.$get(doors_url);
    this.$store.dispatch("global/getDoorsDataFromApi", doors.data);

    // ddd
    const url = "/api/release-orders/new";
    const res = await this.$axios.$get(url);
    this.$store.commit("global/setGlobalLists", {
      key: "accounts",
      value: res.data.accounts,
    });
    this.$store.commit("global/setGlobalLists", {
      key: "classifictions",
      value: res.data.classifictions,
    });
    this.$store.commit("global/setGlobalLists", {
      key: "costCenters",
      value: res.data.costCenters,
    });
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu-open")) {
        this.$store.dispatch("hideSidebar");
      }
    });

    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    setTimeout(() => {
      this.loading = true;
    }, 2000);
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      loading: false,
    };
  },
  computed: {},
  components: {
    // FlowerSpinner,
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss">
@import "/assets/scss/spinner";
@import "/@core/scss/base/core/menu/menu-types/vertical-menu.scss";

.menu-collapsed .has-sub.open .menu-content .active {
  box-shadow: none;
  a {
    background: #fff !important;
  }
}

.dark-layout
  .menu-collapsed
  .main-menu:not(.expanded)
  .navigation-main
  li.active
  > a {
  background: #283046 !important;
}

.menu-collapsed .expanded .has-sub.open .menu-content .active {
  box-shadow: 0 0 10px 1px rgb(115 103 240 / 70%);
  background: linear-gradient(
    118deg,
    #54a0ff,
    rgba(84, 160, 255, 0.7)
  ) !important;
  a {
    background: unset !important;
  }
}
.invalid {
  input {
    border-color: #f00;
  }
  .err-msg {
    color: #f00;
  }
}
.tabs {
  color: #283046 !important;
  .nav-tabs {
    padding-right: 0 !important;
  }
}
</style>
