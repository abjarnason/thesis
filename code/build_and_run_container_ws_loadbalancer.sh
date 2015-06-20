docker build -t abjarnason/nginx_ws .
docker stop nginx_ws
docker rm nginx_ws
docker run --name nginx_ws -d -p 80:80 --link ws_text_binary_server1:ws_text_binary_server1 --link ws_text_binary_server2:ws_text_binary_server2 --link ws_text_binary_server3:ws_text_binary_server3 -v $PWD:/root abjarnason/nginx_ws
