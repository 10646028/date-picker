<template>
  <div id="member">
    Please fill in member: <br />
    1: <input type="text" v-model="member1" /><br />
    2: <input type="text" v-model="member2" /><br />
    3: <input type="text" v-model="member3" /><br />
    4: <input type="text" v-model="member4" /><br />
    5: <input type="text" v-model="member5" /><br />
    6: <input type="text" v-model="member6" /><br />
    7: <input type="text" v-model="member7" /><br />

    <button @click='submit'>submit</button><button @click='hidden'>hidden</button>

    <table v-bind:style="{display: display}">
      <tr v-for="(item) in this.formemberArrary" :key="item" >
        <td> {{ item.name }}</td>
        <td> {{ item.one }}</td>
        <td> {{ item.two }}</td>
      </tr>
    </table>
  <br>
    <table v-bind:style="{display: display}">
      <tr v-for="(item) in this.getmemberArrary" :key="item" >
        <td> {{ item.name }}</td>
        <td> {{ item.one }}</td>
        <td> {{ item.two }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      display: 'none',
      group: 7,
      member1: null,
      member2: null,
      member3: null,
      member4: null,
      member5: null,
      member6: null,
      member7: null,
      memberArrary: [],
      formemberArrary: [{
        'name': '寫給其他人回饋','one': '第一輪', 'two': '第二輪'
      }],
      getmemberArrary: [{
        'name': '會收到的回饋','one': '第一輪', 'two': '第二輪'
      }],
      startTime1: null,
      startTime2: null,
      endTime1: null,
      endTime2: null,

    };
  },
  methods: {
    memberInit: function(){
      if (localStorage.datePickerMember1){
        this.display = 'table';
        this.member1 = localStorage.datePickerMember1;
        this.member2 = localStorage.datePickerMember2;
        this.member3 = localStorage.datePickerMember3;
        this.member4 = localStorage.datePickerMember4;
        this.member5 = localStorage.datePickerMember5;
        this.member6 = localStorage.datePickerMember6;
        this.member7 = localStorage.datePickerMember7;
        this.startTime1 = localStorage.datePickerDateStartTime1;
        this.startTime2 = localStorage.datePickerDateStartTime1;
        this.endTime1   = localStorage.datePickerDateEndTime1;
        this.endTime2   = localStorage.datePickerDateEndTime1;
      }else{
        this.display = 'none';
      }
    },
    submit: function(){
      this.display = 'table';
      localStorage.datePickerMember1 = this.member1;
      localStorage.datePickerMember2 = this.member2;
      localStorage.datePickerMember3 = this.member3;
      localStorage.datePickerMember4 = this.member4;
      localStorage.datePickerMember5 = this.member5;
      localStorage.datePickerMember6 = this.member6;
      localStorage.datePickerMember7 = this.member7;
    },
    hidden: function(){
      this.display = 'none';
    },
    tableDispatch: function(){
      this.memberArrary = [this.member1, this.member2, this.member3, this.member4, this.member5,this.member6, this.member7]
      this.formemberArrary= [{
        'name': '要回饋其他人','one': '第一輪', 'two': '第二輪'
      }]
      this.getmemberArrary= [{
        'name': '會收到的回饋','one': '第一輪', 'two': '第二輪'
      }]

      for (var i=0; i<7; i++){
        var a = []
        var b  = []
        // 第一輪
        for (var j=1; j<4; j++){
          if (i+j>7){
            a.push(this.memberArrary[i+j-7])
          }else{
            if (i+j!=7){
               a.push(this.memberArrary[i+j])
            }else{
              a.push(this.memberArrary[0])
            }
          }
        }
        // 第二輪
        for (var k=4; k<7; k++){
          if (i+k>7){
            b.push(this.memberArrary[i+k-7])
          }else{
            if (i+k!=7){
               b.push(this.memberArrary[i+k])
            }else{
              b.push(this.memberArrary[0])
            }
          }
        }
  
        this.formemberArrary.push({
          'name': this.memberArrary[i], 
          'one' : a, 
          'two' : b
        });
        this.getmemberArrary.push({
          'name': this.memberArrary[i], 
          'one' : b, 
          'two' : a
        });
      }

    console.log(this.formemberArrary)      
    },
    clearLocalStorage: function(){
      localStorage.removeItem('datePickerMember1');
      localStorage.removeItem('datePickerMember2');
      localStorage.removeItem('datePickerMember3');
      localStorage.removeItem('datePickerMember4');
      localStorage.removeItem('datePickerMember5');
      localStorage.removeItem('datePickerMember6');
      localStorage.removeItem('datePickerMember7');
    },
  },
  mounted(){
    this.memberInit();
    this.tableDispatch();
  },
  watch:{
    member1: function(){
    this.tableDispatch();
    },
    member2: function(){
    this.tableDispatch();
    },
    member3: function(){
    this.tableDispatch();
    },
    member4: function(){
    this.tableDispatch();
    },
    member5: function(){
    this.tableDispatch();
    },
    member6: function(){
    this.tableDispatch();
    },
    member7: function(){
    this.tableDispatch();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 0 auto;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
button {
  margin: 1rem auto;
}
input{
  width: 7.5rem;
  margin: 0.2rem;
  padding: 0.2rem;
}
@media (max-width: 768px) {
  table {
    font-size: 12px;
    white-space: nowrap;
  }
}

</style>
