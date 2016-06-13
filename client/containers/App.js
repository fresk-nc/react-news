import NavBar from 'components/NavBar';

export default class App extends React.Component {

    static displayName = 'App';

    static propTypes = {
        children: React.PropTypes.node
    };

    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}
