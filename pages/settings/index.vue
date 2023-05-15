<template>
  <div class="app-content content">
    <b-tabs pills>
      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <user-icon size="1.5x" class="ml-0 ml-sm-50"></user-icon>

          <span class="d-none d-sm-inline">الحساب</span>
        </template>
        <b-card class="py-2">
          <b-row>
            <FormFInput
              label="اسم المستخدم"
              store-key="userName"
              :module-name="moduleName"
              lg="6"
            />
            <FormFInput
              label="اسم الدخول"
              store-key="loginName"
              :module-name="moduleName"
              lg="6"
            />
            <FormFInput
              label="كلمة المرور السابقة"
              store-key="oldPassword"
              :module-name="moduleName"
              type="password"
              lg="4"
            />
            <FormFInput
              label="كلمة المرور الجديدة"
              store-key="newPassword"
              :module-name="moduleName"
              type="password"
              lg="4"
            />
            <FormFInput
              label="تأكيد كلمة المرور"
              store-key="confirmPassword"
              :module-name="moduleName"
              type="password"
              lg="4"
            />
          </b-row>
          <div class="text-left mt-3">
            <b-button @click="saveData" variant="primary">حفظ</b-button>
          </div>
        </b-card>
        <b-card v-if="this.$auth.user.enableTowFact">
          <div class="d-flex justify-content-between align-items-center py-2">
            <h4 class="">Two-Factor Authentication (2FA)!</h4>
            <b-form-checkbox switch v-model="toggleToDisabled">
              {{ toggleToDisabled ? "مفعل" : "غير مفعل" }}
            </b-form-checkbox>
          </div>
          <div
            class="d-flex justify-content-center align-items-center py-2"
          ></div>
          <div class="text-left">
            <b-button
              :disabled="activeLoading2"
              @click="disabled2Fa"
              variant="primary"
              class="btn"
            >
              حفظ
              <b-spinner v-if="activeLoading2" small />
            </b-button>
          </div>
        </b-card>
        <b-card v-else>
          <div class="d-flex justify-content-between align-items-center py-2">
            <h4 class="">Two-Factor Authentication (2FA)!</h4>
            <b-form-checkbox switch v-model="toggle">
              {{ toggle ? "مفعل" : "غير مفعل" }}
            </b-form-checkbox>
          </div>
          <div class="d-flex justify-content-center align-items-center py-2">
            <img class="img-qr" v-if="url" :src="url" alt="qr" />
          </div>
          <div class="text-left">
            <b-button
              :disabled="activeLoading"
              variant="primary"
              class="btn"
              @click="enable2Fa"
            >
              حفظ
              <b-spinner class="ml-1" v-if="activeLoading" small />
            </b-button>
          </div>
        </b-card>
      </b-tab>

      <!-- Tab: Information -->
      <b-tab disabled>
        <template #title>
          <info-icon size="1.5x" class="ml-0 ml-sm-50"></info-icon>
          <span class="d-none d-sm-inline">المعلومات</span>
        </template>
        <!-- <user-edit-tab-information class="mt-2 pt-75" /> -->
      </b-tab>
    </b-tabs>

    <!-- <b-card>
      <b-button @click="click" variant="primary" class="btn">QR</b-button>

      <img v-if="url" :src="url" alt="qr" />

    </b-card> -->
  </div>
</template>

<script>
import { UserIcon, InfoIcon, Share2Icon } from "vue-feather-icons";

export default {
  name: "Setting",
  async asyncData({ store }) {
    const user = store.$auth.user;
    store.dispatch("panel/settings/profile/setData", user);
  },
  components: {
    UserIcon,
    InfoIcon,
    Share2Icon,
  },
  data() {
    return {
      moduleName: "panel/settings/profile",
      toggle: false,
      toggleToDisabled: true,
      url: null,
      key: null,
      activeLoading: false,
      activeLoading2: false,
    };
  },
  methods: {
    saveData() {
      // this.$store.dispatch(`${this.moduleName}/saveData`);
    },
    async getQrCode() {
      const params = {
        userName: this.$auth.user.loginName,
      };
      const { data } = await this.$axios.$get(
        "/api/Profile/generate_two_factor",
        {
          params,
        }
      );
      this.url = data.qrCodeImageUrl;
      this.key = data.key;
    },
    async enable2Fa() {
      this.activeLoading = true;
      const schema = {
        enableTowFact: true,
        key: this.key,
      };

      const { data } = await this.$axios.$put(
        "/api/Profile/edit_tow_fact",
        schema
      );
      if (data.enableTowFact) {
        await this.$auth.fetchUser();
        this.$toast.success("تم التفعيل بنجاح");
        this.toggleToDisabled = true;
        this.activeLoading = false;
      }
      // console.warn("data", data);
    },
    async disabled2Fa() {
      this.activeLoading2 = true;
      const schema = {
        enableTowFact: false,
        key: null,
      };

      const { data } = await this.$axios.$put(
        "/api/Profile/edit_tow_fact",
        schema
      );
      await this.$auth.fetchUser();
      this.$toast.success("تم إلغاء التفعيل بنجاح");
      this.toggle = false;
      this.activeLoading2 = false;
    },
  },
  watch: {
    toggle(newValue, oldValue) {
      if (newValue) {
        // console.warn("newValue", newValue);
        this.getQrCode();
      } else {
        this.url = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img-qr {
  width: 171px;
  height: 171px;
}
</style>
