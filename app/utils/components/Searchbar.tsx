import React from 'react';

interface ISearchBarProps {
    defaultValue?: string;
    buttonText?: string;
    // setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onSearch?: (value: string) => void;
};
/*
export default function SearchBar({ defaultValue, onChange, onBlur, onSearch, buttonText }: ISearchBarProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            handleGoClick()
        }
    }

    const handleGoClick = () => {
        onSearch && onSearch(currentValue);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(e);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
    };

    const handleSearch = (value: string) => {
        onSearch && onSearch(value)
    };

    return (
        <>
            <div>
                <p>Type a username or repo full name and hit 'Go':</p>
                <input 
                size={45}
                    ref={inputRef}
                    defaultValue={value}
                    onKeyUp={handleKeyUp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                <button onClick={handleGoClick}>
                    {buttonText ? buttonText : 'Search'}
                </button>
            </div>
        </>
    )
}
*/