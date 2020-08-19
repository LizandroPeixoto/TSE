package com.teste.crud.logPrevent.repository;
import com.teste.crud.logPrevent.domain.LogPrevent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "logPrevent.logPreventRepository")
public interface logPreventRepository extends JpaRepository<LogPrevent, Integer> {

    @Query(value = "SELECT * from logPrevent  " +
            "WHERE  ip LIKE '%' || :ip || '%' " +
            " AND user_agent '%' || :User_Agent || '%'  ", nativeQuery = true)
    List<LogPrevent>  obterTodosLogsporFiltro(String ip, String User_Agent);
}
