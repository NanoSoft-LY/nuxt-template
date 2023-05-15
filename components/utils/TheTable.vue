<template>
  <b-card no-body class="py-5">
    <b-row v-if="hidePerPage" class="justify-content-between">
      <b-col cols="12" sm="6" md="4" class="my-1">
        <b-form-group class="mb-0">
          <label class="d-inline-block text-sm-left mr-3">لكل صفحة</label>
          <b-form-select
            id="perPageSelect"
            v-model="perPage"
            size="sm"
            :options="pageOptions"
            class="w-50"
          />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="justify-content-between mx-3">
      <!-- Search -->
      <HelpersTableTSearch
        v-if="search"
        :module-name="moduleName"
        label="نتائج البحث"
      />
    </b-row>

    <b-table
      ref="selectableTable"
      striped
      hover
      responsive
      class="customise-table"
      :per-page="perPage"
      :items="table.allData"
      :fields="headers"
    >
      <template v-if="notId" #cell()="data">
        <nuxt-link :to="`${path}/${data.item.id}`" class="table-link">
        </nuxt-link>
        <span>{{ data.value }}</span>
      </template>

      <template #cell(actions)="data">
        <UtilsTheFIcon
          @click.native="showMsgBoxTwo(data)"
          icon="trash"
          class="text-danger"
        />
      </template>
    </b-table>

    <b-pagination
      v-if="table.allData.length"
      v-model="currentPage"
      :total-rows="table.totalItems"
      :per-page="perPage"
      align="center"
      size="sm"
      class="my-0"
    />

    <!-- :title="title" -->
    <HelpersLottie
      v-if="!table.allData.length"
      :path="path"
      height="40"
      lottie="https://assets1.lottiefiles.com/packages/lf20_tmsiddoc.json"
    />
  </b-card>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: "name",
    },
    headers: {
      type: Array,
      default: "name",
    },
    moduleName: {
      type: String,
      default: "name",
    },
    delKey: {
      type: String,
      default: "name",
    },
    notId: {
      type: Boolean,
      default: true,
    },
    hidePerPage: {
      type: Boolean,
      default: true,
    },
    search: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      perPage: 25,
      pageOptions: [5, 10, 25, 50],
      currentPage: 1,
    };
  },
  computed: {
    table() {
      return this.$store.getters[`${this.moduleName}/table`];
    },
  },
  methods: {
    showMsgBoxToTransfer(data) {
      console.warn("data :::", data.item.id);
      this.$bvModal
        .msgBoxConfirm(
          `هل أنت متأكد من ترحيل هذا العنصر ( ${data.item.statement} )`,
          {
            title: "تأكيد للحذف",
            size: "sm",
            okVariant: "primary",
            okTitle: "نعم",
            cancelTitle: "لا",
            cancelVariant: "outline-secondary",
            hideHeaderClose: false,
            centered: false,
          }
        )
        .then((value) => {
          value ? this.$emit("transferItem", data.item.id) : "";
        });
    },
    showMsgBoxTwo(data) {
      this.$bvModal
        .msgBoxConfirm(
          `هل أنت متأكد من حذف هذا العنصر ( ${data.item[this.delKey]} )`,
          {
            title: "تأكيد للحذف",
            size: "sm",
            okVariant: "primary",
            okTitle: "نعم",
            cancelTitle: "لا",
            cancelVariant: "outline-secondary",
            hideHeaderClose: false,
            centered: false,
          }
        )
        .then((value, i) => value && this.delete(data.item.id));
    },
    async delete(id) {
      await this.$store.dispatch(`${this.moduleName}/deleteFromDB`, id);
      await this.$nuxt.refresh();
      await this.$toast.success("تم الحذف بنجاح");
    },
  },
  watch: {
    async currentPage(newValue) {
      await this.$store.commit(`${this.moduleName}/setTableValue`, {
        key: "page",
        value: newValue,
      });
      await this.$store.dispatch(`${this.moduleName}/getDataByQuery`);
    },
    async perPage(newValue) {
      await this.$store.commit(`${this.moduleName}/setTableValue`, {
        key: "perPage",
        value: newValue,
      });
      await this.$store.dispatch(`${this.moduleName}/getDataByQuery`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
