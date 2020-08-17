package com.teste.crud.logPrevent.domain;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "logprevent", schema = "logprevent")
public class LogPrevent implements Serializable, Cloneable{

    @Id
    @SequenceGenerator(name = "logPrevent_id_seq", sequenceName = "logPrevent_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "logPrevent_id_seq")
    @Column(name = "id")
    private Integer id;

    @Column(name = "ip")
    private String ip;

    @Column(name = "data")
    private Date data;

    @Column(name = "request")
    private String request;

    @Column(name = "status")
    private String status;

    @Column(name = "user_agent")
    private String user_agent;
}
