import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CounterView from './CounterView';
import {NavigationActions} from 'react-navigation';
import {counterStateActions} from '../counter/CounterState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      counterStateActions: bindActionCreators(counterStateActions, dispatch)
    };
  }
)(CounterView);
