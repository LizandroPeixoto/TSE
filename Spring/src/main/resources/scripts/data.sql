INSERT INTO pessoa.pessoa (id, nome, email)
    SELECT 1, 'Pessoa 01', 'pessoa01@gmail.com'
    WHERE NOT EXISTS (
        SELECT 1 FROM pessoa.pessoa WHERE id = 1
    );

INSERT INTO pessoa.pessoa (id, nome, email)
    SELECT 2, 'Pessoa 02', 'pessoa02@gmail.com'
    WHERE NOT EXISTS (
        SELECT 1 FROM pessoa.pessoa WHERE id = 2
    );