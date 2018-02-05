import indexModel from '../models/indexmodel';
console.log(indexModel);
// console.log(new indexModel().updateNum());
const indexController={
	index(){
		return async(ctx,next)=>{
			ctx.body=await ctx.render('index.html',{
				title:'大拇指点赞'
			});
		}
	},
	update(){
	    return async(ctx,next)=>{
	        const indexM = new indexModel(ctx);
	        ctx.body = await indexM.updateNum();
	    } 
	}
}
export default indexController