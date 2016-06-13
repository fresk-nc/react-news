import visibilityFilter from 'reducers/visibilityFilter';
import types from 'constants/ActionTypes';

describe('reducers', () => {
    describe('visibilityFilter', () => {
        it('should handle initial state', () => {
            expect(visibilityFilter(undefined, {})).to.be.equal('all');
        });

        it('should handle SET_VISIBILITY_FILTER', () => {
            expect(visibilityFilter('all', {
                type: types.SET_VISIBILITY_FILTER,
                filter: 'sport'
            })).to.be.equal('sport');
        });
    });
});
