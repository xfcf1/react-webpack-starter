import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home'
import * as HomeActions from '../modules/home'

function mapStateToProps (state) {
  return {
    homeReducer: state.homeReducer
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(HomeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
