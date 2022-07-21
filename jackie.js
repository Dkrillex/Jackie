/**Git使用步骤：
创建人：Dkrillex
修改时间：2022-07-21 21:33
创建说明：相关代码以及操作方便进行使用以及后面代码需要同步问题
*/
/** !!!!WARNING!!!
部署后要先做远程仓库对接 然后先拉取 再提交
git branch --set-upstream-to=origin/master master
*/
//shell 查看代码操作
history
//文件创建账号密码等
git config --global user.name "Dkrillex"
git config --global user.email "1658176374@qq.com"
//检查文件状态
git status 
//查看当前分支
git branch
//初始化文件生成git仓库
git init
//添加代码到缓存区
git add . 
//提交代码到本地仓库（git里面）
git commit -m "first commit"
//创建分支
git remote add origin https://github.com/Dkrillex/Jackie_Teemlink.git

git branch --set-upstream-to=origin/master master
//查看远程库信息
git remote 
git remote -v
//拉代码下来到工作区
git pull https://github.com/Dkrillex/Jackie_Teemlink.git master
//拉代码到远程仓库
git push https://github.com/Dkrillex/Jackie_Teemlink.git master
//---代替以上2句 [origin:远程仓库/master：本地分支]
git push -u origin master
//--查看git提交日志
git log --graph --oneline --all
//合并分支代码
git merge --no-ff master    
//允许不关联历史代码提交
git xxxxxxxxxxx --allow-unrelated-histories

//拉取代码出现合并冲突
/**
git reset就是当我们提交了错误的内容后进行回退使用的命令
git reset HEAD就是回退到当前版本
*/
git reset --hard
//拉取代码
git push -u origin master


//改名后代码分支
/**
The default branch has been renamed!
master is now named main

If you have a local clone, you can update it by running the following commands.
*/
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a


//强制提交 -f
git push -f

