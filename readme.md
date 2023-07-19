## 本地路径跳转及页面控制修改程序
这是一个程序，它可以监听本地的一个端口，并支持通过访问它的路径来跳转的功能，并且它的跳转内容通过可视化的方式方便简单的进行设置。它可以安放在本地pc上，或者可以安放在服务器上，用于方便的跳转。
### 安装和配置
1 克隆整个文件或者直接下载zip文件解压

2 终端进入文件夹，运行下方命令下载安装运行库
```shell
npm i
```
3 打开config文件夹，修改server.json和user.json文件，server.json的内容是服务器的配置，user.json是用户的配置文件，可以配置多个用户

4 运行下方命令运行项目
```shell
npm run st
```
### 使用方法
可以直接访问 [http(s)://localhost:配置端口/adm](#) 这个地址来访问配置网页，需要输入你配置好的用户名和密码，输入正确后可以控制删除或者添加索引。

配置好了之后可以通过访问 [http(s)://localhost:配置端口/设置的索引](#) 来跳转到你设置的链接或目的地。

所以如果http协议设置成80端口或者https协议设置成443端口可以无需输入端口号从而简短链接，当然也可以不使用localhost访问，设置在服务器上并配置好域名可以直接访问 [http(s)://域名:配置端口/设置的索引](#) 来跳转。

配置修改最大有5s的延迟，并且在修改出现错误控制台会有错误提示。

另外在控制台有手动命令可用，虽然当前只有一个手动更新，但是有这个东西，你可以自己修改来使用控制一些命令。

### 更新注意

## 1.0.2-1.0.3更新
数据需要进行转化，转化可以直接运行change文件夹中的change1函数，需要进入change1中修改姓名字符串，之后再运行。
```shell
cd change
node change01.js
```