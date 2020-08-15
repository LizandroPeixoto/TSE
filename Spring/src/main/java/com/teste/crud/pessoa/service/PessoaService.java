package com.teste.crud.pessoa.service;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import java.util.List;

public interface PessoaService {

    List<PessoaDTO> obterTodasPessoas();
}
