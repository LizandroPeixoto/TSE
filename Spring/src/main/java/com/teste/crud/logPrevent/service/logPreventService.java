package com.teste.crud.logPrevent.service;
import com.teste.crud.logPrevent.service.dto.logPreventDTO;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

public interface logPreventService {

    @Transactional(readOnly = true)
    List<logPreventDTO> obterTodosLogs();

    @Transactional
    logPreventDTO salvarLog(logPreventDTO logPrevent);

    @Transactional
    logPreventDTO salvarArquivoLog(List<logPreventDTO> logPrevent);

    @Transactional(readOnly = true)
    List<logPreventDTO> obterTodosLogsporFiltro(String ip, String User_Agent);
}
