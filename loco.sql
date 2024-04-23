-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: localhost    Database: expo
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_announcements`
--

DROP TABLE IF EXISTS `admin_announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_announcements` (
  `id_admin` int DEFAULT NULL,
  `id_announce` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_admin_announcements_id_admin` (`id_admin`),
  KEY `FK_admin_announcements_id_announce` (`id_announce`),
  CONSTRAINT `FK_admin_announcements_id_admin` FOREIGN KEY (`id_admin`) REFERENCES `admins` (`id`),
  CONSTRAINT `FK_admin_announcements_id_announce` FOREIGN KEY (`id_announce`) REFERENCES `announcements` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_announcements`
--

LOCK TABLES `admin_announcements` WRITE;
/*!40000 ALTER TABLE `admin_announcements` DISABLE KEYS */;
INSERT INTO `admin_announcements` VALUES (1,1,'2024-04-21',NULL),(2,2,'2024-04-21',NULL),(3,3,'2024-04-21',NULL),(2,4,'2024-04-21',NULL),(3,5,'2024-04-21',NULL);
/*!40000 ALTER TABLE `admin_announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Rafael','Galleros','rafatec@tec.mx','password321','2024-04-21','2024-04-21'),(2,'Manuel','Zacatecas','manuZ@tec.mx','password123','2024-04-21','2024-04-21'),(3,'Juan','Medina','jipi@tec.mx','password666','2024-04-21','2024-04-21'),(4,'Cesar','Guerra','cesarwar@tec.mx','password777','2024-04-21','2024-04-21'),(5,'Santiago','Santos','sansantos@tec.mx','password911','2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `id` int NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `description` varchar(90) DEFAULT NULL,
  `audience` varchar(50) DEFAULT NULL,
  `multimedia` varchar(155) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `announcements_chk_1` CHECK ((`audience` in (_utf8mb4'students',_utf8mb4'teachers',_utf8mb4'judges')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (1,'announcement 1','description for announcement 1','students','announcement_image_1.url','2024-04-21','2024-04-21'),(2,'announcement 2','description for announcement 2','teachers','announcement_image_2.url','2024-04-21','2024-04-21'),(3,'announcement 3','description for announcement 3','judges','announcement_image_3.url','2024-04-21','2024-04-21'),(4,'announcement 4','description for announcement 4','teachers','announcement_image_4.url','2024-04-21','2024-04-21'),(5,'announcement 5','description for announcement 5','judges','announcement_image_5.url','2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `id` int NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `description` varchar(60) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (1,'Area 1','Description for Area 1','2024-04-21','2024-04-21'),(2,'Area 2','Description for Area 2','2024-04-21','2024-04-21'),(3,'Area 3','Description for Area 3','2024-04-21','2024-04-21'),(4,'Area 4','Description for Area 4','2024-04-21','2024-04-21'),(5,'Area 5','Description for Area 5','2024-04-21','2024-04-21'),(6,'Area 6','Description for Area 6','2024-04-21','2024-04-21'),(7,'Area 7','Description for Area 7','2024-04-21','2024-04-21'),(8,'Area 8','Description for Area 8','2024-04-21','2024-04-21'),(9,'Area 9','Description for Area 9','2024-04-21','2024-04-21'),(10,'Area 10','Description for Area 10','2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asessor_projects`
--

DROP TABLE IF EXISTS `asessor_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asessor_projects` (
  `id_person` int DEFAULT NULL,
  `id_project` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_asessor_projects_id_person` (`id_person`),
  KEY `FK_asessor_projects_id_project` (`id_project`),
  CONSTRAINT `FK_asessor_projects_id_person` FOREIGN KEY (`id_person`) REFERENCES `persons` (`id`),
  CONSTRAINT `FK_asessor_projects_id_project` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asessor_projects`
--

LOCK TABLES `asessor_projects` WRITE;
/*!40000 ALTER TABLE `asessor_projects` DISABLE KEYS */;
INSERT INTO `asessor_projects` VALUES (2,1,'2024-04-21',NULL),(1,2,'2024-04-21',NULL);
/*!40000 ALTER TABLE `asessor_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `description` varchar(90) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'categoria 1','Description for Category 1','2024-04-21','2024-04-21'),(2,'categoria 2','Description for Category 2','2024-04-21','2024-04-21'),(3,'categoria 3','Description for Category 3','2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id_person` int NOT NULL,
  `id_project` int DEFAULT NULL,
  `comment` text,
  `momento` timestamp NULL DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_comments_id_person` (`id_person`),
  KEY `FK_comments_id_project` (`id_project`),
  CONSTRAINT `FK_comments_id_person` FOREIGN KEY (`id_person`) REFERENCES `persons` (`id`),
  CONSTRAINT `FK_comments_id_project` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'This is the first comment','2024-04-22 03:12:02','2024-04-21','2024-04-21'),(2,2,'This is the second comment','2024-04-22 03:12:02','2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `criteria_judges`
--

DROP TABLE IF EXISTS `criteria_judges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `criteria_judges` (
  `id_person` int DEFAULT NULL,
  `id_criteria` int DEFAULT NULL,
  `grade` int DEFAULT NULL,
  `id_project` int DEFAULT NULL,
  `Comentario` text,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_criteria_judges_id_criteria` (`id_criteria`),
  KEY `FK_criteria_judges_id_person` (`id_person`),
  KEY `FK_criteria_judges_id_project` (`id_project`),
  CONSTRAINT `FK_criteria_judges_id_criteria` FOREIGN KEY (`id_criteria`) REFERENCES `criterias` (`id`),
  CONSTRAINT `FK_criteria_judges_id_person` FOREIGN KEY (`id_person`) REFERENCES `persons` (`id`),
  CONSTRAINT `FK_criteria_judges_id_project` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `criteria_judges`
--

LOCK TABLES `criteria_judges` WRITE;
/*!40000 ALTER TABLE `criteria_judges` DISABLE KEYS */;
INSERT INTO `criteria_judges` VALUES (2,1,80,1,'Muy buen trabajo','2024-04-21',NULL),(1,2,40,2,'Pudieron haberlo hecho mejor','2024-04-21',NULL),(4,2,20,1,'Hagan un mejor esfuerzo','2024-04-21',NULL),(3,1,100,1,'Perfecto!!','2024-04-21',NULL),(4,1,80,2,'Muy buen trabajo','2024-04-21',NULL);
/*!40000 ALTER TABLE `criteria_judges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `criterias`
--

DROP TABLE IF EXISTS `criterias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `criterias` (
  `id` int NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `weigh` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `criterias`
--

LOCK TABLES `criterias` WRITE;
/*!40000 ALTER TABLE `criterias` DISABLE KEYS */;
INSERT INTO `criterias` VALUES (1,'Inovacion Frugal','2024-04-21',NULL,0.2),(2,'Aporte vanguardista','2024-04-21',NULL,0.2),(3,'Detalle Tecnico','2024-04-21',NULL,0.2),(4,'Discurso justificado','2024-04-21',NULL,0.1),(5,'Impacto social','2024-04-21',NULL,0.3);
/*!40000 ALTER TABLE `criterias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editions`
--

DROP TABLE IF EXISTS `editions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editions` (
  `id` int NOT NULL,
  `period` varchar(30) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editions`
--

LOCK TABLES `editions` WRITE;
/*!40000 ALTER TABLE `editions` DISABLE KEYS */;
INSERT INTO `editions` VALUES (1,'Spring',2024,NULL,NULL),(2,'Winter',2024,NULL,NULL),(3,'Spring',2023,NULL,NULL),(4,'Winter',2023,NULL,NULL);
/*!40000 ALTER TABLE `editions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest_areas`
--

DROP TABLE IF EXISTS `interest_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest_areas` (
  `id_interest` int DEFAULT NULL,
  `id_area` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_interest_areas_id_area` (`id_area`),
  KEY `FK_interest_areas_id_interest` (`id_interest`),
  CONSTRAINT `FK_interest_areas_id_area` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id`),
  CONSTRAINT `FK_interest_areas_id_interest` FOREIGN KEY (`id_interest`) REFERENCES `interests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest_areas`
--

LOCK TABLES `interest_areas` WRITE;
/*!40000 ALTER TABLE `interest_areas` DISABLE KEYS */;
INSERT INTO `interest_areas` VALUES (1,1,'2024-04-21','2024-04-21'),(2,2,'2024-04-21','2024-04-21'),(3,3,'2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `interest_areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest_persons`
--

DROP TABLE IF EXISTS `interest_persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest_persons` (
  `id_interest` int DEFAULT NULL,
  `id_judge` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_interest_persons_id_interest` (`id_interest`),
  KEY `FK_interest_persons_id_judge` (`id_judge`),
  CONSTRAINT `FK_interest_persons_id_interest` FOREIGN KEY (`id_interest`) REFERENCES `interests` (`id`),
  CONSTRAINT `FK_interest_persons_id_judge` FOREIGN KEY (`id_judge`) REFERENCES `persons` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest_persons`
--

LOCK TABLES `interest_persons` WRITE;
/*!40000 ALTER TABLE `interest_persons` DISABLE KEYS */;
INSERT INTO `interest_persons` VALUES (1,1,'2024-04-21','2024-04-21'),(2,2,'2024-04-21','2024-04-21'),(3,3,'2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `interest_persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interests`
--

DROP TABLE IF EXISTS `interests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interests` (
  `id` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interests`
--

LOCK TABLES `interests` WRITE;
/*!40000 ALTER TABLE `interests` DISABLE KEYS */;
INSERT INTO `interests` VALUES (1,'Physics',NULL,NULL),(2,'Biology',NULL,NULL),(3,'Chemistry',NULL,NULL),(4,'Mathematics',NULL,NULL),(5,'Programming',NULL,NULL);
/*!40000 ALTER TABLE `interests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `judge_projects`
--

DROP TABLE IF EXISTS `judge_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `judge_projects` (
  `id_person` int DEFAULT NULL,
  `id_project` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_judge_projects_project` (`id_project`),
  KEY `FK_judge_projects_person` (`id_person`),
  CONSTRAINT `FK_judge_projects_person` FOREIGN KEY (`id_person`) REFERENCES `persons` (`id`),
  CONSTRAINT `FK_judge_projects_project` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `judge_projects`
--

LOCK TABLES `judge_projects` WRITE;
/*!40000 ALTER TABLE `judge_projects` DISABLE KEYS */;
INSERT INTO `judge_projects` VALUES (2,2,'2024-04-21',NULL),(1,1,'2024-04-21',NULL),(3,1,'2024-04-21',NULL),(4,2,'2024-04-21',NULL);
/*!40000 ALTER TABLE `judge_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maps`
--

DROP TABLE IF EXISTS `maps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maps` (
  `id` int NOT NULL,
  `map_image` varchar(60) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maps`
--

LOCK TABLES `maps` WRITE;
/*!40000 ALTER TABLE `maps` DISABLE KEYS */;
INSERT INTO `maps` VALUES (1,'map_image_1.jpg','2024-04-21','2024-04-21'),(2,'map_image_2.jpg','2024-04-21','2024-04-21'),(3,'map_image_3.jpg','2024-04-21','2024-04-21'),(4,'map_image_4.jpg','2024-04-21','2024-04-21'),(5,'map_image_5.jpg','2024-04-21','2024-04-21');
/*!40000 ALTER TABLE `maps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  `external` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` VALUES (1,'Julio','Iglesias','julioIgle@tec.mx','loco123',1,'2024-04-21',NULL),(2,'Manuel','Romero','manuRom@tec.mx','pass123',0,'2024-04-21',NULL),(3,'Rgelio','Baldomero','balDoRom@tec.mx','pepeelgrillo',0,'2024-04-21',NULL),(4,'Miguel','Castillo','castleMike@tec.mx','transformerOne',1,'2024-04-21',NULL),(5,'Ramiro','Hernandez','ramHdz@tec.mx','onePiec4ever',0,'2024-04-21',NULL),(6,'Julian','Rojas','RedJul@tec.mx','spidermanblcK',1,'2024-04-21',NULL);
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` text,
  `linkVideo` varchar(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `linkPoster` varchar(100) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `id_edition` int DEFAULT NULL,
  `id_area` int DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  `id_lider` int DEFAULT NULL,
  `id_responsable` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_projects_id_edition` (`id_edition`),
  KEY `FK_projects_id_lider` (`id_lider`),
  KEY `FK_projects_id_area` (`id_area`),
  KEY `FK_projects_id_category` (`id_category`),
  KEY `FK_projects_id_responsable` (`id_responsable`),
  CONSTRAINT `FK_projects_id_area` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id`),
  CONSTRAINT `FK_projects_id_category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_projects_id_edition` FOREIGN KEY (`id_edition`) REFERENCES `editions` (`id`),
  CONSTRAINT `FK_projects_id_lider` FOREIGN KEY (`id_lider`) REFERENCES `students` (`id`),
  CONSTRAINT `FK_projects_id_responsable` FOREIGN KEY (`id_responsable`) REFERENCES `persons` (`id`),
  CONSTRAINT `projects_chk_1` CHECK ((`status` in (_utf8mb4'aprobado',_utf8mb4'en revision',_utf8mb4'rechazado')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Nanobots Curanderos','Nanobots que curan a la gente de agentes virales peligrosos','https://www.youtube.com/watch?v=7fuO8UxGfpg','En revision','https://cdn.europosters.eu/image/750/posters/my-hero-academia-heroes-i58329.jpg','2024-04-21',NULL,1,2,1,3,4),(2,'Pasteles ecologicos','Pasteles hechos con fibra de nopal','https://www.youtube.com/watch?v=7fuO8UxGfpg','En revision','https://cdn.europosters.eu/image/750/posters/my-hero-academia-heroes-i58329.jpg','2024-04-21',NULL,2,1,3,1,2);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_maps`
--

DROP TABLE IF EXISTS `projects_maps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects_maps` (
  `id_project` int DEFAULT NULL,
  `coordinates` varchar(10) DEFAULT NULL,
  `id_map` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_projects_maps_id_map` (`id_map`),
  KEY `FK_projects_maps_id_project` (`id_project`),
  CONSTRAINT `FK_projects_maps_id_map` FOREIGN KEY (`id_map`) REFERENCES `maps` (`id`),
  CONSTRAINT `FK_projects_maps_id_project` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_maps`
--

LOCK TABLES `projects_maps` WRITE;
/*!40000 ALTER TABLE `projects_maps` DISABLE KEYS */;
INSERT INTO `projects_maps` VALUES (1,'100x -18y',1,'2024-04-21',NULL),(2,'70x 500y',1,'2024-04-21',NULL);
/*!40000 ALTER TABLE `projects_maps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'John','Doe','john.doe@example.com','password1',NULL,NULL),(2,'Jane','Smith','jane.smith@example.com','password2',NULL,NULL),(3,'Michael','Johnson','michael.johnson@example.com','password3',NULL,NULL),(4,'Emily','Brown','emily.brown@example.com','password4',NULL,NULL),(5,'William','Jones','william.jones@example.com','password5',NULL,NULL),(6,'Olivia','Garcia','olivia.garcia@example.com','password6',NULL,NULL),(7,'James','Martinez','james.martinez@example.com','password7',NULL,NULL),(8,'Sophia','Hernandez','sophia.hernandez@example.com','password8',NULL,NULL),(9,'Benjamin','Young','benjamin.young@example.com','password9',NULL,NULL),(10,'Ava','King','ava.king@example.com','password10',NULL,NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_members`
--

DROP TABLE IF EXISTS `team_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_members` (
  `id_team` int DEFAULT NULL,
  `id_member` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  KEY `FK_team_members_id_team` (`id_team`),
  KEY `FK_team_members_id_member` (`id_member`),
  CONSTRAINT `FK_team_members_id_member` FOREIGN KEY (`id_member`) REFERENCES `students` (`id`),
  CONSTRAINT `FK_team_members_id_team` FOREIGN KEY (`id_team`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_members`
--

LOCK TABLES `team_members` WRITE;
/*!40000 ALTER TABLE `team_members` DISABLE KEYS */;
INSERT INTO `team_members` VALUES (1,2,NULL,NULL),(1,3,NULL,NULL),(1,4,NULL,NULL),(1,5,NULL,NULL),(2,7,NULL,NULL),(2,8,NULL,NULL),(2,9,NULL,NULL),(2,10,NULL,NULL);
/*!40000 ALTER TABLE `team_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `id_leader` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_teams_id_leader` (`id_leader`),
  CONSTRAINT `FK_teams_id_leader` FOREIGN KEY (`id_leader`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Team A',NULL,NULL,1),(2,'Team B',NULL,NULL,6);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-21 21:30:44
