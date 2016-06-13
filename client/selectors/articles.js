import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getArticles = (state) => state.articles;

export const getVisibleArticles = createSelector(
    [ getVisibilityFilter, getArticles ],
    (visibilityFilter, articles) => {
        if (visibilityFilter === 'all') {
            return articles;
        }

        return articles.filter((article) => article.type === visibilityFilter);
    }
);
