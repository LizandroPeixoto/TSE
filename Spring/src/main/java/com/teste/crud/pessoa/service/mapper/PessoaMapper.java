package com.teste.crud.pessoa.service.mapper;
import com.teste.crud.pessoa.domain.Pessoa;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Objects;

@AllArgsConstructor
@Component
public class PessoaMapper implements AbstractMapper<Pessoa, PessoaDTO>  {
    @Override
    public PessoaDTO entidadeParaDTO(Pessoa entidade) {
        return Objects.isNull(entidade) ? null : PessoaDTO.builder()
                .nome(entidade.getNome())
                .email(entidade.getEmail())
                .build();
    }
}
