#### 老版本的webpack和rollup，都不能tree-shaking,都是uglify去做的
#### 新版本的webpack和rollup，已经自动实现了tree-shaking，而且做的更好

## tree-shaking的目的

tree-shaking的目标只有一个，去除无用代码，缩小最终的包体积，无用的代码主要有三类：

- 代码不会被执行，不可达到
- 代码执行的结果不会被用到
- 代码只会影响到死变量（只读不写）


## tree-shaking为什么需要依赖ES6 Module

ES6 Module的特点：

- 只能作为模块顶层语句出现
- import的模块名只能是字符串常量
- import之后是不可修改的

 ES6 模块依赖是确定的，和运行时的状态无关，因此可以进行静态分析，这就是Tree-Shaking的基础。


 说明文档： [tree-shaking](https://juejin.cn/post/7169004126469914654)