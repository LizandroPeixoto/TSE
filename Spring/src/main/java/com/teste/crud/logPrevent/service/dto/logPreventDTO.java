package com.teste.crud.logPrevent.service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonFormat(pattern="yyyy-MM-dd' 'HH:mm:ss.SSSZ")
public class logPreventDTO {
    private Integer id;
    private String ip;
    private Date data;
    private String request;
    private String status;
    private String user_agent;
}
