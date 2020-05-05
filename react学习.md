# React

## react 是什么

- React是一个JS库，用来构建用户界面（写HTML，构建web应用）
- 从 MVC 的角度来看，相当于 视图层 V（View） 的内容。

## react 的特点

- 1 声明式： 我们只需要描述页面长什么样子就可以了，React负责更新页面
- 2 基于组件（组件化）
- 3 学习一次，随处使用（Web 、 安卓/ios、vr ...）

## React 的基本使用

- 1 安装：npm i react react-dom
- 2 引入 react 和 react-dom 两个js文件（注意：引入顺序，react在前，react-dom 在后）
- 3 创建 React 元素
  - `const h1 = React.createElement('h1', null, '子节点')`
- 4 渲染创建好的 React 元素，到页面中
  - `ReactDOM.render(h1, document.getElementById('root'))`

## React.createElement()方法

- 创建react元素 

```javascript
const h1 = React.createElement(
  'h1',
  {
    id: 'title',
    className: 'cls'
  },
  'Hello React',
  React.createElement('span', null, '这是一个span')
)
//同vue.createElement
```

