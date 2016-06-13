export default class Article extends React.Component {

    static displayName = 'Article';

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired
    };

    render() {
        const { title, content, type } = this.props;

        return (
            <div>
                <span className="label label-success">{type}</span>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        );
    }
}
