import { validate } from 'class-validator'

type Constructor<T = {}> = new (...args: any[]) => T

export default async function check<T extends Constructor>(
  this: T,
  assign: InstanceType<T>,
) {
  const instance = new this(assign)
  Object.assign(instance, assign)
  console.log(await validate(instance))
  return instance
}
