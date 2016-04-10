
import AppDispatcher from '../dispatchers/AppDispatcher.js';

export const NEW = 'new';
export const UPDATE = 'update';
export const DONE = 'done';

class TodoActions {
    create(description){
        AppDispatcher.dispatch({
            actionType: NEW,
            description: description
        });
    }
    
    updateDescription(id, description){
        AppDispatcher.dispatch({
            actionType: UPDATE,
            id: id,
            description: description
        });
    }
    
    done(id){
        AppDispatcher.dispatch({
            actionType: DONE,
            id: id
        });
    }
}

export default new TodoActions();