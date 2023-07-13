module.exports = function (babel) {
  // 这个types就是@babel/types，可以用来修改AST的节点
  const { types } = babel;
  return {
    visitor: {
      BinaryExpression(path) { //需要处理的节点路径
        let node = path.node;
        let left = node.left;
        let operator = node.operator;
        let right = node.right;
        if (!isNaN(left.value) && !isNaN(right.value) && operator === '+') {
          // binaryExpression 是一个 AST（抽象语法树） 节点类型，表示二元表达式
          const expression = types.binaryExpression('-', left, right);
          // 替换
          path.replaceWith(expression);
        }
      }
    }
  }
}
