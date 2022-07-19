test.20220709
Dkrillex
git config --global user.name "Dkrillex"
git config --global user.email "1658176374@qq.com"
git init
git add . 
git commit -m "first commit"
git branch --set-upstream-to=origin/Jackie_Teemlink master
git remote add origin https://github.com/Dkrillex/Jackie_Teemlink.git
git pull https://github.com/Dkrillex/Jackie_Teemlink.git master
git push https://github.com/Dkrillex/Jackie_Teemlink.git master
//---代替以上2句
git push -u origin master
