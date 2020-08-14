package com.teste.tse.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.teste.tse.model.Pessoas;

public interface PessoasRepository extends CrudRepository<Pessoas, Long> {
	List<Pessoas> findByEmail(String email);
}
