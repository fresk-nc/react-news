export default class NavLink extends React.Component {

    static displayName = 'NavLink';

    static propTypes = {
        onClick: React.PropTypes.func.isRequired,
        active: React.PropTypes.bool.isRequired,
        children: React.PropTypes.node
    };

    _handleLinkClick(event) {
        event.preventDefault();
        this.props.onClick();
    }

    render() {
        const { children, active } = this.props;
        return (
            <li className={active ? 'active' : ''}>
                <a href="#" onClick={this._handleLinkClick.bind(this)}>
                    {children}
                </a>
            </li>
        );
    }
}
