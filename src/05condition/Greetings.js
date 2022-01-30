function UserGreeting(props ) {
    return(
        <h1>Welcome Back!</h1>
    )
}


function GuestGreeting(props) {
    return(
        <h1>
            Please Sign up.
        </h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

export default Greeting;