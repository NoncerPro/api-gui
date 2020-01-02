
<template>
  <div class="stat box p-sm">
    <span class="text has-text-weight-semibold is-size-7 m-b-sm m-t-sm" v-text="text"></span>
    <p class="has-text-right">
      <span
        class="hashrate is-size-5 has-text-link is-family-secondary has-text-weight-bold"
        v-html="value"
      >
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true
    },
    value: [String, Number],
    text: String
  },
  methods: {
  },
  mounted() {
    // eventBus.$on("updated", data => {
    //   this.setValue(data);
    // });
  },
};
</script>
