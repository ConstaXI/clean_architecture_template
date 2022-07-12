import { validateSync, ValidationError } from "class-validator"

export abstract class AbstractSerializer<I> {
  constructor(value: Partial<I>) {
    Object.assign(this, value)
  }

  validate(): ValidationError[] {
    return validateSync(this)
  }
}
