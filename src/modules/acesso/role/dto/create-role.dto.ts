import { IsNotEmpty } from "class-validator";

export class CreateRoleDto {
  @IsNotEmpty({
    message: "Nome não pode ser vazio",
  })
  name: string;
}
