-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('writer', 'admin') NOT NULL DEFAULT 'writer';
