package user

import (
	"github.com/EvgeniyBudaev/base-docker-go-next/backend/internal/logger"
)

type UseCaseUser struct {
	logger logger.Logger
}

func NewUseCaseUser(l logger.Logger) *UseCaseUser {
	return &UseCaseUser{
		logger: l,
	}
}

func (u *UseCaseUser) Add() error {
	return nil
}

func (u *UseCaseUser) Find() error {
	return nil
}
