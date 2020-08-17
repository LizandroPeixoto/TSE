package com.teste.crud.logPrevent.service.mapper;
import com.teste.crud.logPrevent.domain.LogPrevent;
import com.teste.crud.logPrevent.service.dto.logPreventDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Objects;

@AllArgsConstructor
@Component
public class LogPreventMapper implements AbstractMapper<LogPrevent, logPreventDTO>  {
    @Override
    public logPreventDTO entidadeParaDTO(LogPrevent entidade) {
        return Objects.isNull(entidade) ? null : logPreventDTO.builder()
                .id(entidade.getId())
                .ip(entidade.getIp())
                .data(entidade.getData())
                .request(entidade.getRequest())
                .status(entidade.getStatus())
                .user_agent(entidade.getUser_agent())
                .build();
    }

    @Override
    public LogPrevent dtoParaEntidade(logPreventDTO logPreventDTO) {
        return Objects.isNull(logPreventDTO) ? null :
                LogPrevent.builder()
                        .ip(logPreventDTO.getIp())
                        .data(logPreventDTO.getData())
                        .request(logPreventDTO.getRequest())
                        .status(logPreventDTO.getStatus())
                        .user_agent(logPreventDTO.getUser_agent())
                        .build();
    }
}
