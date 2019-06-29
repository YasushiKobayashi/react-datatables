import * as React from 'react';
import { css } from 'emotion';

interface Props {
  label?: string;
  value: string;
  handleInput: (v: string) => void;
}

const id = 'react-datatable-input';

const styleWrapper = css({
  display: 'flex',
  '& input': {
    width: '100%',
  },
});

const Input: React.FC<Props> = props => {
  const { label, value, handleInput } = props;

  const labelContent = label ? <label htmlFor={id}>{label}</label> : null;

  return (
    <div className={styleWrapper}>
      {labelContent}
      <input
        type="text"
        id={id}
        data-testid={id}
        className={id}
        onChange={e => handleInput(e.currentTarget.value)}
        value={value}
      />
    </div>
  );
};

export { Input as default };
