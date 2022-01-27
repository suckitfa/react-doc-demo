### React的特点：

1. 声明式
2. 组件化
3. 一次学习，跨平台编写的 （React Native & Node SSR）



### 1. JSX

为什么要使用JSX?

1. 关注点分离
2. JSX是JS的扩展

**基本语法**:

- JSX语法中`{}` 大括号内可以放置`JS的表达式`

```jsx
const name = 'Bob Evan'
const element = <h1>Hello ,{name}!</h1>
function TestJSX() {
  return element;
}
export TestJSX;
```

- JSX也是一个`JS表达式` ， JSX会被编译为JavaScript的函数调用，并且对其取值后得到JavaScript对象。  也即是说JSX在JS中就像一个变量可以计算（if, while ,for， return 等）。

```js
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
```

- JSX中指定属性： `{}` 或者 引号 

```js
const avatar = {
  url: "http://test.com/img/user.png" 
}
// 两种写法是等效的，第二种适合动态的改变
const userImage = <img src="http://test.com/img/user.png" />
const userImage = <img src={avatar.url} />
```



- JSX中可以进行`组合`: 可以是一个单独的JSX元素也可以几个嵌套组合
- JSX防止注入攻击 ： 可以安全的使用JSX插入用户输入的内容 渲染之前需要进行转义成字符串， 有效防止XSS(cross-site-scripting)

- JSX的转义

```jsx
const element = <h1 className="greeting"> Hello world! </h1> 
// 经过转义之后的内容为
React.createElement(
  type:'h1',
  props: {
  className: 'greeting',
  chidren:'Hello world!'
  }
)
```

### 2. 元素的渲染

```js
// ReactDOM负责更新DOM与React元素保持一致。
ReactDOM.render()
```

更新已有的元素： react元素是不可变对象，保留着某个特定时刻的UI 。只更变化的内容。



### 3. 组件&Props

> 建议组件的开头字母大写，避免React将小写的组件视为原生DOM标签。

组件，从概念上类似于JavaScript函数，接受任意的`入参（即props) `并返回`描述展示内容的React元素`。



组件中可以使用其他的自定义组件。

```js
function App() {
  return (
    <div >
        {/* <TestJSX />
        <TestJSX02 />
        <TestJSX03 /> */}
        {/* <TestRender /> */}
        <TestComponent name="Bob"/>
        <TestClassComponent name="Evan" />
    </div>
  );
}
export default App;
```

关于props， 所有的组件必须像纯函数一样保护它们的props不被修改。





### 4. state & 声明周期

- state是完全私有的，受控于当前的组件 `setState`
  1. 不要直接修改state
  2. state的更新可能是异步的
  3. state的更新可能会被合并
- React中的生命周期
  1. 创建
  2. 挂载
  3. 销毁
- 数据是单向流动的



### 5. 事件处理

- 合成事件