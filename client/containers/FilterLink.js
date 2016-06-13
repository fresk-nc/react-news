import { connect } from 'react-redux';

import { setVisibilityFilter } from 'actions';
import NavLink from 'components/NavLink';

function mapStateToProps(state, props) {
    return {
        active: props.filter === state.visibilityFilter
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(props.filter));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLink);
