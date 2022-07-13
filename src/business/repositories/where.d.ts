export type Where<E> = {
  [Key in keyof E]: E[Key]
}
