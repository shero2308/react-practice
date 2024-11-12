import PropTypes from 'Prop-types';
function UserGreeting(props){
   
    const WelcomeMessage = <h2 className="WelcomeMessage"> WELCOME {props.username}</h2>
    const LogginMessage = <h2 className="LogginMessage">Loggin karlo bhai</h2>

    return(props.isLoggedIn ? WelcomeMessage : LogginMessage);
   }
UserGreeting.PropTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "username"
}

export default UserGreeting