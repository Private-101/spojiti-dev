export interface ICheckboxInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {};

export interface ICheckboxInputRefProps { setChecked(checked: boolean): void; };