package com.teste.crud.logPrevent.service.impl;

import com.teste.crud.logPrevent.domain.LogPrevent;
import com.teste.crud.logPrevent.repository.logPreventRepository;
import com.teste.crud.logPrevent.service.logPreventService;
import com.teste.crud.logPrevent.service.dto.logPreventDTO;
import com.teste.crud.logPrevent.service.mapper.LogPreventMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@Service
@Slf4j
public class logPreventServiceImpl implements logPreventService {

    private logPreventRepository logPreventRepository;
    private LogPreventMapper logPreventMapper;

    @Override
    public List<logPreventDTO> obterTodosLogs() {
        List<LogPrevent> logPrevents = logPreventRepository.findAll();
        return logPreventMapper.entidadesParaDTOs(logPrevents);
    }

    @Override
    public List<logPreventDTO> obterTodosLogsporFiltro(String ip, String User_Agent) {
        List<LogPrevent> logPrevents = logPreventRepository.obterTodosLogsporFiltro(ip, User_Agent);
        return logPreventMapper.entidadesParaDTOs(logPrevents);
    }

    @Override
    public logPreventDTO salvarLog(logPreventDTO logPrevent) {
        if (Objects.isNull(logPrevent))
            throw new IllegalArgumentException("Objeto log nulo");

        LogPrevent logPreventSalvar = logPreventMapper.dtoParaEntidade(logPrevent);
        logPreventSalvar.setId(logPrevent.getId());
        logPreventSalvar.setData(logPrevent.getData());
        logPreventSalvar.setIp(logPrevent.getIp());
        logPreventSalvar.setStatus(logPrevent.getStatus());
        logPreventSalvar.setUser_agent(logPrevent.getUser_agent());

        logPreventRepository.save(logPreventSalvar);

        return logPreventMapper.entidadeParaDTO(logPreventSalvar);

    }

    @Override
    public logPreventDTO salvarArquivoLog(List<logPreventDTO> logPreventList) {
        if (Objects.isNull(logPreventList))
            throw new IllegalArgumentException("Objeto log nulo");

        logPreventList.forEach( logPreventLista -> {
            LogPrevent logPreventSalvar = logPreventMapper.dtoParaEntidade(logPreventLista);
            logPreventSalvar.setId(logPreventLista.getId());
            logPreventSalvar.setData(logPreventLista.getData());
            logPreventSalvar.setIp(logPreventLista.getIp());
            logPreventSalvar.setStatus(logPreventLista.getStatus());
            logPreventSalvar.setUser_agent(logPreventLista.getUser_agent());
            logPreventRepository.save(logPreventSalvar);
        });

        return null;
    }
}
