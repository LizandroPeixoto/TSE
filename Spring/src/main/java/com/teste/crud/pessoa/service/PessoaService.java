package com.teste.crud.pessoa.service;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PessoaService {

    List<PessoaDTO> obterTodasPessoas();

    @Transactional
    PessoaDTO salvarPessoa(PessoaDTO propostaAfetacao);
}
