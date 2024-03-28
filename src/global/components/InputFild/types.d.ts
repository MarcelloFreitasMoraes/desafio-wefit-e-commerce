import { Item } from "@/global/types/types";

export interface InputFieldProps {
    onSearch: () => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string
    data: Item
}