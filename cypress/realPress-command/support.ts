import { realPress } from './realPress';

Cypress.Commands.add(
  'realPress',
  realPress as unknown as NormalizeNonSubjectCypressCommand<typeof realPress>
);
