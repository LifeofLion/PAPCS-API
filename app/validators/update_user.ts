import vine from '@vinejs/vine'

export const updateValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3).maxLength(50).optional(),
    email: vine.string().email().toLowerCase().optional(),
    password: vine.string().minLength(6).maxLength(20).optional(),
    position: vine.string().in(['admin', 'user']).optional(),
  })
)
