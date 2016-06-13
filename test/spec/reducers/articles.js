import { Map } from 'immutable';
import articles from 'reducers/articles';
import types from 'constants/ActionTypes';
import Article from 'records/Article';

describe('reducers', () => {
    describe('articles', () => {
        it('should handle initial state', () => {
            expect(articles(undefined, {})).to.be.equal(Map());
        });

        describe('action GET_ARTICLES_SUCCESS', () => {
            it('should return the empty Map', () => {
                expect(
                    articles(Map(), {
                        type: types.GET_ARTICLES_SUCCESS,
                        response: []
                    })
                ).to.be.equal(Map());
            });

            it('should return the Map with two received articles', () => {
                expect(
                    articles(Map(), {
                        type: types.GET_ARTICLES_SUCCESS,
                        response: [
                            {
                                id: '100',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            },
                            {
                                id: '101',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            }
                        ]
                    })
                ).to.be.equal(
                    Map({
                        '100': new Article({
                            id: '100',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        }),
                        '101': new Article({
                            id: '101',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        })
                    })
                );
            });

            it('should return the merged Map(without intersections)', () => {
                expect(
                    articles(Map({
                        '99': new Article({
                            id: '99',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        })
                    }), {
                        type: types.GET_ARTICLES_SUCCESS,
                        response: [
                            {
                                id: '100',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            },
                            {
                                id: '101',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            }
                        ]
                    })
                ).to.be.equal(
                    Map({
                        '99': new Article({
                            id: '99',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        }),
                        '100': new Article({
                            id: '100',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        }),
                        '101': new Article({
                            id: '101',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        })
                    })
                );
            });

            it('should return the merged Map(with intersections)', () => {
                expect(
                    articles(Map({
                        '99': new Article({
                            id: '99',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        })
                    }), {
                        type: types.GET_ARTICLES_SUCCESS,
                        response: [
                            {
                                id: '99',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            },
                            {
                                id: '100',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            },
                            {
                                id: '101',
                                title: 'title',
                                content: 'content',
                                type: 'type'
                            }
                        ]
                    })
                ).to.be.equal(
                    Map({
                        '99': new Article({
                            id: '99',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        }),
                        '100': new Article({
                            id: '100',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        }),
                        '101': new Article({
                            id: '101',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        })
                    })
                );
            });
        });

        describe('action GET_ARTICLE_SUCCESS', () => {
            it('should return the Map with received article', () => {
                expect(
                    articles(Map(), {
                        type: types.GET_ARTICLE_SUCCESS,
                        response: {
                            id: '99',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        }
                    })
                ).to.be.equal(
                    Map({
                        '99': new Article({
                            id: '99',
                            title: 'title',
                            content: 'content',
                            type: 'type'
                        })
                    })
                );
            });
        });
    });
});
