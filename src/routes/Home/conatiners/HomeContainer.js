import { connect } from 'react-redux'
import { setName } from '../models/home'
import Home from "../components/Home";

const mapStateToProps = (state) => ({
    name: state.home.name
});
const mapActionCreators = {
    setName
}

export default connect(mapStateToProps, mapActionCreators)(Home)