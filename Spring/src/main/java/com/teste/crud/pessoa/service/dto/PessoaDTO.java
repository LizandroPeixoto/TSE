package com.teste.crud.pessoa.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PessoaDTO {
    private Integer ID;
    private String nome;
    private String email;
    private Boolean active;
}
