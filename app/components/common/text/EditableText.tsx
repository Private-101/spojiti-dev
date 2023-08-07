import React, { type FC, type HTMLInputTypeAttribute, type KeyboardEvent, useEffect, useRef, useState } from "react";
import { classNames } from "~/utils";

interface IEditableTextProps {
  name: string;
  tag: "p" | "h3" | "h4";
  variant: "input" | "textarea";
  children: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
};
//  & Omit<React.HTMLAttributes<HTMLInputElement>, keyof IEditableTextProps>
export const EditableText: FC<IEditableTextProps> = ({ className, tag, variant, type = "text", children, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isEditting, setIsEditting] = useState(false);

  const props = {
    className,
    onClick: () => {
      setIsEditting((isEdditing) => !isEdditing);
    },
  };

  const inputProps = {
    type,
    onKeyDown: (e: KeyboardEvent) => {
      if (!e.shiftKey && (e.key === "Escape" || e.key === "Enter")) {
        e.preventDefault();
        setIsEditting(false);
      }
    }
  };

  useEffect(() => {
    if (isEditting) {
      inputRef.current?.focus();
      textAreaRef.current?.focus();
    }
  }, [isEditting]);

  if (isEditting) {
    if (variant === "input") {
      return <input ref={inputRef} {...props} {...inputProps} />;
    }
    if (variant === "textarea") {
      return <textarea ref={textAreaRef} {...props} {...inputProps} rows={12} className={classNames(className ?? '', "px-2")} />;
    }
  }

  if (tag === "h3") {
    return <h3 {...props}>{children}</h3>;
  }
  if (tag === "h4") {
    return <h4 {...props}>{children}</h4>;
  }
  if (tag === "p") {
    return <p {...props}>{children}</p>;
  }

  return null;
};