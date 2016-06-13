import { Map } from 'immutable';
import Article from 'records/Article';
import { getVisibleArticles } from 'selectors/articles';

describe('selectors', () => {
    describe('articles', () => {
        describe('getVisibleArticles', () => {
            it('should return all articles', () => {
                const state = {
                    visibilityFilter: 'all',
                    articles: Map({
                        '100': new Article({
                            id: '100',
                            title: 'title',
                            content: 'content',
                            type: 'sport'
                        })
                    })
                };

                expect(getVisibleArticles(state)).to.be.equal(state.articles);
            });

            it('should return only sport articles', () => {
                const state = {
                    visibilityFilter: 'sport',
                    articles: Map({
                        '100': new Article({
                            id: '100',
                            title: 'title',
                            content: 'content',
                            type: 'sport'
                        }),
                        '101': new Article({
                            id: '101',
                            title: 'title',
                            content: 'content',
                            type: 'world'
                        })
                    })
                };

                expect(getVisibleArticles(state)).to.be.equal(
                    Map({
                        '100': new Article({
                            id: '100',
                            title: 'title',
                            content: 'content',
                            type: 'sport'
                        })
                    })
                );
            });
        });
    });
});
