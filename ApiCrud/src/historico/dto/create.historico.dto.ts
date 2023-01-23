import { IsNotEmpty } from "class-validator";

export class HistoryDTO{
    @IsNotEmpty({ message: 'search cannot be empty.'})
    search: string;
}