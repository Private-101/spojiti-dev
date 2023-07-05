import styles from "../../styles/home.styles.css";
import { classNames, unslugify } from "~/utils";
import * as React from 'react';

type CheckboxInputProps = JSX.IntrinsicElements["input"];

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
  // checked?: boolean; this is listed as value prop here...
  innerRef: React.ForwardedRef<HTMLInputElement>;
};

const TestCheckbox: React.FC<TestChckboxProps> = (props, ref) => {
  const { 
    className, labelClassName, name, option, value, defaultChecked,
    inputClassName, checkedItemLabelClassName, customLabelClassName
  } = props;

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
    <div className={classNames(className ?? '', 'item flex items-center my-2 mr-2', option.disabled ? 'disabled bg-opacity-30 text-opacity-30' : '')}>
      <input
        disabled={option.disabled}
        type="checkbox"
        name={name}
        id={`${name}-${option.value}`}
        value={option.value}
        defaultChecked={defaultChecked}
        checked={value}
        onChange={handleChange}
        className={classNames('checkbox-test hidden', value === true ? '' : '', inputClassName ?? '')}
        ref={ref}
      />

      <label
        className={classNames(customLabelClassName ?? '', 'customLabel border-2 border-solid rounded-md min-w-[20px] min-h-[20px] cursor-pointer', option.disabled ? 'cursor-default' : 'cursor-pointer', value === true ? 'bg-sp-primary-light dark:bg-sp-primary-dark border-black' : 'bg-sp-body-bg border-sp-primary',)}
        htmlFor={`${name}-${option.value}`}
      ></label>

      <label htmlFor={`${name}-${option.value}`} className={classNames(labelClassName ?? '', 'label ml-4 text-md', option.disabled ? 'cursor-default' : 'cursor-pointer', value ? checkedItemLabelClassName ? checkedItemLabelClassName: '' : '')}>
        {unslugify(option.label)}
      </label>
    </div>
  );
}

// export default React.forwardRef((props, ref) => Checkbox(props, ref));
export const TestCheckboxWithRef = React.forwardRef<HTMLInputElement, TestChckboxProps>(function CheckboxRef(props, ref) {
  return TestCheckbox(props, ref)
});