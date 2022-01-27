function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName:'Harper', 
    lastName:'Perez'
}

const element = (
    <div>
        {/* jsx表达式 */}
        Hello , {formatName(user)}
    </div>
)

function TestJSX02() {
    return element;
}

export default TestJSX02;