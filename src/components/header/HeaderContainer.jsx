import React from "react";
import Header from "./Header";
import {connect} from "react-redux";


const HeaderContainer = props => <Header city={props.city}/>;

let mapStateToProps = (state) => {
    return {
        city: state.cityPage.city
    }
}

export default connect(mapStateToProps, {})(HeaderContainer)
