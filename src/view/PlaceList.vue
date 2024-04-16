<template>
  <div>
    <el-table :data="places" stripe style="width: 100%;height:1000px">
      <el-table-column prop="name" label="景点" style="width: 20%;"> </el-table-column>
      <el-table-column prop="province" label="省份" style="width: 20%;"></el-table-column>
      <el-table-column prop="score" label="评分" style="width: 20%;"> </el-table-column>
      <el-table-column prop="tail" label="简介" style="width: 40%;"> </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="detail">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync=params.page
        :page-size="100"
        layout="total, prev, pager, next"
        :total=this.total
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: "PlaceList",
  data(){
    return{
    page:1,
    size:'',
    places:[],
    total:'',
    params: {
        page: 1,
        size: 10,
        }
    }
    },
  mounted() {
    this.pagehelper();
  },
  methods: {
    //    分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.params.size = val;
      this.pagehelper();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.page = val;
      this.pagehelper();
    },
    pagehelper() {
      let that = this;
      request.get("/place/page?page="+this.params.page + "&pagesize=" + this.params.size)
        .then((res) => {
          console.log("分页页面");
          console.log(res.data.data.records);
          console.log("分页后");
          that.places=Object.values(res.data.data.records)
          console.log(that.places);
          that.total = res.data.data.total;
          // console.log(this.total);
        });
    }
  }
}
</script>

<style>
.el-table th.el-table__cell{
  line-height: 30px;
}
.block{
  position: fixed;
    bottom: 0;
    height: 40px;
    width: 100%;
    text-align: center;
}
</style>
