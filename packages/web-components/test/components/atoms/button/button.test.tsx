import { render, fireEvent, screen } from '@testing-library/react';
import {
  DefaultButton,
  buttonSizeClassNames,
  defaultClassNames,
  primaryClassNames,
} from '@web-components/components/atoms/button/default';

describe('Button', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<DefaultButton label="button" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be included label text', () => {
    const { getByText } = render(<DefaultButton label="Example Label Text" />);
    // expect(screen.getByText('Example')).toBeInTheDocument();
    expect(getByText('Example Label Text')).toBeInTheDocument();
  });
  it('should be called onClick', () => {
    const mockOnClickFunction = jest.fn();
    const { getByText } = render(<DefaultButton label="Click" onClick={mockOnClickFunction} />);
    fireEvent.click(getByText('Click'));
    expect(mockOnClickFunction.mock.calls.length).toBe(1);
  });
  it('should be changed button size', () => {
    render(
      <>
        <DefaultButton label="Default" />
        <DefaultButton label="Small" size="small" />
        <DefaultButton label="Medium" size="medium" />
        <DefaultButton label="Large" size="large" />
      </>,
    );
    expect(screen.getByText('Default').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('medium') as string),
    );
    expect(screen.getByText('Small').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('small') as string),
    );
    expect(screen.getByText('Medium').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('medium') as string),
    );
    expect(screen.getByText('Large').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('large') as string),
    );
  });
  it('should be changed class names by primary', () => {
    render(
      <>
        <DefaultButton label="Default" />
        <DefaultButton label="Primary" primary />
        <DefaultButton label="NotPrimary" primary={false} />
      </>,
    );
    expect(screen.getByText('Default').className).toEqual(expect.stringContaining(defaultClassNames));
    expect(screen.getByText('Primary').className).toEqual(expect.stringContaining(primaryClassNames));
    expect(screen.getByText('NotPrimary').className).toEqual(expect.stringContaining(defaultClassNames));
  });
  it('should be set background color', () => {
    render(
      <>
        <DefaultButton label="Default" />
        <DefaultButton label="SetBackgroundColor" backgroundColor="#dddddd" />
      </>,
    );
    expect(screen.getByText('Default')).toHaveStyle('background-color: ButtonFace');
    expect(screen.getByText('SetBackgroundColor')).toHaveStyle('background-color: #dddddd');
  });
  it('should be set html button attributes', () => {
    const { getByTestId } = render(
      <DefaultButton label="Attributes" type="button" role="button" data-testid="custom-attributes" />,
    );
    const button = getByTestId('custom-attributes');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('role', 'button');
  });
});
