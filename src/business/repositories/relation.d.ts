export type Relation<TN = string, CTC = string, FJC = string> = {
  tableName: TN
  currentTableColumn: CTC
  foreignJoinColumn: FJC
}
