import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Test from '../components/Test'
import * as TestActions from '../modules/test'

function mapStateToProps (state) {
  return {
    homeReducer: state.homeReducer,
    testReducer: state.testReducer
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(TestActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
