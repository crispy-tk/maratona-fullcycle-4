import { ApiProperty } from "@nestjs/swagger";

export class CategoryResponse {
    @ApiProperty()
    id: number;

    @ApiProperty({
        type: String,
        description: 'name of category'
    })
    name: string;

    @ApiProperty()
    created_at: Date;
}