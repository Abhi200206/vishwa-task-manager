package main

import (
	"task-manager/config"
	"task-manager/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDatabase()

	router := gin.Default()

	router.Use(cors.Default())
	routes.SetupRouter(router)

	router.Run(":8080")
}
