<template>
  <div class="hello">
    <!-- <badge text="1"></badge> -->
    <yd-button type="primary">primary</yd-button>
     <mt-button type="danger">danger</mt-button>
      <div id="test">11</div>
      <input type="text" id="aa">
  </div>
</template>

<script>
// import { Badge, Group, Cell } from 'vux';
import $ from 'jquery'
import { debuglog } from 'util';
export default {
  name: 'HelloWorld',
  components:{
    // Badge
  },
  props: {
    msg: String
  },
   mounted() {
    $('#test').text('aaa');
    $('#aa').val('aaa');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
