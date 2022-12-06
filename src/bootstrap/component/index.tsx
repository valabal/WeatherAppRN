import {connect} from 'react-redux';
import Bootstrap from './view';
import {setErrorMessage} from '@my-module/alert/alertAction';
import {RootState} from '@my-config/store';

const mapStateToProps = (state: RootState) => ({
  errorAllert: state.alert.message,
});

const mapDispatchToProps = {
  setErrorMessage: (payload: string) => setErrorMessage(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);
