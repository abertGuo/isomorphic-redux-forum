import Express from 'express';
import getItem from './getItem';
import getList from './getList';
import user from './user';
import addPost from './addPost';
import log from './log';
const router = Express.Router();

router.get('/post',getList);
router.post('/post',addPost);
router.get('/detail',getItem);
router.post('/log',log);
router.post('/user',user)

export default router;