-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2021 at 08:08 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
SET FOREIGN_KEY_CHECKS=0;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transporter`
--

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id_card` varchar(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `license` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `birth` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id_card`, `name`, `license`, `address`, `birth`) VALUES
('034200016491', 'KAIBALYA KAR', '453555544545', 'KENDRAPADA', '03/04/2000'),
('034200045432', 'AMIT KUMAR NAIK', '543222241551', 'BARMUNDA', '07/05/1999'),
('034200053245', 'SIDHARTH CHAI WALA', '543222241554', 'NAYAGARGH', '07/05/1999'),
('034200062154', 'SWASTI', '543222241551', 'PUNJAB', '07/05/1999'),
('034200064323', 'SHIVI', '543222241551', 'ASDFGH', '07/05/1999'),
('034200065465', 'POKMNBV', '543222241551', 'WSERF', '07/05/1999'),
('123456789346', 'WDFV', '453246734534', 'HN', '19/04/2002'),
('123456789876', 'DFGH', '123456789123', 'DUBAI', '02/03/2002'),
('152264232', 'QWER', '152264232123', 'WER', '16/09/1969');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(341);

-- --------------------------------------------------------

--
-- Table structure for table `journey`
--

CREATE TABLE `journey` (
  `id` int(11) NOT NULL,
  `route_id` int(20) NOT NULL,
  `vehicle_license_plate` varchar(20) DEFAULT NULL,
  `guest_quanity` int(20) NOT NULL,
  `fare` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `journey`
--

INSERT INTO `journey` (`id`, `route_id`, `vehicle_license_plate`, `guest_quanity`, `fare`) VALUES
(301, 6, 'ODB-12345', 36, 60000),
(309, 1, 'ODB-41651', 25, 100000),
(312, 8, 'ODB-64533', 30, 90000),
(315, 9, 'ODB-12345', 15, 200000),
(318, 8, 'ODB-64533', 30, 90000),
(321, 307, 'ODB-12345', 40, 320000),
(324, 305, 'ODB-12345', 27, 200000),
(327, 304, 'ODB-64533', 32, 37000),
(330, 2, 'ODB-41651', 28, 50000),
(333, 9, 'ODB-65754', 26, 200000),
(338, 336, 'ODB-3243', 38, 42000);

-- --------------------------------------------------------

--
-- Table structure for table `journey_drivers`
--

CREATE TABLE `journey_drivers` (
  `id` bigint(20) NOT NULL,
  `drivers_id_card` varchar(20) NOT NULL,
  `journeys_id` int(20) NOT NULL,
  `role` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `journey_drivers`
--

INSERT INTO `journey_drivers` (`id`, `drivers_id_card`, `journeys_id`, `role`) VALUES
(302, '034200045432', 301, 'TX'),
(303, '034200062154', 301, 'PX'),
(310, '034200016491', 309, 'TX'),
(311, '034200062154', 309, 'PX'),
(313, '034200053245', 312, 'TX'),
(314, '034200045432', 312, 'PX'),
(316, '034200062154', 315, 'TX'),
(317, '123456789876', 315, 'PX'),
(319, '034200016491', 318, 'TX'),
(320, '034200064323', 318, 'PX'),
(322, '034200045432', 321, 'TX'),
(323, '034200062154', 321, 'PX'),
(325, '034200053245', 324, 'TX'),
(326, '034200065465', 324, 'PX'),
(328, '034200053245', 327, 'TX'),
(329, '034200016491', 327, 'PX'),
(331, '034200065465', 330, 'TX'),
(332, '034200064323', 330, 'PX'),
(334, '123456789346', 333, 'TX'),
(335, '034200016491', 333, 'PX'),
(339, '034200064323', 338, 'TX'),
(340, '152264232', 338, 'PX');

-- --------------------------------------------------------

--
-- Table structure for table `route`
--

CREATE TABLE `route` (
  `id` int(20) NOT NULL,
  `first_point` varchar(200) NOT NULL,
  `end_point` varchar(200) NOT NULL,
  `length` float NOT NULL,
  `complexity` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `route`
--

INSERT INTO `route` (`id`, `first_point`, `end_point`, `length`, `complexity`) VALUES
(1, 'abcd', ' kendrapada', 265, 3),
(2, 'Hà Nam ', ' Hà Nội', 56.4, 1),
(6, 'Hà Nội ', ' Nam Định', 85.5, 2),
(7, 'Lâm Đồng', ' Khánh Hòa', 194, 3),
(8, 'Sóc Trăng ', 'TP Hồ Chí Minh', 222, 3),
(9, 'Hà Nội ', 'Quảng Bình', 488, 3),
(304, 'Hải Phòng', 'Thái Bình', 68.5, 1),
(305, 'Nghệ An ', 'Đà Nẵng', 625, 3),
(306, 'Thừa Thiên Huế ', ' Quảng Bình', 207, 3),
(307, 'Đà Nẵng ', ' Hà Nội', 766, 3),
(308, 'Đà Nẵng ', ' Quảng Nam', 96.4, 2),
(336, 'Thừa Thiên Huế ', 'Quảng Trị', 56.9, 1),
(337, 'Tuyên Quang', 'Hà Nội', 132, 2);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `license_plate` varchar(20) NOT NULL,
  `colour` varchar(200) NOT NULL,
  `manufacturer` varchar(200) NOT NULL,
  `manufacture_year` int(20) NOT NULL,
  `model` varchar(200) NOT NULL,
  `seat` int(20) NOT NULL,
  `year_of_use` int(20) NOT NULL,
  `maintenance_day` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`license_plate`, `colour`, `manufacturer`, `manufacture_year`, `model`, `seat`, `year_of_use`, `maintenance_day`) VALUES
('14B-12345', 'Black', 'Maybach', 2021, 'RL-5', 21, 7, '06/07/2016'),
('15B-12345', 'Tím', 'Maybach', 2016, 'MB-X', 7, 5, '05/10/2021'),
('17B-41651', 'Vàng', 'Maybach', 2011, 'RT-5', 31, 5, '04/11/2018'),
('28B-12345', 'Black', 'Maybach', 2021, 'RL-5', 45, 10, '05/10/2021'),
('29B-3243', 'Tím', 'Hyundai', 2021, 'HY-4', 40, 1, '09/10/2021'),
('29B-64533', 'Tím', 'Rollroys', 2011, 'MB-X', 34, 3, '03/04/2000'),
('29B-65754', 'Xanh', 'Maybach', 2021, 'MB-X', 31, 3, '03/04/2021'),
('30B-12345', 'Black', 'Maybach', 2021, 'RL-5', 25, 10, '05/10/2021'),
('34B-12345', 'Vàng', 'Honda', 2021, 'RL-5', 38, 10, '09/05/2015'),
('89B-12345', 'Black', 'Maybach', 2021, 'RL-5', 36, 10, '05/10/2021');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id_card`);

