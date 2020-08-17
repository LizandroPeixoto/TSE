package com.teste.crud.web.rest;
import com.teste.crud.logPrevent.service.logPreventService;
import com.teste.crud.logPrevent.service.dto.logPreventDTO;
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

public class logPreventResoucer {

    private logPreventService logPreventService;

    @GetMapping("/todosLogs")
    public ResponseEntity<List<logPreventDTO>> obtertodosLogs() {
        List<logPreventDTO> tipoLogPreventDTOS = logPreventService.obterTodosLogs();
        return ResponseEntity.ok(tipoLogPreventDTOS);
    }

    @PostMapping("/criarLog")
    @ApiOperation(value = "Criar log")
    public ResponseEntity<logPreventDTO> criarPessoa(@Valid @RequestBody logPreventDTO propostaAfetacao) {
        logPreventDTO logPreventDTO = logPreventService.salvarLog(propostaAfetacao);
        return ResponseEntity.ok(logPreventDTO);
    }
}
