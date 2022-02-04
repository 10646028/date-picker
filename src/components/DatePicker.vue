<template>
  <div id="date-picker">
    <p>{{ now }}+8 Asia/Taipei </p>
    Please fill in date: <input type="date" v-model="inputdate" maxlength="8"><br />
    <br />
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
      tableData: {},
      inputdate: null,
      getDate: null
    }
  },
  methods: {
    getURL: function(){
      dayjs.locale('zh-tw');
      this.now = dayjs().add(8, 'h');
    },
    getPeriod: function(){
      // https://programmer-note.hatenablog.com/entry/2021/09/29/182707
      this.dayjs = inject('dayjs');
      var customParseFormat = require('dayjs/plugin/customParseFormat');
      dayjs.extend(customParseFormat);
 
      // 優先順序:
      // 1. get inputdate
      // 2. get localStorage
      // 3. get URL
      // 4. get today
      // console.log(this.inputdate)
      if (this.inputdate!=null){
        localStorage.datePickerDate = this.inputdate
        this.getDate = localStorage.datePickerDate
      }else{
        if(localStorage.datePickerDate){
          this.getDate = localStorage.datePickerDate
          this.inputdate = localStorage.datePickerDate
        }else if (this.$route.query.startTime){
          localStorage.datePickerDate = this.$route.query.startTime;
          this.inputdate = this.$route.query.startTime;
          this.getDate = localStorage.datePickerDate;
        }else{
          this.getDate = this.now.day(1).format('YYYY年M月DD日 (一)')
        }
      }

      var tableData = [{
        "start": dayjs(this.getDate).day(1).format('YYYY年M月DD日 (一)'),
        "end"  : dayjs(this.getDate).day(1).add(13, 'd').format('YYYY年M月DD日 (日)')
      }];

      for (var i=1; i<12; i++){
        var period = 13*i;
        tableData.push({
          "start": dayjs(this.getDate).day(1).add(period+(1*i), 'd').format('YYYY年M月DD日 (一)'), 
          "end"  : dayjs(this.getDate).day(1).add(period+1*13+i, 'd').format('YYYY年M月DD日 (日)')
        });
      }

      this.tableDataStart = tableData;
      var startTime1 = this.tableDataStart[0].start
      var endTime1 = this.tableDataStart[0].end
      var startTime2 = this.tableDataStart[1].start
      var endTime2 = this.tableDataStart[1].end
      localStorage.datePickerDateStartTime1 = startTime1;
      localStorage.datePickerDateEndTime1 = endTime1;
      localStorage.datePickerDateStartTime2 = startTime2;
      localStorage.datePickerDateEndTime2 = endTime2;
    },
  },
  mounted(){
    this.getURL();
    this.getPeriod();
  },
  watch:{
    inputdate: function(){
      this.getPeriod();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 0 auto;
}

td, th {
  border: 1px solid #CCE3DE;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #EAF4F4;
}

@media (max-width: 768px) {
  table{
    font-size: 12px;
    white-space: nowrap;
  }
}
</style>
