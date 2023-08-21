import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsNumber,
  ValidateIf,
} from "class-validator";

class BookDto {
  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @ValidateIf((obj) => obj.value !== undefined)
  @IsNotEmpty()
  @IsString()
  description: string;

  @ValidateIf((obj) => obj.value !== undefined)
  @IsNotEmpty()
  @IsString()
  publisher: string;

  @ValidateIf((obj) => obj.value !== undefined)
  @IsNotEmpty()
  @IsDateString()
  releaseDate: string;

  @ValidateIf((obj) => obj.value !== undefined)
  @IsNotEmpty()
  @IsString()
  thumbnailUrl: string;

  @IsNotEmpty()
  @IsNumber()
  totalCount: number;

  @IsNotEmpty()
  @IsNumber()
  availableCount: number;

  @IsNotEmpty()
  @IsString()
  shelfCode: string;
}

export default BookDto;
