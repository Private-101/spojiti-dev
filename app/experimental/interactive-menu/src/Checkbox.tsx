import styles from "../../styles/home.styles.css";
import { classNames } from "~/utils";
import * as React from 'react';

/* Examples
({ type = "checkbox", name = "", checked = false, onChange = () => {} }) => {
  return (
    <input
      className={'checkBox'}
      type={type}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
};

const Search = React.forwardRef((props, ref) => {
  return <input ref={ref} type="search" />;
});
*/

type CheckboxInputProps = JSX.IntrinsicElements["input"];

/* Types && Tests
type HTMLInputTypeAttribute = |
| 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' 
| 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' 
| 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' 
| 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});

option?: {
    value?: string;
    label?: string;
    disabled?: boolean
  };
  name: string; // isRequired
  onChange?: () => void;
  className?: string;
  inputClassName?: string;
  // Applies to the label of each item in this group /
  labelClassName?: string;
  checkedItemLabelClassName?: string;
  // Applies to custom label for checkbox /
  customLabelClassName?: string;
  value?: boolean;
  defaultChecked?: boolean;
  innerRef: React.ForwardedRef<HTMLInputElement>;

  const Checkbox = (props, ref) => {
  const { 
    className, labelClassName, name, option, value, defaultChecked, 
    inputClassName, checkedItemLabelClassName, customLabelClassName
  } = props;

  const _className = classNames(className, 'item', option.disabled && 'disabled');

  const _inputClassName = classNames('checkbox', inputClassName);

  const _labelClassName = classNames(labelClassName, 'label', checkedItemLabelClassName && value);

  const _customLabelClassName = classNames(customLabelClassName, 'customLabel');

  const handleChange = (e: React.HTMLChangeEvent<HTMLInputElement>) => {
  const { name, onChange, option } = props;
  const { checked } = e.target;
  const { value } = option;

  if (onChange) {
    onChange({
      name,
      value,
      checked
    });
  }
};

  return (
    <div className={_className}>
      <input
        disabled={option.disabled}
        type="checkbox"
        name={name}
        id={`${name}-${option.value}`}
        value={option.value}
        defaultChecked={defaultChecked}
        checked={value}
        onChange={handleChange}
        className={_inputClassName}
        ref={ref}
      />

      <label
        className={_customLabelClassName}
        htmlFor={`${name}-${option.value}`}
      ></label>

      <label htmlFor={`${name}-${option.value}`} className={_labelClassName}>
        {option.label}
      </label>
    </div>
  );
}

export default React.forwardRef((props, ref) => Checkbox(props, ref));
*/
/* Removed and replaced with type CheckboxInputProps
interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // option: OptionProps;
  // name: string; // isRequired
  // onChange?: ({name, option}: {name: string, option: OptionProps}) => void;
};*/ 

// type UnifiedProps = CheckboxInputProps & CheckboxProps;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxInputProps>(function CheckboxRef(props, ref) {
  const {name, checked, onChange, ...rest} = props;
  return (
    <input
    ref={ref}
      className={'checkBox'}
      // type={type}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      /*
      disabled={option.disabled}
        type="checkbox"
        name={name}
        id={`${name}-${option.value}`}
        value={option.value}
        defaultChecked={defaultChecked}
        checked={value}
        onChange={handleChange}
        className={_inputClassName}
        ref={ref}
        */
      {...rest}
    />
  );
});

export interface OptionProps {
  value: string;
    label: string;
    disabled: boolean;
};

interface TestChckboxProps {
  option: OptionProps;
  name: string; // isRequired
  onChange?: ({name, option}: {name: string, option: OptionProps}) => void;
  className?: string;
  inputClassName?: string;
  // Applies to the label of each item in this group /
  labelClassName?: string;
  checkedItemLabelClassName?: string;
  // Applies to custom label for checkbox /
  customLabelClassName?: string;
  value?: boolean;
  defaultChecked?: boolean;
  innerRef: React.ForwardedRef<HTMLInputElement>;
};

/** Examples
 * 
 * @param props 
 * @param ref 
 * @returns 
 * 
 * @example
 * <TestCheckboxWithRef
      option={{ label: "I am checked", value: "abc", disabled: false }}
      name="ck"
      innerRef={innerCheckboxRef}
    />
    <TestCheckboxWithRef
      option={{ label: "I am not checked", value: "def", disabled: false }}
      name="ck"
      defaultChecked={true}
      innerRef={innerCheckboxRef}
    />

    @example
    <div className="abc">
              {Array.from([{ label: "I am checked", value: "abc", disabled: false }, { label: "I am not checked", value: "def", disabled: false }]).map((item, i) => (
                <TestCheckboxWithRef
                key={i}
                option={{ label: item.label, value: item.value, disabled: item.disabled }}
                name="ck-test"
                innerRef={innerCheckboxRef}
                // onChange={item => }
              />
              ))}
  </div>
 */
const TestCheckbox: React.FC<TestChckboxProps> = (props, ref) => {
  const { 
    className, labelClassName, name, option, value, defaultChecked, 
    inputClassName, checkedItemLabelClassName, customLabelClassName
  } = props;

  const _className = classNames(className ?? '', 'item', option.disabled ? 'disabled' : '');

  const _inputClassName = classNames('checkbox-test', inputClassName ?? '');

  const _labelClassName = classNames(labelClassName ?? '', 'label', value ? checkedItemLabelClassName ? checkedItemLabelClassName: '' : '');

  const _customLabelClassName = classNames(customLabelClassName ?? '', 'customLabel');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, onChange, option } = props;
  const { checked } = e.target;
  const { value, label } = option;

  if (onChange) {
    onChange({
      name,
      option: {
        value,
        label,
        disabled: checked
      }
    });
  }
};

  return (
    <div className={_className}>
      <input
        disabled={option.disabled}
        type="checkbox"
        name={name}
        id={`${name}-${option.value}`}
        value={option.value}
        defaultChecked={defaultChecked}
        checked={value}
        onChange={handleChange}
        className={_inputClassName}
        ref={ref}
      />

      <label
        className={_customLabelClassName}
        htmlFor={`${name}-${option.value}`}
      ></label>

      <label htmlFor={`${name}-${option.value}`} className={_labelClassName}>
        {option.label}
      </label>
    </div>
  );
}

// export default React.forwardRef((props, ref) => Checkbox(props, ref));
export const TestCheckboxWithRef = React.forwardRef<HTMLInputElement, TestChckboxProps>(function CheckboxRef(props, ref) {
  return TestCheckbox(props, ref)
});