--
-- Indexes for table `journey`
--
ALTER TABLE `journey`
  ADD PRIMARY KEY (`id`),
  ADD KEY `route_id` (`route_id`),
  ADD KEY `vehicle_license_plate` (`vehicle_license_plate`);

--
-- Indexes for table `journey_drivers`
--
ALTER TABLE `journey_drivers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `journey_drivers_ibfk_1` (`drivers_id_card`),
  ADD KEY `journey_drivers_ibfk_2` (`journeys_id`);

--
-- Indexes for table `route`
--
ALTER TABLE `route`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`license_plate`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `journey`
--
ALTER TABLE `journey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=339;

--
-- AUTO_INCREMENT for table `journey_drivers`
--
ALTER TABLE `journey_drivers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=341;

--
-- AUTO_INCREMENT for table `route`
--
ALTER TABLE `route`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=338;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `journey`
--
ALTER TABLE `journey`
  ADD CONSTRAINT `journey_ibfk_1` FOREIGN KEY (`route_id`) REFERENCES `route` (`id`),
  ADD CONSTRAINT `journey_ibfk_2` FOREIGN KEY (`vehicle_license_plate`) REFERENCES `vehicle` (`license_plate`);

--
-- Constraints for table `journey_drivers`
--
ALTER TABLE `journey_drivers`
  ADD CONSTRAINT `journey_drivers_ibfk_1` FOREIGN KEY (`drivers_id_card`) REFERENCES `driver` (`id_card`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `journey_drivers_ibfk_2` FOREIGN KEY (`journeys_id`) REFERENCES `journey` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
