// Third party dependencies.
import React from 'react';
import { shallow } from 'enzyme';

// External dependencies.
import { IconName } from '../../Icons/Icon';

// Internal dependencies.
import ButtonIcon from './ButtonIcon';
import { ButtonIconVariants } from './ButtonIcon.types';

describe('ButtonIcon', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ButtonIcon
        variant={ButtonIconVariants.Primary}
        iconName={IconName.AddSquare}
        onPress={jest.fn}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
