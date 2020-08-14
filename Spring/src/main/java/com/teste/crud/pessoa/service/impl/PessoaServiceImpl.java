package com.teste.crud.pessoa.service.impl;
import com.teste.crud.pessoa.domain.Pessoa;
import com.teste.crud.pessoa.repository.PessoaRepository;
import com.teste.crud.pessoa.service.PessoaService;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import com.teste.crud.pessoa.service.mapper.PessoaMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

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


}
