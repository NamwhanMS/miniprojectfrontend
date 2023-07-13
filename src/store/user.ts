import { computed, reactive } from "vue";
import * as Request from "../requests";
//import { useRouter } from 'vue-router'

//const router = useRouter()

const state = reactive({
  name: "",
  email: "",

  error: "",
});

const getters = reactive({
  isLoggedIn: computed(() => state.email !== ""),
});

const actions = {
  async getUser() {
    const user = await Request.getUser();
    if (user == null) return;

    state.name = user.name;
    state.email = user.email;
  },
  async login(email: string, password: string) {
    const user = await Request.login(email, password);
    if (user == null) {
      state.error = "Could not find user.";
      return false;
    }

    state.name = user.name;
    state.email =user.email;
    state.error = "";
    //console.log(router)
    //router.push('/')
    return true;
  },
  async logout() {
    state.name = "";
    state.email = "";
  },
};

export default { state, getters, ...actions };
