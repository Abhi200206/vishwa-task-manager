package config

import (
	"fmt"

	"gorm.io/gorm"

	"task-manager/models"

	"gorm.io/driver/postgres"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error

	dsn := "postgresql://neondb_owner:npg_ndfRD6i0CcFt@ep-sweet-dew-a1gk63ll-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(" Failed to connect to database!")
	}

	fmt.Println(" Database connection successful!")

	if err := DB.AutoMigrate(&models.Task{}); err != nil {
		panic(" Failed to auto-migrate Task model!")
	}
	fmt.Println(" Task model auto-migrated successfully!")
}
