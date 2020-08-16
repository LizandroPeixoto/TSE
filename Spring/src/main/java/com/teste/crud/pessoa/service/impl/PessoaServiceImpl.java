package com.teste.crud.pessoa.service.impl;

import com.teste.crud.pessoa.domain.Pessoa;
import com.teste.crud.pessoa.repository.PessoaRepository;
import com.teste.crud.pessoa.service.PessoaService;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import com.teste.crud.pessoa.service.mapper.PessoaMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@Service
@Slf4j
public class PessoaServiceImpl implements PessoaService {

    private PessoaRepository pessoaRepository;
    private PessoaMapper pessoaMapper;

    @Override
    public List<PessoaDTO> obterTodasPessoas() {
        List<Pessoa> pessoas = pessoaRepository.findAll();
        return pessoaMapper.entidadesParaDTOs(pessoas);
    }

    @Override
    public PessoaDTO salvarPessoa(PessoaDTO pessoa) {
        if (Objects.isNull(pessoa))
            throw new IllegalArgumentException("Objeto proposta afetação nula");

        Pessoa pessoaSalvar = pessoaMapper.dtoParaEntidade(pessoa);
        pessoaSalvar.setId(pessoa.getId());
        pessoaSalvar.setNome(pessoa.getNome());
        pessoaSalvar.setEmail(pessoa.getEmail());

        pessoaRepository.save(pessoaSalvar);

        return pessoaMapper.entidadeParaDTO(pessoaSalvar);

    }
}
