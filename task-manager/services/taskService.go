package services

import (
	"task-manager/config"
	"task-manager/models"
)

func GetAllTasks() ([]models.Task, error) {
	var tasks []models.Task
	result := config.DB.Find(&tasks)
	return tasks, result.Error
}

func GetTaskByID(id uint) (models.Task, error) {
	var task models.Task
	result := config.DB.First(&task, id)
	return task, result.Error
}

func CreateTask(task *models.Task) error {
	result := config.DB.Create(task)
	return result.Error
}

func UpdateTask(task *models.Task) error {
	result := config.DB.Save(task)
	return result.Error
}

func DeleteTask(id uint) error {
	result := config.DB.Delete(&models.Task{}, id)
	return result.Error
}
