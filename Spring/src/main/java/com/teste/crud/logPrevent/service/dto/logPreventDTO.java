package com.teste.crud.logPrevent.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class logPreventDTO {
    private Integer id;
    private String ip;
    private Date data;
    private String request;
    private String status;
    private String user_agent;
}
