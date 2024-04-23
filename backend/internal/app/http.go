package app

import (
	"context"
	userHandler "github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/handler/user"
	userUseCase "github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/useCase/user"
	"go.uber.org/zap"
)

var prefix = "/api/v1"

func (app *App) StartHTTPServer(ctx context.Context) error {
	app.fiber.Static("/static", "./static")
	done := make(chan struct{})
	uc := userUseCase.NewUseCaseUser(app.Logger)
	uh := userHandler.NewHandlerUser(app.Logger, uc)
	grp := app.fiber.Group(prefix)
	grp.Post("/user/add", uh.AddProfileHandler())
	grp.Get("/user", uh.GetProfileHandler())
	go func() {
		if err := app.fiber.Listen(app.config.Port); err != nil {
			app.Logger.Fatal("error func StartHTTPServer, method Listen by path internal/app/http.go", zap.Error(err))
		}
		close(done)
	}()
	select {
	case <-ctx.Done():
		if err := app.fiber.Shutdown(); err != nil {
			app.Logger.Error("error func StartHTTPServer, method Shutdown by path internal/app/http.go,"+
				" error shutting down the server", zap.Error(err))
		}
	case <-done:
		app.Logger.Info("server finished successfully")
	}
	return nil
}
