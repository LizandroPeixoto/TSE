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
                .id(entidade.getId())
                .nome(entidade.getNome())
                .email(entidade.getEmail())
                .build();
    }

    @Override
    public Pessoa dtoParaEntidade(PessoaDTO pessoaDTO) {
        return Objects.isNull(pessoaDTO) ? null :
                Pessoa.builder()
                        .nome(pessoaDTO.getNome())
                        .email(pessoaDTO.getEmail())
                        .build();
    }
}
