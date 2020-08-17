package com.teste.crud.logPrevent.repository;
import com.teste.crud.logPrevent.domain.LogPrevent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface logPreventRepository extends JpaRepository<LogPrevent, Integer> {
}
