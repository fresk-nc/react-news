import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadArticle } from 'actions';
import ArticleComponent from 'components/Article';
import Article from 'records/Article';

class ArticlePage extends React.Component {

    static displayName = 'ArticlePage';

    static propTypes = {
        article: React.PropTypes.instanceOf(Article),
        params: React.PropTypes.object.isRequired,
        loadArticle: React.PropTypes.func.isRequired
    };

    componentDidMount() {
        const { loadArticle, params } = this.props;

        loadArticle(params.id);
    }

    render() {
        const { article } = this.props;

        if (!article) {
            return null;
        }

        return (
            <div className="container">
                <ArticleComponent
                    title={article.title}
                    content={article.content}
                    type={article.type}
                />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        article: state.articles.get(props.params.id)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadArticle
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlePage);
