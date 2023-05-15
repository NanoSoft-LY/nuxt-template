<template>
  <b-col :sm="sm" :md="md" :lg="lg" class="text-center mt-1">
    <b-button
      v-if="path"
      class="mx-2 my-button"
      :class="width"
      :variant="color"
      :disabled="disabled"
      @click="$emit('clickBtn')"
    >
      <nuxt-link :to="`${$route.path}/new` | route"> {{ label }} </nuxt-link>
    </b-button>
    <b-button
      v-else
      class="mx-2 my-button"
      :class="width"
      :variant="color"
      :disabled="disabled"
      @click="$emit('clickBtn')"
    >
      {{ label }}
    </b-button>
  </b-col>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "جديد",
    },
    color: {
      type: String,
      default: "primary",
    },
    path: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    prevent: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "w-50",
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
  filters: {
    route: function (value) {
      function modifyString(str) {
        if (str.includes("//")) {
          return str.replace("//", "/");
        } else {
          return str;
        }
      }

      // console.warn("route", modifyString(value));
      return modifyString(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-button {
  height: 38px;
  padding: 0;
  a {
    color: unset;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 2.5;
  }
  @media (max-width: 400px) {
    margin-inline: 0 !important;
  }
}
</style>
