<template>
  <b-card no-body class="card-statistics">
    <b-card-body class="statistics-body">
      <b-row class="justify-content-between">
        <b-col cols="12" sm="6" md="4" class="my-1">
          <b-form-group class="mb-0">
            <label class="d-inline-block text-sm-left mr-50">لكل صفحة</label>
            <b-form-select
              id="perPageSelect"
              v-model="perPage"
              size="sm"
              :options="pageOptions"
              class="w-50"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-table
            ref="selectableTable"
            striped
            hover
            responsive
            class="customise-table"
            :per-page="perPage"
            :items="getItems"
            :fields="headers"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
          >
            <template v-if="notId" #cell()="data">
              <nuxt-link
                :to="{
                  name: `${$route.name}-new`,
                  query: { id: data.item.id },
                }"
                class="table-link"
              >
              </nuxt-link>
              <span>{{ data.value }}</span>
            </template>

            <template v-else #cell()="data">
              <nuxt-link
                @click.native="$emit('edit', data.item)"
                to=""
                class="table-link"
              >
              </nuxt-link>
              <span>{{ data.value }}</span>
            </template>
            <template #cell(digits)="data">
              <span class="mr-5">{{ data.value }}</span>
            </template>

            <template #cell(select)="data">
              <arrow-left-circle-icon
                @click="showMsgBoxToTransfer(data)"
                size="1.5x"
                class="custom-class"
              ></arrow-left-circle-icon>
            </template>
            <template #cell(actions)="data">
              <trash-icon
                @click="showMsgBoxTwo(data)"
                size="1.5x"
                class="custom-clas mr-50 text-danger"
              ></trash-icon>
            </template>
          </b-table>
        </b-col>

        <b-col cols="12">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalItems"
            :per-page="perPage"
            align="center"
            size="sm"
            class="my-0"
          />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  MoreVerticalIcon,
  Edit2Icon,
  TrashIcon,
  ArrowLeftCircleIcon,
} from "vue-feather-icons";
export default {
  props: {
    headers: Array,
    module: String,
    deletedKey: {
      type: String,
      default: "name",
    },
    notId: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      perPage: 25,
      pageOptions: [5, 10, 25, 50],
      totalRows: 1,
      currentPage: 1,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },

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
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => ({ text: f.label, value: f.key }));
    },
    getItems() {
      return this.$store.getters[`${this.module}/getAllData`];
    },
    getItemsSelect() {
      return this.$store.getters[`${this.module}/getAllDataSelect`];
    },
    totalItems() {
      return this.$store.getters[`${this.module}/getTotalItems`];
    },
  },
  filters: {},
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
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
      console.warn("data :::", data.item[this.deletedKey]);
      this.$bvModal
        .msgBoxConfirm(
          `هل أنت متأكد من حذف هذا العنصر ( ${data.item[this.deletedKey]} )`,
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
          if (value) {
            this.$store
              .dispatch(`${this.module}/deleteFromDB`, data.item.id)
              .then((res) => {
                // this.$nuxt.refresh();
                // this.$toast.success("Deleted Successfully");
              });
          }
        });
    },
  },
  components: {
    MoreVerticalIcon,
    Edit2Icon,
    TrashIcon,
    ArrowLeftCircleIcon,
  },
  watch: {
    currentPage(newValue, oldValue) {
      this.$emit("changePage", {
        size: this.perPage,
        page: newValue,
      });
    },
    perPage(newValue, oldValue) {
      this.$emit("changeSize", { size: newValue, page: this.currentPage });
    },
  },
};
</script>

<style lang="scss" scoped>
.arabic-dir {
  .table-action {
    ul {
      li {
        text-align: right !important;
      }
    }
  }
}
</style>
