// Package app - application module
package app

import (
	"context"
	"github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/config"
	"github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/logger"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"go.uber.org/zap"
	"log"
	"sync"
)

// App - application structure
type App struct {
	Logger logger.Logger
	config *config.Config
	fiber  *fiber.App
}

// NewApp - application designer
func NewApp() *App {
	// Default logger
	defaultLogger, err := logger.NewLogger(logger.GetDefaultLevel())
	if err != nil {
		log.Fatal("error func NewApp, method NewLogger by path internal/app/app.go", err)
	}
	// Config
	cfg, err := config.Load(defaultLogger)
	if err != nil {
		log.Fatal("error func NewApp, method Load by path internal/app/app.go", err)
	}
	// Logger level
	loggerLevel, err := logger.NewLogger(cfg.LoggerLevel)
	if err != nil {
		log.Fatal("error func NewApp, method NewLogger by path internal/app/app.go", err)
	}
	// Fiber
	f := fiber.New(fiber.Config{
		ReadBufferSize: 16384,
	})
	// CORS
	f.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Content-Type, X-Requested-With, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
	}))
	return &App{
		config: cfg,
		Logger: loggerLevel,
		fiber:  f,
	}
}

// Run - launching the application
func (app *App) Run(ctx context.Context) {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		if err := app.StartHTTPServer(ctx); err != nil {
			app.Logger.Fatal("error func main, method StartHTTPServer by path cmd/main.go", zap.Error(err))
		}
		wg.Done()
	}()
	wg.Wait()
}
