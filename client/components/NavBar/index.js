import { Link } from 'react-router';

export default class NavBar extends React.Component {

    static displayName = 'NavBar';

    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News</Link>
                </div>
            </div>
        );
    }
}
