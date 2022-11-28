import {connect} from 'react-redux';
import Bootstrap from './view';
import {setErrorMessage} from '@my-module/alert/alertAction';

const mapStateToProps = (state) => ({
  errorAllert: state.alert.message,
});

const mapDispatchToProps = {
  setErrorMessage: (payload) => setErrorMessage(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);
