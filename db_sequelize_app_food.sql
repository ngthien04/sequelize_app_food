/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `food`;
CREATE TABLE `food` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `desciption` varchar(255) DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  PRIMARY KEY (`food_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `food_type` (`type_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `food_type`;
CREATE TABLE `food_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `like_res`;
CREATE TABLE `like_res` (
  `like_res_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `res_id` int DEFAULT NULL,
  `date_like` datetime DEFAULT NULL,
  `dis_like` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`like_res_id`),
  KEY `user_id` (`user_id`),
  KEY `res_id` (`res_id`),
  CONSTRAINT `like_res_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `like_res_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `restaurant` (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `orders_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `food_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `arr_sub_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orders_id`),
  KEY `user_id` (`user_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `rate_res`;
CREATE TABLE `rate_res` (
  `rate_res_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `res_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `date_rate` datetime DEFAULT NULL,
  PRIMARY KEY (`rate_res_id`),
  KEY `user_id` (`user_id`),
  KEY `res_id` (`res_id`),
  CONSTRAINT `rate_res_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `rate_res_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `restaurant` (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE `restaurant` (
  `res_id` int NOT NULL AUTO_INCREMENT,
  `res_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desciption` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sub_food`;
CREATE TABLE `sub_food` (
  `sub_id` int NOT NULL AUTO_INCREMENT,
  `sub_name` varchar(50) DEFAULT NULL,
  `sub_price` float DEFAULT NULL,
  `food_id` int DEFAULT NULL,
  PRIMARY KEY (`sub_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `sub_food_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO users (user_id, full_name, email, password) VALUES
(1,'User 1','u1@gmail.com','123456'),
(2,'User 2','u2@gmail.com','123456'),
(3,'User 3','u3@gmail.com','123456'),
(4,'User 4','u4@gmail.com','123456'),
(5,'User 5','u5@gmail.com','123456'),
(6,'User 6','u6@gmail.com','123456'),
(7,'User 7','u7@gmail.com','123456'),
(8,'User 8','u8@gmail.com','123456'),
(9,'User 9','u9@gmail.com','123456');

INSERT INTO food_type (type_id, type_name) VALUES
(1,'Món chính'),
(2,'Đồ uống');

INSERT INTO restaurant (res_id, res_name, image, desciption) VALUES
(1,'Nhà hàng 1','res1.jpg','Mô tả 1'),
(2,'Nhà hàng 2','res2.jpg','Mô tả 2'),
(3,'Nhà hàng 3','res3.jpg','Mô tả 3'),
(4,'Nhà hàng 4','res4.jpg','Mô tả 4'),
(5,'Nhà hàng 5','res5.jpg','Mô tả 5'),
(6,'Nhà hàng 6','res6.jpg','Mô tả 6'),
(7,'Nhà hàng 7','res7.jpg','Mô tả 7'),
(8,'Nhà hàng 8','res8.jpg','Mô tả 8'),
(9,'Nhà hàng 9','res9.jpg','Mô tả 9');

INSERT INTO food (food_id, food_name, image, price, desciption, type_id) VALUES
(1,'Phở bò','pho.jpg',45000,'Món Việt',1),
(2,'Cơm gà','comga.jpg',35000,'Món Việt',1),
(3,'Bánh mì','banhmi.jpg',20000,'Món nhanh',1),
(4,'Cà phê','caphe.jpg',15000,'Đồ uống',2),
(5,'Trà đá','trada.jpg',5000,'Đồ uống',2),
(6,'Nước cam','orange.jpg',30000,'Đồ uống',2),
(7,'Bánh flan','flan.jpg',20000,'Tráng miệng',1),
(8,'Hủ tiếu','hutieu.jpg',40000,'Món Việt',1),
(9,'Cháo gà','chao.jpg',30000,'Món Việt',1);

INSERT INTO sub_food (sub_id, sub_name, sub_price, food_id) VALUES
(1,  'Thêm trứng',          5000, 1),
(2,  'Thêm xúc xích',       7000, 1),
(3,  'Thêm rau',            3000, 1),
(4,  'Thêm thịt bò',       12000, 1),
(5,  'Thêm tương ớt',       2000, 1),
(6,  'Thêm phô mai lát',    6000, 2),
(7,  'Thêm sốt mayonnaise', 3000, 2),
(8,  'Thêm hành phi',       3000, 2),
(9,  'Thêm bò viên',        8000, 2),
(10, 'Thêm chả lụa',        7000, 2),
(11, 'Thêm trứng ốp la',    6000, 3),
(12, 'Thêm pate',           5000, 3),
(13, 'Thêm bơ',             3000, 3),
(14, 'Phô mai',             8000, 3);

INSERT INTO like_res (like_res_id, user_id, res_id, date_like, dis_like) VALUES
(1,1,1,NOW(),0),
(2,2,1,NOW(),0),
(3,3,2,NOW(),0),
(4,4,3,NOW(),1),
(5,5,4,NOW(),0);

INSERT INTO rate_res (rate_res_id, user_id, res_id, amount, date_rate) VALUES
(1,1,1,5,NOW()),
(2,2,2,4,NOW()),
(3,3,3,5,NOW()),
(4,4,4,3,NOW());

INSERT INTO orders (orders_id, user_id, food_id, amount, code, arr_sub_id) VALUES
(1,1,1,2,'ORD001','1,2'),
(2,2,4,1,'ORD002',''),
(3,3,3,3,'ORD003','5');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

