import * as React from 'react';
import styled from 'styled-components';

interface Props {
  label?: string;
  value: string;
  handleInput: (v: string) => void;
}

const id = 'react-datatable-input';

const Input: React.FC<Props> = props => {
  const { label, value, handleInput } = props;

  const labelContent = label ? <Label>{label}</Label> : null;

  return (
    <Wrapper>
      {labelContent}
      <InputStyled
        type="text"
        id={id}
        data-test={id}
        className={id}
        onChange={e => handleInput(e.currentTarget.value)}
        value={value}
      />
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
`;

const Label = styled('label')``;

const InputStyled = styled('input')`
  width: 100%;
`;

export { Input as default };
