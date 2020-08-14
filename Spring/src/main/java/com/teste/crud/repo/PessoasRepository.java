package com.teste.crud.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.teste.crud.model.Pessoas;

public interface PessoasRepository extends CrudRepository<Pessoas, Long> {
	List<Pessoas> findByEmail(String email);
}
