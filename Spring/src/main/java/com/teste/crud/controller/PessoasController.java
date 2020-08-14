package com.teste.crud.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.crud.model.Pessoas;
import com.teste.crud.repo.PessoasRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PessoasController {

	@Autowired
	PessoasRepository repository;

	@GetMapping("/pessoas")
	public List<Pessoas> getAllPessoas() {
		System.out.println("Todas as pessoas ...");

		List<Pessoas> pessoas = new ArrayList<>();
		repository.findAll().forEach(pessoas::add);

		return pessoas;
	}

	@PostMapping(value = "/pessoas/create")
	public Pessoas postPessoa(@RequestBody Pessoas pessoa) {

		Pessoas _pessoa = repository.save(new Pessoas(pessoa.getNome(), pessoa.getEmail()));
		return _pessoa;
	}

	@DeleteMapping("/pessoas/{id}")
	public ResponseEntity<String> deletePessoa(@PathVariable("id") long id) {
		System.out.println("Delete Pessoa with ID = " + id + "...");

		repository.deleteById(id);

		return new ResponseEntity<>("Registro Apagado!", HttpStatus.OK);
	}

	@DeleteMapping("/pessoas/delete")
	public ResponseEntity<String> deleteAllPessoas() {
		System.out.println("Apagando registros...");

		repository.deleteAll();

		return new ResponseEntity<>("Todos os registros foram apagados!", HttpStatus.OK);
	}

	@GetMapping(value = "pessoas/email/{email}")
	public List<Pessoas> findByEmail(@PathVariable String email) {

		List<Pessoas> pessoas = repository.findByEmail(email);
		return pessoas;
	}

	@PutMapping("/pessoas/{id}")
	public ResponseEntity<Pessoas> updatePessoa(@PathVariable("id") long id, @RequestBody Pessoas pessoa) {
		System.out.println("Update Pessoa with ID = " + id + "...");

		Optional<Pessoas> pessoaData = repository.findById(id);

		if (pessoaData.isPresent()) {
			Pessoas _pessoa = pessoaData.get();
			_pessoa.setNome(pessoa.getNome());
			_pessoa.setEmail(pessoa.getEmail());
			_pessoa.setActive(pessoa.isActive());
			return new ResponseEntity<>(repository.save(_pessoa), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
