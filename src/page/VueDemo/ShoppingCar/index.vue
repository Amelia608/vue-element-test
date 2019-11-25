<template>
	<div id="shopping_car" v-cloak>
		<template v-if="list.length">
			<table class="table" style="width: 100%;" border="1">
				<thead>
					<tr>
						<th>序号</th>
						<th>商品名称</th>
						<th>商品单价</th>
						<th>购买数量</th>
						<th>单价</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in list" :key="index">
						<td>{{index+1}}</td>
						<td>{{item.name}}</td>
						<td>{{item.price}}</td>
						<td>
							<el-button type="primary" :disabled="item.count===1" @click="item.count--">-</el-button> {{item.count}} <el-button type="primary" @click="item.count++">+</el-button>
						</td>
						<td><el-button type="text" @click="delPro(index)">移除</el-button></td>
					</tr>
				</tbody>

			</table>
			<div class="mt20 tr f18">总价： ￥{{totalPrice}}</div>
		</template>
		<p v-else class="tc">购物车为空</p>
		<div>
			<el-input type="text" placeholder="请输入内容" @input.native="handleInput"></el-input>
			<p>
				<input type="radio" :checked="picked" />
			</p>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				content:'',
				picked:true,
				list:[
					{
						id:1,
						name:'iphone 7',
						price:6188,
						count:1
					},
					{
						id:2,
						name:'ipad pro',
						price:5888,
						count:1
					},
					{
						id:3,
						name:'MacBook Pro',
						price:21488,
						count:1
					}
				]
			}
		},
		computed:{
			totalPrice:function(){
				let total=0
				this.list.map(v=>{
					total+=v.price*v.count
				})
				return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
			}
		},
		mounted(){
			let arr=[1,3,4,4,5,2,2,7]
			console.log([...new Set(arr)])
			console.log([...new Set('abcdefdfdvb')].join(''))
			
		},
		methods:{
			delPro(index){
				this.list.splice(index,1)
			},
			handleInput(e){
				this.content=e.target.value
				console.log(this.content)
			}
		}
	}
</script>

<style lang="scss">
	[v-cloak]{
		display: none;
	}
	#shopping_car{
		.table{
			width: 100%;
			tr,th,td{
				text-align: center;
				padding: 20px 10px;
			}
		}
	}
	
</style>