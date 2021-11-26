<template v-for="col in tabledate">
  <div id="date-picker">

    <p>{{ now }}</p>

    <table>
      <tr>
        <th>Nth</th>
        <th>Start</th>
        <th>End</th>
      </tr>
      <tr v-for="(item, index) in this.tableDataStart" :key="item" >
        <td> {{ index+1 }}</td>
        <td> {{ item.start }}</td>
        <td> {{ item.end }}</td>
      </tr>

    </table>

  </div>
</template>

<script>
import dayjs from "dayjs"
import {inject} from 'vue'

export default {
  name: 'DatePicker',
  data(){
    return{
      now: null,
      tableData: {}
    }
  },
  methods: {
    getURL: function(){
      dayjs.locale('zh-tw')
      this.now = dayjs()
    },
    getDate: function(){
      // https://programmer-note.hatenablog.com/entry/2021/09/29/182707
      this.dayjs = inject('dayjs')
      var customParseFormat = require('dayjs/plugin/customParseFormat')
      dayjs.extend(customParseFormat)

      var tableData = [{
        "start": dayjs(this.$route.query.startTime).day(1).format('YYYY年M月DD日 (一)'),
        "end"  : dayjs(this.$route.query.startTime).day(1).add(13, 'd').format('YYYY年M月DD日 (日)')
      }];

      for (var i=1; i<12; i++){
        var period = 13*i;
        tableData.push({
          "start": dayjs(this.$route.query.startTime).day(1).add(period+(1*i), 'd').format('YYYY年M月DD日 (一)'), 
          "end"  : dayjs(this.$route.query.startTime).day(1).add(period+1*13+i, 'd').format('YYYY年M月DD日 (日)')
        })
      }
      this.tableDataStart = tableData
    }
  },
  mounted(){
    this.getURL();
    this.getDate();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
