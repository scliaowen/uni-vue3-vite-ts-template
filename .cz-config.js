/*
 * @Description: 
 * @Author: 415156969@qq.com
 * @Date: 2023-12-22 14:50:30
 * @LastEditTime: 2023-12-22 18:03:38
 */
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: '✨ feat: 新功能' },
    { value: 'style', name: '🎀 style: 样式调整' },
    { value: 'fix', name: '🔧 fix: 修复Bug' },
    { value: 'docs', name: '✏️  docs: 文档变更' },
    { value: 'perf', name: '⚡ perf: 性能优化' },
    { value: 'test', name: '🙏 test: 测试相关' },
    { value: 'chore', name: '🚀 chore: 重新打包或更新依赖工具' },
    { value: 'refactor', name: '♻️  refactor: 重构代码' },
    { value: 'ci', name: '🛠  ci: 更改持续集成文件和脚本' },
    { value: 'revert', name: '⚠️  revert: 代码回退' },
    { value: 'WIP', name: '💥 WIP: Work in progress' },
    { value: 'custom', name: '➕ custom:   自定义修改' },
  ],
  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    { name: 'components', description: '组件相关' },
    { name: 'hooks', description: 'hook 相关' },
    { name: 'utils', description: 'utils 相关' },
    { name: 'element-ui', description: '对 element-ui 的调整' },
    { name: 'styles', description: '样式相关' },
    { name: 'deps', description: '项目依赖' },
    { name: 'config', description: '配置相关' },
    { name: 'other', description: '其他修改' },
    { name: 'custom', description: '以上都不是？我要自定义' },
  ],

  // 步骤消息提示
  messages: {
    type: '确保本次提交遵循规范！\n选择你要提交的类型:',
    scope: '\n选择一个 scope(可选):',
    customScope: '请输入修改范围（可选）：',
    subject: '请输入变更描述（必填）：',
    body: '填写更加详细的变更描述（可选）：',
    footer: '请输入要关闭的 ISSUES （可选）：',
    confirmCommit: '确认提交？'
  },
  // 允许自定义范围
  allowCustomScopes: true,
  // 要跳过的问题
  skipQuestions: ['footer'],

  // subject文字默认值是72
  subjectLimit: 100
}
