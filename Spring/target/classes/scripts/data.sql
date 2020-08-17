INSERT INTO LogPrevent.logPrevent (id, data, ip, request, status, user_agent)
    SELECT 1, '2019-01-01 00:00:11.763', '192.168.234.82', 'GET / HTTP/1.1', '200', 'swcd (unknown version) CFNetwork/808.2.16 Darwin/15.6.0'
    WHERE NOT EXISTS (
        SELECT 1 FROM logPrevent.logPrevent WHERE id = 1
    );

INSERT INTO LogPrevent.logPrevent (id, data, ip, request, status, user_agent)
    SELECT 2, '2019-01-01 00:00:21.164', '192.168.169.194', 'GET / HTTP/1.1', '200', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
    WHERE NOT EXISTS (
        SELECT 1 FROM logPrevent.logPrevent WHERE id = 2
    );