## Folder Structure
```
LIBRARY_SYSTEM
├── READEME.md
├── docker-compose.yml
├── node
│   ├── DB
│   ├── Dockerfile
│   ├── app.ts
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   └── server.ts
└── web
    ├── README.md
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── public
    └── src
```

## Docker Service
1. node container - node folder
2. postgres container 
3. web container - web folder

## Command

### excutes the commands in a root directory
```
docker-compose up --build
```

```
docker-compose down
```

## Resource
[Node.js+PostgresSQL in a docker enviroment](https://qiita.com/basio/items/6e32d6badd2a002de72c)

[Docker commands](https://zenn.dev/suzuki_hoge/books/2022-03-docker-practice-8ae36c33424b59/viewer/2-2-container-basic-operation)