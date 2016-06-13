import FilterLink from 'containers/FilterLink';

export default class Nav extends React.Component {

    static displayName = 'Nav';

    render() {
        return (
            <ul className="nav nav-pills">
                <FilterLink filter="all">All</FilterLink>
                <FilterLink filter="sport">Sport</FilterLink>
                <FilterLink filter="world">World</FilterLink>
            </ul>
        );
    }
}
