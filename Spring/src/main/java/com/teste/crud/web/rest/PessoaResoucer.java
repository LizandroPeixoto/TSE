package com.teste.crud.web.rest;
import com.teste.crud.pessoa.service.PessoaService;
import com.teste.crud.pessoa.service.dto.PessoaDTO;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/api")

public class PessoaResoucer {

    private PessoaService pessoaService;

    @GetMapping("/todasPessoas")
    public ResponseEntity<List<PessoaDTO>> obterTodasPessoas() {
        List<PessoaDTO> tipoPessoaDTOS = pessoaService.obterTodasPessoas();
        return ResponseEntity.ok(tipoPessoaDTOS);
    }

    @PostMapping("/criarPessoas")
    @ApiOperation(value = "Criar pessoa")
    public ResponseEntity<PessoaDTO> criarPessoa(@Valid @RequestBody PessoaDTO propostaAfetacao) {
        PessoaDTO propostaAfetacaoDTO = pessoaService.salvarPessoa(propostaAfetacao);
        return ResponseEntity.ok(propostaAfetacaoDTO);
    }
}
