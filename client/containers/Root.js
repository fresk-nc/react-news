import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends React.Component {

    static displayName = 'Root';

    static propTypes = {
        store: React.PropTypes.object.isRequired,
        history: React.PropTypes.object.isRequired
    };

    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        );
    }
}
