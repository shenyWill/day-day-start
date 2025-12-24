#!/bin/bash

# exit immediately if pipeline/list/(compound command) returns non-zero status
# reference https://www.gnu.org/software/bash/manual/bash.html#The-Set-Builtin
set -e

# 切换node版本
source /etc/profile
echo "node version is $(node -v)"

# 删除node_modules软链接
rm -rf node_modules

# install dependencies
export npm_config_dist_url=https://bnpm.bytedance.net/mirrors/node/
npm install --registry http://bnpm.byted.org

npm run build
