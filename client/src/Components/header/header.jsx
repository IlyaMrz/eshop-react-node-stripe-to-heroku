import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDowndrop from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled';
import { signOutStart } from '../../redux/user/user.actions';

const Header =({ currentUser, hidden, signOutStart1 }) => (

    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/'>HOME</OptionLink>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={signOutStart1}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
         <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDowndrop />}
    </HeaderContainer>
);

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart1: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);