const vue = new Vue({
  data: () => {
    return {
      inputType: "",
      wines: [],
      searchKey: "",
    };
  },
  computed: {
    search() {
      return this.wines.filter((wine) => {
        return wine.name.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
  },
  methods: {
    removeItem(id) {
      this.$delete(this.wines, id);
    },
    getImgUrl(pic) {
      return "assets/uploads/" + pic;
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
