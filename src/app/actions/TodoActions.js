
import AppDispatcher from '../dispatchers/AppDispatcher.js';

class TodoActions {
    create(description){
        AppDispatcher.dispatch({
            actionType: 'new',
            description: description
        });
    }
}

export default new TodoActions();