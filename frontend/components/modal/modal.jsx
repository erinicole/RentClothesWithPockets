import React  from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignInFormContainer from '../session_form/sign_in_form_container';
import JoinNowFormContainer from '../session_form/join_now_form_container';
import ShoppingCartContainer from '../shopping_cart/shopping_cart_container';


const Modal = ({modal, closeModal}) => {
    
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case 'signin':
            component = <SignInFormContainer />;
            break;
        case 'joinnow':
            component = <JoinNowFormContainer />;
            break;
        case 'shoppingcart':
            component = <ShoppingCartContainer />;
            break;
        default:
            return null;
    }


    return (

        <div className='modal-background' onClick={closeModal}>
            <div className='modal=child' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return ({
        modal: state.ui.modal
    })
}

const mapDispatchToProps = dispatch => {
    return({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
