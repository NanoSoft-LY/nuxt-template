<template>
  <div
    class="navbar header-navbar navbar navbar-shadow align-items-center navbar-light navbar-expand navbar-static-top"
  >
    <div class="navbar-container d-flex content align-items-center">
      <nuxt-link
        @click.native="toggleLayoutCollapsed"
        to=""
        class="nav-link modern-nav-toggle"
      >
        <align-justify-icon
          size="1.5x"
          class="custom-class"
        ></align-justify-icon>
      </nuxt-link>

      <ul class="navbar-nav nav align-items-center ml-auto">
        <!-- <li
          id="dropdown-grouped"
          class="nav-item b-nav-dropdown dropdown dropdown-language"
          variant="link"
        >
          <b-nav-item-dropdown
            id="dropdown-grouped"
            variant="link"
            class="dropdown-language"
            right
          >
            <template #button-content>
              <b-img
                :src="
                  require(`/assets/images/flags/${currentLang || lang}.png`)
                "
                height="14px"
                width="22px"
                alt="English"
              />
              <span class="ml-50 text-body">{{
                currentLang || lang | languageName
              }}</span>
            </template>
            <b-dropdown-item
              v-for="locale in availableLocales"
              :key="locale.code"
            >
              <b-img
                :src="require(`/assets/images/flags/${locale.code}.png`)"
                height="14px"
                width="22px"
                alt=""
              />
              <nuxt-link
                class="lang-name"
                to=""
                @click.native="
                  switchLang(locale.code), $i18n.setLocale(locale.code)
                "
                >{{ locale.code | languageName }}</nuxt-link
              >
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </li> -->
        <!-- <li class="nav-item">
          <nuxt-link to="" class="nav-link">
            <img class="two-fa" src="@/assets/images/2fa.svg" alt="" />
          </nuxt-link>
        </li> -->
        <li class="nav-item">
          <nuxt-link to="" class="nav-link">
            <moon-icon
              @click="toggleMode('dark')"
              v-if="dashboardMode"
              size="1.5x"
              class="custom-class"
            ></moon-icon>
            <sun-icon
              @click="toggleMode('light')"
              v-else
              size="1.5x"
              class="custom-class"
            ></sun-icon>
          </nuxt-link>
        </li>
        <li class="nav-item b-nav-dropdown dropdown dropdown-user">
          <b-nav-item-dropdown
            right
            toggle-class="d-flex align-items-center dropdown-user-link"
            class="dropdown-user"
          >
            <template #button-content>
              <div class="d-sm-flex d-none user-nav">
                <p class="user-name font-weight-bolder mb-0">
                  {{ $auth.user.loginName }}
                </p>
                <span class="user-status"> {{ $auth.user.name }}</span>
              </div>
              <b-avatar
                size="40"
                :src="logo"
                variant="light-primary"
                badge
                class="badge-minimal"
                badge-variant="success"
              >
                <!-- <user-icon size="1.5x" class="custom-class"></user-icon> -->
              </b-avatar>
            </template>

            <b-dropdown-item
              to="/settings"
              link-class="d-flex align-items-center"
            >
              <user-icon size="1.5x" class="custom-class mr-50"></user-icon>
              <span>الحساب الشخصى</span>
            </b-dropdown-item>

            <b-dropdown-divider />

            <!-- <b-dropdown-item
              :to="{ name: 'two-factor-authentication' }"
              link-class="d-flex align-items-center"
            >
              <lock-icon size="1.5x" class="custom-class mr-50"></lock-icon>
              <span>2FA</span>
            </b-dropdown-item> -->

            <!-- <b-modal id="modal-2fa" title="2FA" hide-footer>
              <div
                class="d-flex justify-content-between align-items-center py-2"
              >
                <h4 class="">Two-Factor Authentication (2FA)!</h4>
                <b-form-checkbox switch v-model="toggle">
                  {{ toggle ? "مفعل" : "غير مفعل" }}
                </b-form-checkbox>
              </div>
            </b-modal> -->
            <!--
            <b-dropdown-item
              to="/settings"
              link-class="d-flex align-items-center"
            >
              <settings-icon
                size="1.5x"
                class="custom-class mr-50"
              ></settings-icon>
              <span>الإعدادات</span>
            </b-dropdown-item> -->
            <b-dropdown-item
              link-class="d-flex align-items-center"
              @click="$auth.logout()"
            >
              <log-out-icon
                size="1.5x"
                class="custom-class mr-50"
              ></log-out-icon>
              <span>تسجيل الخروج</span>
            </b-dropdown-item></b-nav-item-dropdown
          >
        </li>
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
  MoonIcon,
  SunIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  LockIcon,
  AlignJustifyIcon,
} from "vue-feather-icons";
export default {
  props: ["width"],
  data() {
    return {
      currentLang: "",
      toggle: true,
    };
  },
  methods: {
    test() {
      this.$bvModal.show("modal-2fa");
    },
    toggleLayoutCollapsed() {
      this.$store.dispatch("toggleLayoutCollapsed", this.width);
    },
    toggleMode(mode) {
      this.$store.dispatch("layoutMode", mode);
      this.$cookies.set("dashboard-mode", mode);
      if (mode == "dark") {
        document.body.classList.remove("light-layout");
        document.body.classList.add("dark-layout");
      } else {
        document.body.classList.remove("dark-layout");
        document.body.classList.add("light-layout");
      }
    },
    switchLang(lang) {
      this.currentLang = lang;
      this.$store.dispatch("changeDashDir", lang);
      if (lang == "ar") {
        document.documentElement.classList.add("arabic-dir");
      } else {
        document.documentElement.classList.remove("arabic-dir");
      }
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    lang() {
      return (this.currentLang = this.$cookies.get("i18n_redirected"));
    },
    logo() {
      return `/${process.env.LOGO}.png`;
    },
  },
  filters: {
    languageName(value) {
      switch (value) {
        case "ar":
          return (value = "Arabic");
          break;
        case "en":
          return (value = "English");
          break;
        default:
          break;
      }
    },
  },
  components: {
    DiscIcon,
    CircleIcon,
    MoreHorizontalIcon,
    HomeIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
    SettingsIcon,
    LogOutIcon,
    LockIcon,
    AlignJustifyIcon,
  },
};
</script>

<style lang="scss" scoped>
.two-fa {
  width: 21px;
  height: 21px;
}

.custom-class {
  color: #6e6b7b;
}

.lang-name {
  margin-left: 5px;
  color: #6e6b7b;
}
@media (max-width: 1199.98px) {
  .vertical-layout.vertical-menu-modern.menu-collapsed
    .header-navbar.floating-nav {
    width: calc(100vw - (100vw - 100%) - calc(2rem * 2)) !important;
  }
}
</style>
