docker build -t abjarnason/nginx_ws .
docker stop nginx_ws
docker rm nginx_ws
# docker run --name nginx_wss -d -p 443:443 --link ws_text_binary_server:ws_text_binary_server -v $PWD:/root abjarnason/nginx_wss
docker run --name nginx_ws -d -p 80:80 --link ws_text_binary_server:ws_text_binary_server -v $PWD:/root abjarnason/nginx_ws
