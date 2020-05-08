import { ChangeEvent } from "react";

export interface InputProps {
    placeholder?: string;
    width?: string;
    height?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void; //TODO do we declare function type like this
}