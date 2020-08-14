package com.teste.crud.web.rest;
import com.teste.crud.pessoa.service.PessoaService;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/api")

public class PessoaResoucer {

    private PessoaService pessoaService;

    @GetMapping("/pessoas")
    public ResponseEntity<List<PessoaDTO>> obterTodasPessoas() {
        List<PessoaDTO> tipoPessoaDTOS = pessoaService.obterTodasPessoas();
        return ResponseEntity.ok(tipoPessoaDTOS);
    }
}
