// 创建了一个ListItem组件
function ListItem({num}){
    return <li>{num}</li>
}


function NumberList({numbers}) {
    const ListItems = numbers.map(num => <ListItem key={num.toString()} num={num}/>) 
    return(
        <ul>
            {ListItems}
        </ul>
    )
}

function TestListWithPropKey() {
    return <NumberList numbers={[1,2,3,4,5,6]}/>
}

export default TestListWithPropKey;