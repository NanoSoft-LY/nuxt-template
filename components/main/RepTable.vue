<template>
  <b-card no-body class="card-statistics">
    <b-card-body class="statistics-body">
      <b-row class="justify-content-between">
        <b-col cols="12">
          <b-table
            ref="selectableTable"
            striped
            hover
            responsive
            class="customise-table"
            :current-page="currentPage"
            :items="getItems"
            :fields="headers"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
          >
            <!-- <template v-if="notId" #cell()="data">
              <nuxt-link
                :to="{
                  name: `${$route.name}-new`,
                  query: { id: data.item.id },
                }"
                class="table-link"
              >
              </nuxt-link>
              <span>{{ data.value }}</span>
            </template> -->
            <template #cell(avatar)="data">
              <a href="" class="when">
                <b-avatar :src="data.value" />
              </a>
            </template>
            <template #cell(status)="data">
              <b-badge :variant="status[1][data.value]">
                {{ status[0][data.value] }}
              </b-badge>
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
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import { MoreVerticalIcon, Edit2Icon, TrashIcon } from "vue-feather-icons";
export default {
  props: {
    // "headers", "items", "notId"
    headers: Array,
    module: String,
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
  },
  mounted() {
    // Set the initial number of items
    // this.totalRows = this.items.length;
  },
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
    showMsgBoxTwo(data) {
      console.warn("data :::", data.item.id);
      this.$bvModal
        .msgBoxConfirm(`"هل أنت متأكد من حذف هذا العنصر" -- ${data.item.id}`, {
          title: "تأكيد للحذف",
          size: "sm",
          okVariant: "primary",
          okTitle: "نعم",
          cancelTitle: "لا",
          cancelVariant: "outline-secondary",
          hideHeaderClose: false,
          centered: false,
        })
        .then((value) => {
          value ? this.$emit("deleteItem", data.item.id) : "";
        });
    },
  },
  components: {
    MoreVerticalIcon,
    Edit2Icon,
    TrashIcon,
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
