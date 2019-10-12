git clone https://github.com/<your-username>/my-bucket
cd my-bucket
'{ version: "1.0", url: "https://gist.github.com/lukesampson/6446238/raw/hello.ps1", bin: "hello.ps1" }' > hello.json
git add .
git commit -m "add hello app"
git push

//

scoop bucket add my-bucket https://github.com/<your-username>/my-bucket

scoop bucket list # -> you should see 'my-bucket'
scoop search hello # -> you should see hello listed under, 'my-bucket bucket:'
scoop install hello
hello # -> you should see 'Hello, <windows-username>!'

https://github.com/rasa/scoop-directory