# React

## react 是什么

- React是一个JS库，用来构建用户界面（写HTML，构建web应用）
- 从 MVC 的角度来看，相当于 视图层 V（View） 的内容。

## react 的特点

- 1 声明式： 我们只需要描述页面长什么样子就可以了，React负责更新页面
- 2 基于组件（组件化）
- 3 学习一次，随处使用（Web 、 安卓/ios）

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

## React初始化项目 命令

1. `npx create-react-app 项目名`

2. `npm start/yarn start`启动项目(先进入项目目录)

   

## JSX

- createElement不直观，效率不高
- 故使用JSX （在js中写HTML格式代码）

### JSX注意点

1. JSX属性名：驼峰命名
2. class  `=>` className
3. 如果元素没有子节点 , 可以使用`单标签`结束 `<div />`
4. 使用`()`来包裹住JSX代码 , 避免自动插入元素

### JSX中使用js表达式

1. 使用 `{}`  如:  `<div> 'hellow' { name } </div>`
2. 原则上可以在`{}`中使用任何的JS表达式
3. 不能再`{}`中使用 `语句` 如: `if`  `for`  ...
4. `{}`中不能使用对象
5. 可以在`{}`继续使用JSX