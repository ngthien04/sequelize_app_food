Open docker
Open table plus
Create new a database in table plus
Right click Tables => import => From SQL dump.. => select file **db_sequelize_app_food.sql**
Import file **Sequelize_app_food.postman_collection.json** in Postman

Server sẽ chạy tại: `http://localhost:8080`
1. Toggle Like/Unlike
**POST:** `http://localhost:8080/restaurant/like`
2. Get Likes By Restaurant
**GET:** `http://localhost:8080/restaurant/likes-by-res/:res_id`
3. Get Likes By User
**GET:** `http://localhost:8080/restaurant/likes-by-user/:user_id`
4. Rate Restaurant
**POST:** `http://localhost:8080/restaurant/rate`
5. Get Rates By Restaurant
**GET:** `http://localhost:8080/restaurant/rates-by-res/:res_id`
6. Get Rates By User
**GET:** `http://localhost:8080/restaurant/rates-by-user/:user_id`
7. Create Order
**POST:** `http://localhost:8080/user/order/:food_id`
8. Get Orders By User
**GET:** `http://localhost:8080/user/orders/:user_id`
