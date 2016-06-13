import types from 'constants/ActionTypes';
import Article from 'records/Article';
import { Map } from 'immutable';

export default function articles(state = Map(), action) {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
    } else {
        return state;
    }
}

const handlers = {
    [types.GET_ARTICLES_SUCCESS](state, action) {
        return state.merge(
            action.response.reduce((articles, article) => {
                articles[article.id] = new Article(article);
                return articles;
            }, {})
        );
    },
    [types.GET_ARTICLE_SUCCESS](state, action) {
        return state.set(action.response.id, new Article(action.response));
    }
};
