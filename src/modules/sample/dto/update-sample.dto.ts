import { IsNotEmpty, IsString } from "class-validator"

export class updateSampleDTO {
    @IsNotEmpty()
    @IsString()
    readonly name?: string;
}