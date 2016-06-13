import ArticlesItem from 'components/ArticlesItem';

export default class ArticlesList extends React.Component {

    static displayName = 'ArticlesList';

    static propTypes = {
        articles: React.PropTypes.object.isRequired
    };

    _renderRow(items) {
        return (
            <div className="row">
                {items.map((article) => (
                    <ArticlesItem
                        key={article.id}
                        title={article.title}
                        id={article.id}
                        content={article.content}
                        type={article.type}
                    />
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.articles.map((data) => this._renderRow(data))}
            </div>
        );
    }
}
