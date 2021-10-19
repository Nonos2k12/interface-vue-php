const vue = new Vue({
  data: () => {
    return {
      wines: [],
    };
  },
  methods: {
    removeItem(id) {
      this.$delete(this.wines, id);
    },
  },
  mounted() {
    axios
      .get("libraries/controllers/getData.php")
      .then((res) => res.data)
      .then((res) => {
        this.wines = res;
      });
  },
}).$mount("#vue-app");
