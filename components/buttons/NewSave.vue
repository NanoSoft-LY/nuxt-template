<template>
  <b-row>
    <ButtonsButton
      :disabled="disabeldNew"
      :width="width"
      :sm="sm"
      :md="md"
      :lg="lg"
      @click.native="$emit('resetData')"
    />
    <ButtonsButton
      :disabled="disabeldSave"
      :width="width"
      :sm="sm"
      :md="md"
      :lg="lg"
      label="حفظ"
      color="success"
      @click.native="$emit('saveData')"
    />
    <ButtonsBack v-if="back" />
  </b-row>
</template>

<script>
export default {
  props: {
    disabeldNew: {
      type: Boolean,
      default: false,
    },
    disabeldSave: {
      type: Boolean,
      default: false,
    },
    back: {
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
};
</script>

<style lang="scss" scoped>
</style>