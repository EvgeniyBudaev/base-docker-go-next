package user

import (
	r "github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/handler/http/api/v1/response"
	"github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/logger"
	"github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/useCase/user"
	"github.com/gofiber/fiber/v2"
)

type HandlerUser struct {
	logger logger.Logger
	uc     *user.UseCaseUser
}

func NewHandlerUser(l logger.Logger, uc *user.UseCaseUser) *HandlerUser {
	return &HandlerUser{logger: l, uc: uc}
}

type ResponseUserAdd struct {
	Content string `json:"content"`
}

func (h *HandlerUser) AddProfileHandler() fiber.Handler {
	return func(ctf *fiber.Ctx) error {
		h.logger.Info("POST /api/v1/user/add")
		response := &ResponseUserAdd{Content: "ok"}
		return r.WrapCreated(ctf, response)
	}
}
