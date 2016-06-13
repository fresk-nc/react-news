import { connect } from 'react-redux';

import ArticlesList from 'components/ArticlesList';
import { getVisibleArticles } from 'selectors/articles';
import partitionImmutableMap from 'utils/partitionImmutableMap';

const MAX_ITEMS_IN_ROW = 3;

function mapStateToProps(state) {
    return {
        articles: partitionImmutableMap(
            getVisibleArticles(state), MAX_ITEMS_IN_ROW
        )
    };
}

export default connect(mapStateToProps)(ArticlesList);
