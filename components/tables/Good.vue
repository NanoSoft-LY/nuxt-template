<template>
  <b-card-code title="Basic Table">
    <!-- table -->
    <vue-good-table
      ref="my-table"
      :columns="headers"
      :rows="getItems"
      :rtl="direction"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
      @on-selected-rows-change="selectionChanged"
    >
      <div slot="selected-row-actions">
        <button>Action 1</button>
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'recordedAt'" class="text-nowrap">
          <b-form-input
            style="height: 35px"
            v-model="props.row.recordedAt"
            :disabled="props.row.state ? false : true"
            type="date"
          />
        </span>
      </template>
    </vue-good-table>
  </b-card-code>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import BCardCode from "~/@core/components/b-card-code/BCardCode.vue";
import { VueGoodTable } from "vue-good-table";

export default {
  props: {
    headers: Array,
    module: String,
  },
  components: {
    BCardCode,
    VueGoodTable,
  },
  data() {
    return {
      dir: true,
      status: [
        {
          1: "Current",
          2: "Professional",
          3: "Rejected",
          4: "Resigned",
          5: "Applied",
        },
        {
          1: "light-primary",
          2: "light-success",
          3: "light-danger",
          4: "light-warning",
          5: "light-info",
        },
      ],
    };
  },
  computed: {
    getItems() {
      return this.$store.getters[`${this.module}/getCorrectChecksData`];
    },
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current: "light-primary",
        Professional: "light-success",
        Rejected: "light-danger",
        Resigned: "light-warning",
        Applied: "light-info",
        /* eslint-enable key-spacing */
      };

      return (status) => statusColor[status];
    },
    direction() {
      return this.dir;
    },
  },
  methods: {
    selectionChanged() {
      console.warn("selectionChanged", this.$refs["my-table"].selectedRows);
    },
  },

  mounted() {},
};
</script>

