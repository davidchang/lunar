import React from 'react';
import FieldAffix, { Props } from '../private/FieldAffix';

/** A prefix to display before an input within a form field. */
export default class Prefix extends React.PureComponent<Props> {
  render() {
    const { children, compact, disabled } = this.props;

    return (
      <FieldAffix before compact={compact} disabled={disabled}>
        {children}
      </FieldAffix>
    );
  }
}
