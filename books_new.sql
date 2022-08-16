-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2022 a las 01:24:22
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `books_new`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `id` int(11) NOT NULL,
  `nombreAutor` varchar(150) DEFAULT NULL,
  `codigoPais` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`id`, `nombreAutor`, `codigoPais`) VALUES
(1, 'JULIO VERNE', 'US'),
(2, 'EDUARDO SACHERI', 'US'),
(3, 'CEFERINO REATO', 'AR'),
(4, 'FELIPE PIGNA', 'AR'),
(5, 'FLORENCIA BONELLI', 'AR'),
(6, 'ISABEL ALLENDE', 'UK'),
(7, 'DANIE LOPEZ ROSETTI', 'ES'),
(8, 'SANTIAGO POSTEGUILLO', 'US'),
(30, 'PEPE', 'AR'),
(31, 'PAPA', 'AR'),
(32, 'rrrrrrrrrr', 'ar'),
(33, 'aazzzz', 'ar'),
(34, 'dsadsad', 'aa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `precio` decimal(5,0) NOT NULL,
  `isbn` int(50) NOT NULL,
  `detalle` varchar(200) NOT NULL,
  `autorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `precio`, `isbn`, `detalle`, `autorId`) VALUES
(74, 'aaaaa', '11111', 2222222, 'bbbbbbbb', 2),
(75, 'poooooo', '4545', 456465, 'rrrrrrrrrrrrrr', 3),
(76, 'ttttt', '21121', 444444, 'qwerty', 4),
(77, 'El libro', '1700', 123456, 'Tomo 2', NULL),
(78, 'pppppppp', '22222', 2222222, 'pppp', NULL),
(79, 'a', '1', 54343, 'aaa', NULL),
(80, 'ggggggggg', '99999', 878768768, 'dasdsadsad', NULL),
(81, 'libro 1238', '1238', 1238, '1238', NULL),
(82, 'lplpl', '22332', 645654654, 'dasdsadsadsa', NULL),
(83, 'z', '12', 123456, 'zzzz', NULL),
(84, 'tr', '12', 32323, 'fdsfds', NULL),
(88, 'bbbbbb', '3434', 78658657, 'ldaskñldlkjashjldh', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `libros_ibfk_1` (`autorId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`autorId`) REFERENCES `autor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
