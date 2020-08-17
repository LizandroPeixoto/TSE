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
    public logPreventDTO salvarLog(logPreventDTO pessoa) {
        if (Objects.isNull(pessoa))
            throw new IllegalArgumentException("Objeto log nulo");

        LogPrevent logPreventSalvar = logPreventMapper.dtoParaEntidade(pessoa);
        logPreventSalvar.setId(pessoa.getId());
        logPreventSalvar.setData(pessoa.getData());
        logPreventSalvar.setIp(pessoa.getIp());
        logPreventSalvar.setStatus(pessoa.getStatus());
        logPreventSalvar.setUser_agent(pessoa.getUser_agent());

        logPreventRepository.save(logPreventSalvar);

        return logPreventMapper.entidadeParaDTO(logPreventSalvar);

    }
}
