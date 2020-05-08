# React

## 非受控组件

- 借助于 ref 就可以通过 非受控组件 的方式，来获取到的表单元素的值。
- ref 的作用：获取DOM对象或组件。

```js
this.ref = React.createRef()

<input ref={this.ref} />

文本框的值：
this.ref.current.value
```

## props的使用

- 作用：接收到传递给组件中的属性
- 在函数组件中如何获取到 props？ 通过函数的参数
- 在 类组件 中如何获取到 props？ 通过 this.props 来获取
- props 是一个对象！！！
- 特点：只读！！！（ 只能读取 props 对象中的属性，而不能修改 props 对象中的属性 ）
- 可以给组件传递任何类型的数据。
- 注意：如果在 class 组件中，手动添加了 constructor ，那么，就应该通过参数获取到 props， 然后传递给 super，这样，才能够在 constructor 中，获取到 props！！！

```js
const Hello = props => {
  //props 就表示传递给组件的属性
}

<Hello name="jack" age={19} colors={['red']} />


// 类组件：
class Hello extends React.Component {
  constructor(props) {
    super(props)
    // console.log('在构造函数中，获取到 props ', this.props)
  }

  render() {
    console.log('class组件中获取到props：', this.props)
    return (
      <div>
        <h1>props：{this.props.age}</h1>
        {this.props.colors.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    )
  }
}
```

## 组件通讯

### 父到子

- 1 父组件中提供状态
- 2 在子组件标签上添加属性，值为 父组件中的状态
- 3 子组件中通过 props 来接收父组件中传递过来的数据

```js

// 父组件：
class Parent extends React.Component {
  // 提供数据
  state = {
    lastName: '王'
  }

  render() {
    return (
      <div className="parent">
        <h1>父组件：</h1>
        {/* 1 通过属性给子组件传递数据 */}
        <Child name={this.state.lastName} />
      </div>
    )
  }
}

// 子组件：
// 2 子组件中通过 props 接收数据
const Child = props => {
  return <p className="child">这是子组件：{props.name}</p>
}
```

### 子到父

- 思路：父组件提供一个事件（函数），让子组件调用；子组件调用的时候，将数据作为参数的传递，父组件中通过事件（函数）的参数，就拿到子组件中的数据了。
- 1 父组件提供事件
- 2 将事件通过props传递给子组件
- 3 子组件中通过props接收到父组件中传递过来的事件
- 4 子组件调用该事件，将数据作为参数传递

- 注意点：父组件提供的方法中 this 执行问题。
  - 为什么会有这个问题？因为这个方法不是父组件自己调用的，是由其他组件调用的，所以，需要处理this指向。

```js
// 1 提供事件（回调函数，）
//  事件是子组件调用的，因此，先要通过 props 传递给子组件
// 2 将事件传递给子组件
class Parent extends React.Component {
  state = {
    msg: ''
  }

  getChildMsg = data => {
    console.log('父组件中的方法调用了', data)
    this.setState({
      msg: data
    })
  }

  // 注意：this指向问题，因为这个方法是由子组件调用的，所以，应该提前处理好 this 指向！
  /* getChildMsg(data) {
    console.log('父组件中的方法调用了', data, this)
    this.setState({
      msg: data
    })
  } */

  render() {
    return (
      <div className="parent">
        <h1>父组件：{this.state.msg}</h1>
        <Child fn={this.getChildMsg} />
      </div>
    )
  }
}

// 子组件：
// 3 子组件中通过 props 接收到父组件中传递过来的事件
// 4 子组件中调用传递过来的事件， 将数据作为事件的参数传递
const Child = props => {
  // console.log(props)
  const handleClick = () => {
    // 调用
    props.fn('123')
  }

  return (
    <p className="child">
      这是子组件：
      <button onClick={handleClick}>发送数据给父组件</button>
    </p>
  )
}
```

### 兄弟组件

- 思路：**状态提升**，也就是：将两个兄弟组件之间的共享数据，放在父组件中。
- 父组件的职责：1 提供共享数据（state） 2 提供修改状态的方法
- 例子：如果 子组件2 要传递数据给 子组件1
- 子组件1：只要通过 props 接收到父组件中传递过来的数据（父 -> 子）
- 子组件2：调用父组件中修改状态的方法（子 -> 父）
  - 但是，需要先通过 props 获取到父组件中传递过来的方法

