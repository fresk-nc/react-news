import { CALL_API } from 'middleware/api';
import types from 'constants/ActionTypes';

export function loadArticles() {
    return {
        [CALL_API]: {
            endpoint: '/api/articles',
            method: 'GET',
            types: [ types.GET_ARTICLES, types.GET_ARTICLES_SUCCESS, types.GET_ARTICLES_FAILURE ]
        }
    };
}

export function loadArticle(id) {
    return (dispatch, getState) => {
        const article = getState().articles.get(id);

        if (article) {
            return null;
        }

        return dispatch(fetchArticle(id));
    };
}

export function fetchArticle(id) {
    return {
        [CALL_API]: {
            endpoint: `/api/articles/${id}`,
            method: 'GET',
            types: [ types.GET_ARTICLE, types.GET_ARTICLE_SUCCESS, types.GET_ARTICLE_FAILURE ]
        }
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    };
}
