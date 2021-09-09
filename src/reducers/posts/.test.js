import {types} from '../../actions/types';
import postReducer from './reducer'
describe('Post reducer',()=>{
    it('should return default test',()=>{
        const newState = postReducer(undefined,{});
        expect(newState).toEqual([])
    })
    it('should return new state if receive type',()=>{
        const posts = [{title:'Title 1'},{title:'Title 2'},{title:'Title 3'}]
        const newState = postReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        })
        expect(newState).toEqual(posts);
    })
})