function TestList({numbers}) {
    const listItems = numbers.map((item , index) => {
        return (
            <li key={(index+1).toString()}>item = {item}, index = {index}</li>
        )
    })
    return (
        <ul>
            {listItems}
        </ul>
    )
}
export default TestList;