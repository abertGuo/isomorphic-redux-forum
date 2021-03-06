import qs from 'qs';
import Post from '../Models/post';
const postEntity = new Post();

export default function(req,res,next){
    const author = qs.parse(req.query).author;
    let query = {
        author
    }
    console.log(`请求作者:${author}的文章`)
    if(author==='all'){
        query = null
        console.log("请求全部文章")
    }
    postEntity.get(query,(err,posts)=>{
        if(err){
            return res.status(500).end('服务器错误');
        } 
        return res.status(200).json(posts);
    })
}