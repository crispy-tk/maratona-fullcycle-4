import { Controller, Get, Body, Post, Param, Put, HttpCode, Delete, ValidationPipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from 'src/models/category.models';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CategoryResponse } from 'src/api-doc/category.response';
import { CategoryDto } from 'src/dto/category.dto';

//API REST - POST categories
@UseInterceptors(ClassSerializerInterceptor)
@Controller('categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category> //Generic
    ){}

    @Get()
    async index(): Promise<Category[]> {
        return this.categoryRepo.find();
    }

    @ApiOkResponse({ //200
        type: CategoryResponse
    })
    @Get(':id')
    show(@Param('id') id: string): Promise<Category>{
        return this.categoryRepo.findOneOrFail(id);
    }

    @ApiCreatedResponse({ //201
        type: CategoryResponse
    })
    @Post()
    store(@Body(new ValidationPipe({
        errorHttpStatusCode: 422
    })) body: CategoryDto): Promise<Category> {
        const category = this.categoryRepo.create(body);
        return this.categoryRepo.save(category);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: Category): Promise<Category> {
        await this.categoryRepo.findOneOrFail(+id);
        this.categoryRepo.update({id: +id}, body);
        return this.categoryRepo.findOneOrFail(+id);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy(@Param('id') id: string, @Body() body: Category): Promise<void> { //204 - No content
        await this.categoryRepo.findOneOrFail(+id);
        this.categoryRepo.delete(id);
    }
}
