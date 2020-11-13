### git约定式提交

约定式提交：每次使用git commit 的时候都需要写commit message,如果message style是按照固定的模版格式书写，对于后期的维护和编写changelog都有巨大的好处。
而且现在的很多自动生成changelog的工具，都是建立在约定式提交的基础之上。

### 约定式提交校验配置

约定式提交不需要任何的配置，只需要严格遵守其规范就可以了。
为了保证每次提交的commit message都是遵守conventional commit spec所以添加了校验配置.

### 约定式提交工具
约定式提交使用交互式提交工具（例如： commitizen），使用工具能够保证约定式提交个格式是满足规范的。

```shell
yarn add commitizen -D
```


#### commitizen的适配器cz-conventional-changelog
commitizen只是一个提交的工具，只有添加了约定格式的适配器才能按照固定格式进行交互式提交，否则就和普通的git commit一样了。（还有其他适配器可选，请参考官方文档）不同的适配器，提供的约定标准有差异。cz-conventional-changelog用来规范提交信息。

```shell
yarn add cz-conventional-changelog -D
```

```json
// package.json配置
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "scripts": {
    "commit": "git-cz"
  }
}
```

#### 说明

"build", // 主要目的是修改项目构建系统(例如 gulp，webpack，rollup 的配置等)的提交
"chore", // 其他修改, 比如构建流程, 依赖管理
"ci", // 主要目的是修改项目继续集成流程(如Travis，Jenkins，GitLab CI，Circle等)
"docs", // 文档更新
"feat", // 新功能
"fix", // 修复 bug
"perf", // 性能优化
"refactor", // 重构代码(既没有新增功能，也没有修复bug)
"revert", // 回滚某个更早之前的提交
"style", // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
"test" // 测试


