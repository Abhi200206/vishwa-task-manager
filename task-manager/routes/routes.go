package routes

import (
	"task-manager/controller"

	"github.com/gin-gonic/gin"
)

func SetupRouter(router *gin.Engine) {
	taskRoutes := router.Group("/tasks")
	{
		taskRoutes.GET("/", controller.GetTasks)
		taskRoutes.GET("/:id", controller.GetTask)
		taskRoutes.POST("/", controller.CreateTask)
		taskRoutes.PUT("/:id", controller.UpdateTask)
		taskRoutes.DELETE("/:id", controller.DeleteTask)
	}
}
