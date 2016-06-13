import Root from 'containers/Root';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

ReactDOM.render(
    <Root store={store} history={browserHistory} />,
    document.getElementById('root')
);
