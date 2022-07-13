export type Where<E> = Partial<{
  [Key in keyof E]: E[Key]
}>
