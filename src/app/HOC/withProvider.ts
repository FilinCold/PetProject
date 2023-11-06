import compose from 'compose-function';
import { withRouter } from './withRouter';

export const withProvider = compose(withRouter);
