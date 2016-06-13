import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadArticles } from 'actions';
import Nav from 'components/Nav';
import VisibleArticlesList from 'containers/VisibleArticlesList';

class ArticlesPage extends React.Component {

    static displayName = 'ArticlesPage';

    static propTypes = {
        loadArticles: React.PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <hr/>
                <VisibleArticlesList />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadArticles
    }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(ArticlesPage);
