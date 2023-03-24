# IntersectionObserver

`IntersectionObserver API` 可以监听dom元素在离开和进入页面时候的动作

# 虚拟滚动的思路

1. 最完成使用一个`scroll-container`的盒子包起来，设置定高，这个高度就是`list`的滚动的盒子
2. 在`scroll-container`的盒子里面增加一个`scroll-content`的盒子，这个盒子的高度就是总共要滚动的`list`的总高度，比如每个`item 50px`，假设一共有10000个`item`，那这个盒子高度就是`500000px`，当然，因为`IntersectionObserver API`的缘故，也可以自适应
3. 先初始化传入需要展示的例如20个`item`,然后当第一个`item`离开的时候，第21个`item`就进入，以此类推