export abstract class AbstractEntity<E> {
  private readonly props: E

  constructor(props: E) {
    this.props = props
  }

  export(): E {
    return this.props
  }
}
