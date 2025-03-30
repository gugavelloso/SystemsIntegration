CREATE DATABASE IF NOT EXISTS product CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE product;

CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_do_produto VARCHAR(255) NOT NULL,
  fornecedor VARCHAR(255) NOT NULL,
  endereco_fornecedor VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL,
  descricao TEXT,
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

select *
from product;