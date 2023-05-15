<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mt-1 date-picker">
    <label :class="required ? 'required' : ''">{{ title }}</label>
    <!-- <date-picker
      v-model="getContent"
      locale="en"
      placeholder="YYYY-MM-DD"
      :locale-config="localeConfigs"
      :column="1"
      mode="single"
      clearable
    >
    </date-picker> -->
    <b-form-input
      style="height: 35px"
      v-model="getContent"
      type="date"
      class="flex-row-reverse text-end"
    />
  </b-col>
</template>

<script>
export default {
  name: "date",
  props: {
    title: String,
    module: String,
    storeKey: String,
    required: {
      type: Boolean,
      default: false,
    },
    moment: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: String,
      default: "3",
    },
    md: {
      type: String,
      default: "6",
    },
    sm: {
      type: String,
      default: "12",
    },
  },
  data() {
    return {
      date: null,
      localeConfigs: {
        en: {
          dir: {
            input: "rtl",
          },
          inputFormat: "YYYY-MM-DD",
        },
      },
    };
  },
  computed: {
    getContent: {
      get: function () {
        let data = null;
        if (this.moment) {
          data = this.$moment(
            this.$store.getters[`${this.module}/${this.storeKey}`]
          ).format("YYYY-MM-DD");
        } else {
          data = this.$store.getters[`${this.module}/${this.storeKey}`];
        }
        return data;
      },
      set(val) {
        this.$store.commit(`${this.module}/${this.storeKey}`, {
          key: this.storeKey,
          value: val,
        });
      },
    },
  },
};
</script>

  <style lang="scss" scoped>
.required {
  position: relative;
  &::after {
    position: absolute;
    content: "*";
    font-size: 25px;
    bottom: -6px;
    left: -10px;
    color: #ea5455;
  }
}
</style>
