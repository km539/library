docker commands
```
docker-compose up -d
docker-compose down

docker exec -it front-end /bin/bash
docker exec -it express /bin/bash
```

access db 
```
docker exec -it postgres psql -U postgres -d postgres
```