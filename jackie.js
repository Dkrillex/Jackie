/**Git使用步骤：
创建人：Dkrillex
创建时间：2022-07-09
创建说明：相关代码以及操作方便进行使用以及后面代码需要同步问题
*/
//文件创建账号密码等
git config --global user.name "Dkrillex"
git config --global user.email "1658176374@qq.com"
//初始化文件生成git仓库
git init
//添加代码到缓存区
git add . 
//提交代码到本地仓库（git里面）
git commit -m "first commit"
//创建分支
git branch --set-upstream-to=origin/Jackie_Teemlink master
git remote add origin https://github.com/Dkrillex/Jackie_Teemlink.git
//拉代码下来到工作区
git pull https://github.com/Dkrillex/Jackie_Teemlink.git master
//拉代码到远程仓库
git push https://github.com/Dkrillex/Jackie_Teemlink.git master
//---代替以上2句
git push -u origin master
//--查看git提交日志
git log --graph --oneline --all
//合并分支代码
git merge --no-ff master 
//允许不关联历史代码提交
--allow-unrelated-histories