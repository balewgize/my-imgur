<template>
  <div class="upload-form">
    <input
      type="file"
      multiple
      accept="image/*"
      @change="uploadImages($event.target.files)"
    />
    <span>Drop images here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: {
    ...mapActions(["uploadImages"]),
  },
};
</script>

<style scoped>
.upload-form {
  height: 30vh;
  border: 2px dashed;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.upload-form:hover {
  background: #eee;
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
