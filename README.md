# OneReader SDK

一个简洁的内容阅读展示 SDK 示例，用于模拟 ONE·一个 类型的每日阅读内容展示结构。

## 功能

- 渲染文章标题
- 显示作者信息
- 内容排版展示
- 支持清空容器

## 使用方法

在 HTML 中引入：

<script src="sdk/one-reader-sdk.js"></script>

然后：

const sdk = new OneReaderSDK(container);
sdk.renderArticle({
  title: "标题",
  author: "作者",
  content: "正文内容"
});

## 可扩展方向

- 夜间模式
- 字体大小调节
- 分页加载
- Markdown 渲染支持
