import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from 'class-validator';

export class CategoryDto {

    @ApiProperty({
        type: String,
        description: 'name of category'
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    
}