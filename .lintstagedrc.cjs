/*
 * @Description: 
 * @Author: 415156969@qq.com
 * @Date: 2023-12-22 14:09:43
 * @LastEditTime: 2023-12-22 14:09:55
 */
module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
    '*.{html,css,scss,vue}': ['stylelint --fix', 'prettier --write', 'git add'],
  };