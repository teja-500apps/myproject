<template>
  <div>
      <FurnitureC
        :columns="['⬜','Id', 'Product', 'Sku', 'Type', 'Quality', 'Operation']"
        :form-fields="{}" >
        <template v-slot:input-fields="{ formdata }"><br/>
          Id:
          <b-form-input
            id="input-1"
            v-model="formdata.Id"
            type="number"
            required
            placeholder="Enter Id"
          ></b-form-input>
          Product:
          <b-form-input
            id="input-1"
            v-model="formdata.Product"
            required
            placeholder="Product Name"
          ></b-form-input>
          Sku:
          <b-form-input
            v-model="formdata.Sku"
            :options="options"
            placeholder="Enter Sku"
          ></b-form-input>
          Type:
          <b-form-input
            id="input-1"
            v-model="formdata.Type"
            required
            placeholder="Product Type"
          ></b-form-input>
          Quality:
          <b-form-input
            id="input-1"
            v-model="formdata.Quality"
            type="number"
            required
            placeholder="Enter Quality"
          ></b-form-input>
        </template>
      </FurnitureC><br/><br/>
  </div>
</template>
<script>
import FurnitureC from "./FurnitureChild.vue";
export default {
  name: "FurnitureData",
  components: { FurnitureC },
  data() {
    return {
       
    };
  },
  methods: {},
};
</script>
