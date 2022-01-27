function formatName(user) {
    return user.firtName + ' ' + user.lastName;
}
function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>
    } else {
        return <h1>Hello, Stranger!</h1>
    }
}
const user = undefined;

function TestJSX03() {
    return getGreeting(user)
}

export default TestJSX03;