# React

## 函数组件

- 就是使用 JS 中的函数创建的组件，叫做函数组件。

```js
const Hello = () => <div>这是通过箭头函数创建的组件</div>
```

- 约定1：必须有返回值
  - 返回值可以为null，表示不渲染任何内容
  - 如果想要渲染内容，一般就是返回 JSX

- 约定2：组件名称必须以大写字母开头
  - 用来区分普通的 react元素 和 react组件

- 约定3：使用函数名称作为组件的标签名称来渲染
  - `ReactDOM.render(<Hello />, root)`

## ES6中的class

- 语法：

```js
class Person {
  // 添加属性：
  constructor(age) {
    this.name = 'jack'

    this.age = age
  }

  // 添加实例方法
  say() {}
}

const p = new Person(30)
```

- 继承：

```js
// 父类
class Person {
  constructor() {
    this.name = 'zhangsan'
  }
}

// 子类
class Chinese extends Person {
  constructor() {
    // 注意：手动调用super()
    // super 即 父类中的构造函数（constructor）
    super()

    // this. ....
  }
}

// 创建子类的实例对象，此时，c 就可以直接使用父类中的属性或方法了
const c = new Chinese()
// c => { name: 'zhangsan' }
```

## 类组件

- 类组件：通过 ES6 中的class创建的组件，叫做 类组件
- 函数组件中的约定都适用于类组件
- 约定：类组件必须得继承自 React.Component 父类
- 约定：类组件中必须提供一个 render 方法，通过 render 方法的返回值来指定要渲染的内容

```js
// 类组件
class Hello extends React.Component {
  // render 方法是 React 中固定的一个方法名称
  render() {
    // return null
    return <h1>这是我的第一个 class 组件</h1>
  }
}
```

## 将组件抽离到独立的JS文件中

```js
// 注意：不管是函数组件还是类组件，或者使用 JSX ，都需要导入 React！！！
import React from 'react'

// 创建 class 组件
// class Hello1 extends React.Component {
//   render() {
//     return <div>这是一个独立的组件</div>
//   }
// }

// JSX -> React.createElement()
const Hello1 = () => <div>这是一个独立的组件</div>

// 导出组件
export default Hello1
```

## 绑定事件

- 1 给 JSX 添加 onClick
- 2 在 {} 中，指定事件处理程序的名称（也就是一个函数名称）
  - 注意：千万不要调用

```js
const handleClick = () => {}

<button onClick={handleClick}></button>
```

```js
// 在类组件中绑定事件
class Hello extends React.Component {
  // 事件处理程序
  handleClick() {
    console.log('你点我！')
  }

  render() {
    return <button onClick={this.handleClick}>点我 - class</button>
  }
}
```

## 事件对象

- 如何获取到事件对象？通过事件处理程序的参数 e 来获取到
- React 中的事件对象是一个 合成事件。
- 使用方式，与原生DOM中的使用方式相同。

## 有状态组件和无状态组件

- 有状态组件：class（类）组件
  - 职责（什么时候使用）：负责更新UI（页面），也就是如果页面中的内容，需要变化
  - 动
- 无状态组件：函数组件
  - 职责：负责展示内容
  - 静

## class组件中的状态

- 状态（state）即数据
- 如何初始化状态？

```js
class Hello extends React.Component {
  constructor() {
    super()

    // 状态初始化
    this.state = {
      count: 0
    }
  }

  // 简化语法：
  // state = {
  //   count: 66
  // }

  // 在 JSX 中使用状态
  render() {
    return <div>计数器：{ this.state.count }</div>
  }
}
```

## setState

- 作用：1 修改state 2 更新UI（页面）
- 语法：

```js
this.setState({
  count: this.state.count + 1
})
```

- 注意：不要直接修改 state ！！！
  - 错误演示：`this.state.count += 1`！！！

## 事件处理程序中this指向问题

- 1 箭头函数：

```javascript

// 事件处理程序中，我们要的 this 是当前组件的实例对象（它是React在渲染组件时创建）
class Hello extends React.Component {
  // 简化语法：
  state = {
    count: 0
  }

  handleClick() {
    this.setState({ ... })
  }

  render() {
    console.log('render：', this)
    return (
      <div>
        计数器：{this.state.count}{' '}
        <button onClick={() => this.handleClick()}>+1</button>
      </div>
    )
  }
}
```

- 2 使用 bind 方法解决：

```javascript

constructor() {
  this.handleClick = this.handleClick.bind(this)
}

render() {
  // 此处的 handleClick 就是绑定 this 后的事件处理程序了
  return (
    <button onClick={this.handleClick}></button>
  )
}
```

- 3 利用 class 实例方法的箭头函数形式：（推荐）

```js
class Hello extends React.Component {
  handleClick = () => {
    this.setState({ ... })
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}
```

## 受控组件

- 受控组件：其值收到 react 控制的表单元素，叫做受控组件

```js
state = {
  txt: ''
}

changeTxt = e => {
  this.setState({
    txt: e.target.value
  })
}

render () {
  return <input type="text" value={this.state.txt} onChange={this.changeTxt} />
}
```

