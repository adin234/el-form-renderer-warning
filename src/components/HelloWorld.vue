<template>
  <div class="hello">
    <el-form-renderer
        :content='content_info' :ref="forms[0]">
    </el-form-renderer>
  </div>
</template>

<script>
import Element from 'element-ui';
import ElFormRenderer from 'el-form-renderer';
import Vue from 'vue';

Vue.use(Element);

export default {
  name: 'HelloWorld',
  components: {
    ElFormRenderer,
  },
  mounted() {
    this.content_info = [...JSON.parse(JSON.stringify(this.content_info))];
  },
  props: {
    msg: String,
  },
  data() {
    return {
      forms: ['lol'],
      content_info: [{
        $type: 'input-number',
        $id: 'some_stupid_input',
        label: 'Some stupid input:',
      }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
