import { Link } from 'react-router';

export default class ArticlesItem extends React.Component {

    static displayName = 'ArticlesItem';

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired
    };

    render() {
        const { title, content, id, type } = this.props;

        return (
            <div className="col-xs-4">
                <span className="label label-success">{type}</span>
                <h4><Link to={`/articles/${id}`}>{title}</Link></h4>
                <p>{content}</p>
            </div>
        );
    }
}
