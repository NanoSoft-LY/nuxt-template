<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <b-card class="mb-0">
        <div class="all d-flex justify-content-center align-items-center">
          <div class="card-auth p-2 pb-4">
            <div v-if="state == 'normal'" class="circle normal">
              <lock-icon size="2.5x"></lock-icon>
            </div>
            <div v-else-if="state == 'success'" class="circle success">
              <unlock-icon class="icon" size="2.5x"></unlock-icon>
            </div>
            <div v-else-if="state == 'fail'" class="circle fail">
              <lock-icon size="2.5x"></lock-icon>
            </div>
            <p class="text-center fw-bold fs-5 mt-3">
              قم بادخال 6 ارقام عن طريق تطبيق التحقق الخاص بك
            </p>
            <form>
              <b-form-input
                v-for="(input, index) in inputs"
                :key="index"
                class="input"
                ref="inputs"
                type="text"
                :maxlength="1"
                pattern="[0-9]"
                :disabled="disabled"
                :tabindex="index + 1"
                v-model="values[index]"
                @keyup="handleKeyUp(index, $event)"
                @keydown="handleKeyDown(index, $event)"
              ></b-form-input>
              <!-- @input="justNumbers(index, $event)" -->
            </form>
            <div v-if="disabled" class="text-center mt-5">
              <b-spinner variant="primary" label="Text Centered"></b-spinner>
            </div>
            <!-- <div class="px-5">
              <b-button variant="primary mt-5 w-100 fw-bold fs-4">
                {{ textMessage }}
              </b-button>
            </div> -->
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { LockIcon, UnlockIcon } from "vue-feather-icons";
export default {
  name: "verification",
  layout: "isAuthenticated",
  components: {
    LockIcon,
    UnlockIcon,
  },
  data() {
    return {
      inputs: new Array(6).fill(""), // creates an array with 6 empty strings
      values: new Array(6).fill(""),
      disabled: false,
      state: "normal",
      textMessage: "6 حقول متبقية",
    };
  },
  // computed: {
  //   emptyFieldCount() {
  //     return this.values.filter((value) => !value).length;
  //   },
  //   buttonText() {
  //     return this.emptyFieldCount === 0
  //       ? "Submit"
  //       : ` ${this.emptyFieldCount} حقول متبقية `;
  //   },
  // },
  methods: {
    emptyFieldCount() {
      return this.values.filter((value) => !value).length;
    },
    buttonText() {
      const emptyFieldCount = this.emptyFieldCount();
      return (this.textMessage = `${emptyFieldCount} حقول متبقية `);
    },
    handle(index, event) {
      if (event.keyCode >= 49 && event.keyCode <= 57) {
        console.warn("$event", event.key);
      } else {
        const prevInput = this.$refs.inputs[index];
        prevInput.$el.value = "";
        console.warn("prevInput", (prevInput.$el.value = ""));
      }
    },
    handleKeyUp(index, event) {
      // console.warn("index", index);
      // console.warn("event", event);
      if (/^[0-9]$/.test(event.key)) {
        const nextInput = this.$refs.inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
          this.buttonText();
        }
      }
    },
    handleKeyDown(index, event) {
      if (event.key === "Backspace" && !this.values[index]) {
        const prevInput = this.$refs.inputs[index - 1];
        if (prevInput) {
          prevInput.focus();
          this.buttonText();
        }
      }
    },
    async handleLastInput() {
      this.textMessage = "جارى التحقق";

      const url = `${process.env.AUTH_LOGIN}/api/identities/validate_tow_factor`;
      const code = this.values.join("");
      const schema = {
        code,
        name: this.$auth.user.loginName,
      };

      const { data } = await this.$axios.$put(url, schema);

      if (data) {
        this.state = "success";
        this.textMessage = "تم بنجاح";
        await this.$auth.fetchUser();
        this.$router.push("/");
      } else {
        this.state = "fail";
        this.textMessage = "كود خطأ";
        setTimeout(() => {
          this.disabled = false;
          this.values = new Array(6).fill("");
          this.textMessage = "6 حقول متبقية";
        }, 1000);
      }
    },
  },
  watch: {
    values: {
      handler(newValue) {
        if (newValue[newValue.length - 1]) {
          this.handleLastInput();
          this.disabled = true;
          // this.state = "fail";
        }
      },
      deep: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.all {
  // height: 80vh;
  .card-auth {
    // width: 450px;
    // height: 450px;
    // border-radius: 12px;
    // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    //   rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    .circle {
      margin: auto;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .normal {
      background-color: #e1f3ff;
    }
    .success {
      background-color: rgba(77, 248, 62, 0.5);
      .icon {
        transform: rotateY(180deg);
      }
    }
    .fail {
      background-color: rgb(217, 99, 99, 0.5);
    }

    form {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row-reverse;
      margin-top: 30px;
      .input {
        width: 40px;
        padding: 6px;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
</style>
