import { BadRequestError, InternalServerError } from '@/libs/error'
import { PrismaClient } from '@prisma/client'
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library'

export const prisma = new PrismaClient()

export function handlePrismaError(err: unknown): never {
  if (err instanceof PrismaClientValidationError) {
    throw new BadRequestError()
  }
  if (err instanceof PrismaClientKnownRequestError) {
    throw new BadRequestError()
  }
  if (err instanceof PrismaClientUnknownRequestError) {
    throw new BadRequestError()
  }
  if (err instanceof PrismaClientInitializationError) {
    throw new InternalServerError()
  }
  throw err
}
