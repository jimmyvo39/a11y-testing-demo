type NormalizeNonSubjectCypressCommand<TFun> = TFun extends (
  ...args: infer TArgs
) => Promise<infer TReturn>
  ? (...args: TArgs) => Cypress.Chainable<TReturn>
  : TFun;

declare namespace Cypress {
  interface Chainable {
    /**
     * Fires native press event. It can fire one key event or the "shortcut" like Shift+Control+M
     * @see https://github.com/dmtrKovalenko/cypress-real-events#cyrealpress
     * @example
     * cy.realPress("K")
     * cy.realPress(["Alt", "Meta", "P"]) // Alt+(Command or Control)+P
     * @param key key to type. Should be the same as cypress's default type command argument (https://docs.cypress.io/api/commands/type.html#Arguments)
     * @param options press options
     */
    realPress: NormalizeNonSubjectCypressCommand<typeof import('./realPress').realPress>;
  }
}