```js
// 父组件
// 1 提供状态
// 2 提供操作状态的方法
class Parent extends React.Component {
  state = {
    msg: '默认值'
  }

  updateMsg = data => {
    this.setState({
      msg: data
    })
  }

  render() {
    return (
      <div className="parent">
        这是父组件：
        <Child1 msg={this.state.msg} />
        <Child2 updateMsg={this.updateMsg} />
      </div>
    )
  }
}

// 子组件1
// 3 接收数据（数据由父组件提供）
class Child1 extends React.Component {
  render() {
    return <div className="child">这是子组件1：{this.props.msg}</div>
  }
}

// 子组件2：
// 4 在父组件中传递事件给子组件
// 5 给按钮绑定单击事件
// 6 调用父组件中的事件来更新数据
class Child2 extends React.Component {
  // 单击事件
  handleClick = () => {
    // 调用父组件的事件
    this.props.updateMsg('子组件2222222222222222222222')
  }

  render() {
    return (
      <div className="child2">
        这是子组件2：
        <button onClick={this.handleClick}>传递数据给 Child1</button>
      </div>
    )
  }
}
```

## 评论列表案例

- 分析：因为 CommentList 和 CommentForm 这两个子组件中，都要用到 评论列表 数据，所以，就利用 状态提升 的思想，将评论列表数据放在了 父组件Comment 中。
  - 父组件的两个职责：1 提供评论列表数据状态（list） 2 提供修改状态的方法（updateComment）

- 功能1：渲染评论列表
  - 利用 父->子 的通讯，将父组件中的 list 传递给 子组件；子组件中通过 props 接收

```js
// 父组件中渲染子组件：
<CommentList list={this.state.list} />

// 子组件中：
<ul>
  {props.list.map(item => (
    <li key={item.id}>
      <h3>评论人：{item.name}</h3>
      <p>评论内容：{item.content}</p>
    </li>
  ))}
</ul>
```

- 功能2：添加评论
  - a. 通过受控组件的方式，来获取到评论人和评论内容
  - b. 将用户输入的内容，添加到 list 中
    - 因为 list 是由父组件提供的，所以，由父组件提供修改状态的方法（updateComment）；通过 props 传递给子组件后，由子组件调用

```js
// 父组件中渲染子组件：
<CommentForm updateComment={this.updateComment} />

// 子组件中：
// 发表评论
addComment = () => {
  const { name, content } = this.state
  // ...

  this.props.updateComment(name, content)

  // ...
}
```

## Context

- 使用场景：跨组件传递数据

1. 如果两个组件是远方亲戚（比如，嵌套多层）可以使用Context实现组件通讯
2. Context提供了两个组件：Provider 和 Consumer
3. Provider组件：用来提供数据
4. Consumer组件：用来消费数据

```js
const { Provider, Consumer } = React.createContext()

<Provider value={this.state.msg}>
  <div className="parent">
    这是父组件：
    <Child1 />
  </div>
</Provider>

// Child1 -> Child2 -> Child3

// Child3
// data 就是 Provider 中提供的 value
<Consumer>{data => <p>接收到的数据为：{data}</p>}</Consumer>
```

## 组件的 children 属性

- 作用：获取组件标签的子节点
- 获取方式： props.children
- children 与普通的 props 属性相同，可以是任意值。

```js
<Hello>
  我是子节点 -> 这就是 children 属性的内容。
</Hello>
```

## props 校验

- 场景：给组件添加 props 校验，来增强组件的健壮性。
  - 约定：封装公共组件的时候，都添加 props 校验

- 1 安装：`yarn add prop-types`
- 2 导入 `import PropTypes from 'prop-types'`
- 3 给组件名称添加 `propTypes` 属性，值是一个对象
- 4 对象的键就是要校验的 props 名称，值是 `PropTypes.array` 等，从PropTypes中获取到的校验规则

```js
const Parent = () => { ... }

// 2 给组件添加 props 校验
Parent.propTypes = {
  // 规定 colors 属性的类型为：数组（array），如果将来使用组件的时候，传入的 colors 属性类型不是 array ，就会通过警告来告诉使用者。
  colors: PropTypes.array,

  gender: PropTypes.oneOf(['male', 'female']).isRequired
}
```

## props 默认值

- 可以通过 组件名.defaultProps = {} 来给组件添加 props 的默认值。

```js
const Parent = () => { ... }

// 添加 props 的默认值：
Parent.defaultProps = {
  gender: 'male'
}
```
