package com.teste.crud.web.rest;
import com.teste.crud.logPrevent.service.logPreventService;
import com.teste.crud.logPrevent.service.dto.logPreventDTO;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.Data;
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

    @GetMapping("/todosLogsporFiltro/{ip}{User_Agent}")
    public ResponseEntity<List<logPreventDTO>> obtertodosLogsFiltro(@PathVariable String ip, @PathVariable String User_Agent) {
        List<logPreventDTO> tipoLogPreventDTOS = logPreventService.obterTodosLogsporFiltro(ip, User_Agent);
        return ResponseEntity.ok(tipoLogPreventDTOS);
    }

    @PostMapping("/criarLog")
    @ApiOperation(value = "Criar log")
    public ResponseEntity<logPreventDTO> criarLog(@Valid @RequestBody logPreventDTO logPrevent) {
        logPreventDTO logPreventDTO = logPreventService.salvarLog(logPrevent);
        return ResponseEntity.ok(logPreventDTO);
    }

    @PostMapping("/gravarArquivo")
    @ApiOperation(value = "Gravar Arquivo de log")
    public ResponseEntity<logPreventDTO> criarLogArquivo(@Valid @RequestBody List<logPreventDTO>  arquivologPrevent) {
        logPreventDTO logPreventDTO = logPreventService.salvarArquivoLog(arquivologPrevent);
        return ResponseEntity.ok(logPreventDTO);
    }

}
